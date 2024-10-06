import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { verify } from "hono/jwt";

export const depRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userid: string;
    }
}>();

depRouter.use("/*", async (c, next) => {
    const authHeader = c.req.header("authorization") || "";
    const user = await verify(authHeader, c.env.JWT_SECRET);
    console.log
    if (user) {
        c.set("userid" , user.id as string);
        await next();
    } else {
        c.status(403);
        return c.json({
            message: "you are not logged in"
        })
    }
    });

depRouter.post('/', async (c) => {
    const body = await c.req.json();
    const userId = c.get("userid");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

        const dep = await prisma.depForm.create({
            data: {
                score: body.score,
                risk: body.risk,
                userId: parseInt(userId)
            }
        })
    return c.json({
        id: dep.id
    })
})

