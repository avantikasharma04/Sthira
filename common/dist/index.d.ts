import z from "zod";
export declare const signupInput: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
    name?: string | undefined;
}, {
    username: string;
    password: string;
    name?: string | undefined;
}>;
export type SignupInput = z.infer<typeof signupInput>;
export declare const signinInput: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
}, {
    username: string;
    password: string;
}>;
export type SigninInput = z.infer<typeof signinInput>;
export declare const anxietyFormInput: z.ZodObject<{
    1: z.ZodNumber;
    2: z.ZodNumber;
    3: z.ZodNumber;
    4: z.ZodNumber;
    5: z.ZodNumber;
    6: z.ZodNumber;
    7: z.ZodNumber;
    8: z.ZodNumber;
    9: z.ZodNumber;
    10: z.ZodNumber;
    11: z.ZodNumber;
    12: z.ZodNumber;
    13: z.ZodNumber;
    14: z.ZodNumber;
    15: z.ZodNumber;
    16: z.ZodNumber;
    17: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    6: number;
    2: number;
    1: number;
    4: number;
    3: number;
    5: number;
    7: number;
    8: number;
    9: number;
    10: number;
    11: number;
    12: number;
    13: number;
    14: number;
    15: number;
    16: number;
    17: number;
}, {
    6: number;
    2: number;
    1: number;
    4: number;
    3: number;
    5: number;
    7: number;
    8: number;
    9: number;
    10: number;
    11: number;
    12: number;
    13: number;
    14: number;
    15: number;
    16: number;
    17: number;
}>;
export type AnxietyFormInput = z.infer<typeof anxietyFormInput>;
