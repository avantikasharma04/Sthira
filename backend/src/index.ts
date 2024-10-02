import { Hono } from 'hono'
import { userRouter } from './routes/user';


const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}>()

app.route("/api/v1/user", userRouter);


export default app

//postgres://avnadmin:AVNS_G2U5bFeXdChDwpy5RKI@pg-39c3bce8-avantikasharma405-0814.j.aivencloud.com:26431/defaultdb?sslmode=require

//DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiYmZmYmUyZWQtNzU4Yy00ZjFkLTk5ODktNWUyN2ZlYWM2MTgwIiwidGVuYW50X2lkIjoiMTA2MDg5ZjZjMzU5MmQyMDc1ZWU1ZjI2YTkxM2U5NjI4M2I1ZDJjNTg4NjBjMTY2YTNhNWU4NGRlYTk2MTczNiIsImludGVybmFsX3NlY3JldCI6Ijc5OTBmZmQ3LTVkODAtNGE3Yy04ODE0LTczZmNiZmIyYzU4ZiJ9.fKdrfsGpHvv1Ae9hEuZTxgRH9PdSETU-80GgI_JeaE0"