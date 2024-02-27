import { z } from "zod";

export const creatPostSchema = z.object({
    title: z
        .string()
        .min(4, { message: "O título deve ter no mínimo 4 caracteres" }),
    body: z.string().min(8, { message: "O corpo deve ter no mínimo 8 caracteres" })
})