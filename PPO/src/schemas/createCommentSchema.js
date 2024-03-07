import { z } from "zod";

export const creatCommentSchema = z.object({
    text: z.string().min(4, { message: "O corpo do comentário deve ter no mínimo 4 caracteres" })
})