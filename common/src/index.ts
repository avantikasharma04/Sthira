import z from "zod";

export const signupInput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})

export type SignupInput = z.infer<typeof signupInput>

export const signinInput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
})

export type SigninInput = z.infer<typeof signinInput>


export const anxietyFormInput = z.object({
    1: z.number().min(1).max(4),
    2: z.number().min(1).max(4),
    3: z.number().min(1).max(4),
    4: z.number().min(1).max(4),
    5: z.number().min(1).max(4),
    6: z.number().min(1).max(4),
    7: z.number().min(1).max(4),
    8: z.number().min(1).max(4),
    9: z.number().min(1).max(4),
    10: z.number().min(1).max(4),
    11: z.number().min(1).max(4),
    12: z.number().min(1).max(4),
    13: z.number().min(1).max(4),
    14: z.number().min(1).max(4),
    15: z.number().min(1).max(4),
    16: z.number().min(1).max(4),
    17: z.number().min(1).max(4),
});

export type AnxietyFormInput = z.infer<typeof anxietyFormInput>;
