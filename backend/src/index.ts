import { Hono } from 'hono'
import { jwt } from 'hono/jwt';
import { userRouter } from './routes/user';
import { anxietyRouter } from './routes/anxiety';
import { cors } from 'hono/cors'


const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}>()

app.use('/*', cors())
app.route("/api/v1/user", userRouter);

app.route("/api/v1/anxiety", anxietyRouter);


export default app



