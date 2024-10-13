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

userRouter.post('/signup', async (c) => {
    const body = await c.req.json();
    const {success} = signupInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs are not correct"
        })
    }
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

try {
    const user = await prisma.user.create({
    data: {
        username: body.username,
        password: body.password,
        name: body.name
    }
    })
    const jwt = await sign({
    id: user.id
    }, c.env.JWT_SECRET);

    return c.text(jwt)
} catch(e) {
    c.status(411);
    return c.text('Invalid')
}
})

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

userRouter.post('/profile', async (c) => {
    const token = c.req.header('Authorization')?.split(' ')[1]; // Corrected to use `header` instead of `headers`

    if (!token) {
        c.status(401);
        return c.text('Unauthorized');
    }

    let jwtPayload;
    try {
        jwtPayload = await verify(token, c.env.JWT_SECRET) as { id: number }; // Ensure verify returns a Promise and type cast as needed
        if (!jwtPayload.id) {
            c.status(401);
            return c.text('Invalid token');
        }
    } catch (error) {
        c.status(401);
        return c.text('Token verification failed');
    }

    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const profile = await prisma.profile.create({
            data: {
                userId: jwtPayload.id,
                nationality: body.nationality,
                gender: body.gender,
                ageGroup: body.ageGroup,
                orientation: body.orientation,
                relationshipStatus: body.relationshipStatus,
            },
        });
        return c.json(profile);
    } catch (error) {
        c.status(500);
        return c.text('Profile creation failed');
    } finally {
        await prisma.$disconnect();
    }
});

userRouter.post('/anxietyForm', async (c) => {
    const token = c.req.header('Authorization')?.split(' ')[1];
    if (!token) {
    c.status(401);
    return c.text('Unauthorized');
    }

    let jwtPayload;
    try {
    jwtPayload = await verify(token, c.env.JWT_SECRET) as { id: number };
    if (!jwtPayload.id) {
        c.status(401);
        return c.text('Invalid token');
    }
    } catch (error) {
    c.status(401);
    return c.text('Token verification failed');
    }

    const body = await c.req.json();
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
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
    return c.text('Error creating anxiety form');
    } finally {
    await prisma.$disconnect();
    }
});

userRouter.post('/depForm', async (c) => {
    const token = c.req.header('Authorization')?.split(' ')[1];
    if (!token) {
    c.status(401);
    return c.text('Unauthorized');
    }

    let jwtPayload;
    try {
    jwtPayload = await verify(token, c.env.JWT_SECRET) as { id: number };
    if (!jwtPayload.id) {
        c.status(401);
        return c.text('Invalid token');
    }
    } catch (error) {
    c.status(401);
    return c.text('Token verification failed');
    }

    const body = await c.req.json();
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
    const depForm = await prisma.depForm.create({
        data: {
        userId: jwtPayload.id,
        score: body.score,
        risk: body.risk,
        },
    });
    return c.json(depForm);
    } catch (error) {
    c.status(500);
    return c.text('Error creating depression form');
    } finally {
    await prisma.$disconnect();
    }
});
