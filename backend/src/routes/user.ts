import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { signupInput } from "@avantika04/sthira-common";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();

async function verifyToken(c: any): Promise<{ id: number } | null> {
    const token = c.req.header('Authorization')?.split(' ')[1];
    if (!token) {
        c.status(401);
        c.text('Unauthorized');
        return null;
    }

    try {
        const jwtPayload = await verify(token, c.env.JWT_SECRET) as { id: number };
        return jwtPayload;
    } catch (error) {
        c.status(401);
        c.text('Invalid token');
        return null;
    }
}
userRouter.post('/signup', async (c) => {
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({ message: "Inputs are not correct" });
    }

    const prisma = new PrismaClient({ datasourceUrl: c.env.DATABASE_URL }).$extends(withAccelerate());

    try {
        const user = await prisma.user.create({
            data: {
                username: body.username,
                password: body.password,
                name: body.name,
            },
        });
        const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
        return c.text(jwt);
    } catch (e) {
        c.status(411);
        return c.text('Invalid');
    }
});


userRouter.post('/signin', async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

try {
    const user = await prisma.user.findFirst({
    where: {
        username: body.username,
        password: body.password,
    }
    })
    if (!user) {
    c.status(403);
    return c.text('Invalid')
    }
    const jwt = await sign({
    id: user.id
    }, c.env.JWT_SECRET);

    return c.text(jwt)
} catch(e) {
    c.status(411);
    return c.text('Invalid')
}
})


userRouter.post('/anxiety', async (c) => {
    const jwtPayload = await verifyToken(c);  // Verify JWT token
    if (!jwtPayload) return;
    const body = await c.req.json();
    const prisma = new PrismaClient({ datasourceUrl: c.env.DATABASE_URL }).$extends(withAccelerate());

    try {
        // Store form data in the AnxietyForm table
        const anxietyForm = await prisma.anxietyForm.create({
            data: {
                userId: jwtPayload.id,
                score: body.score,
                risk: body.risk,
            },
        });
        return c.json(anxietyForm);
    } catch (error) {
        c.status(500);
        return c.text('Anxiety form submission failed');
    } finally {
        await prisma.$disconnect();
    }
});

userRouter.post('/depression', async (c) => {
    const jwtPayload = await verifyToken(c);
    if (!jwtPayload) return;
    const body = await c.req.json();
    const prisma = new PrismaClient({ datasourceUrl: c.env.DATABASE_URL }).$extends(withAccelerate());

    try {
        const depressionForm = await prisma.depForm.create({
            data: {
                userId: jwtPayload.id,
                score: body.score,
                risk: body.risk,
            },
        });
        return c.json(depressionForm);
    } catch (error) {
        c.status(500);
        return c.text('Depression form submission failed');
    } finally {
        await prisma.$disconnect();
    }
});

userRouter.post('/hopelessness', async (c) => {
    const jwtPayload = await verifyToken(c); // Verify the JWT token to authenticate the user
    if (!jwtPayload) return; // If the token is invalid, do nothing

    const body = await c.req.json(); // Parse the request body
    const prisma = new PrismaClient({ datasourceUrl: c.env.DATABASE_URL }).$extends(withAccelerate());

    try {
        // Create a new hopelessness form record in the database
        const hopelessnessForm = await prisma.hopelessness.create({
            data: {
                userId: jwtPayload.id,  
                score: body.score,      
                riskLevel: body.risk,   // Store the risk designation (None, Mild, Moderate, Severe)
            },
        });

        // Return the created hopelessness form record as a JSON response
        return c.json(hopelessnessForm);
    } catch (error) {
        c.status(500);  // Set the status code to 500 (internal server error)
        return c.text('Hopelessness form submission failed');  // Return an error message
    } finally {
        await prisma.$disconnect();  // Disconnect the Prisma client
    }
});

userRouter.post('/bodyimage', async (c) => {
    const jwtPayload = await verifyToken(c);
    if (!jwtPayload) return;

    const body = await c.req.json();
    const prisma = new PrismaClient({ datasourceUrl: c.env.DATABASE_URL }).$extends(withAccelerate());

    try {
        const bodyImageForm = await prisma.bodyImageForm.create({
            data: {
                userId: jwtPayload.id,
                score: body.score,
                satisfaction: body.satisfaction,
            },
        });
        return c.json(bodyImageForm);
    } catch (error) {
        c.status(500);
        return c.text('Body image satisfaction form submission failed');
    } finally {
        await prisma.$disconnect();
    }
});

userRouter.post('/audit', async (c) => {
    const jwtPayload = await verifyToken(c);  // Verify JWT token
    if (!jwtPayload) return;

    const body = await c.req.json();
    const prisma = new PrismaClient({ datasourceUrl: c.env.DATABASE_URL }).$extends(withAccelerate());

    try {
        // Store form data in the AuditForm table
        const auditForm = await prisma.auditForm.create({
            data: {
                userId: jwtPayload.id,
                score: body.score,
                risk: body.risk,
            },
        });

        return c.json(auditForm);
    } catch (error) {
        c.status(500);
        return c.text('AUDIT form submission failed');
    } finally {
        await prisma.$disconnect();
    }
});
