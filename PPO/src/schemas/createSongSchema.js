import { z } from "zod";

export const creatSongSchema = z.object({
    name: z
        .string()
        .min(1, { message: "você precisa preencher o nome da música"})
        .max(32, { message: "O nome da música deve ter no máximo 32 caracteres" }),
    image: z
        .string()
        .min(1, { message: "Você precisa preencher o link da imagem" })
})