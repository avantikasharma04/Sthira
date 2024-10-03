import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { anxietyFormInput, AnxietyFormInput } from "@avantika04/sthira-common";
import { jwt } from 'hono/jwt';

// Define and export the anxietyRouter with explicit Bindings
export const anxietyRouter = new Hono<{
    Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
    };
}>();

// JWT middleware, secret is retrieved from the environment inside the route
anxietyRouter.use('/submit', async (c, next) => {
    const secret = c.env.JWT_SECRET;
  return jwt({ secret })(c, next); // Call jwt middleware inside this handler
});

anxietyRouter.post('/submit', async (c) => {
    const body = await c.req.json();

  // Validate the form input using the Zod schema
    const { success, error, data } = anxietyFormInput.safeParse(body);
    if (!success) {
    return c.json({ error: "Invalid input data" }, 400);
    }

  // Get the user's ID from the JWT token
    const tokenPayload = c.get('jwtPayload');
    const userId = tokenPayload?.id;

    if (!userId) {
    return c.json({ message: 'Unauthorized' }, 401);
    }

  // Create a Prisma client instance
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL as string,
    }).$extends(withAccelerate());

    try {
    // Store the anxiety form in the database
    const form = await prisma.anxietyForm.create({
    data: {
        userId: userId,
        score: calculateScore(data),
    },
    });

    return c.json({ message: 'Form submitted successfully', form }, 200);
    } catch (e) {
    return c.json({ error: 'Failed to submit form' }, 500);
    }
});

// Helper function to calculate the total score from the form
const calculateScore = (answers: AnxietyFormInput) => {
    return Object.values(answers).reduce((sum, value) => sum + value, 0);
};
