import { z } from "zod";

export const creatSongSchema = z.object({
    name: z
        .string()
        .min(1, { message: "você precisa preencher o nome da música" })
        .max(32, { message: "O nome da música deve ter no máximo 32 caracteres" }),
    image: z
        .string()
        .min(1, { message: "Você precisa preencher o link da imagem" }),
    spotifyLink: z
        .string()
        .min(1, { message: "Você precisa preencher o link do spotify" })
        .refine(value => value.startsWith("https://open.spotify.com"), {
            message: "O link do Spotify deve começar com 'https://open.spotify.com'"
        })
        .refine(value => {
            const match = value.match(/track\/([^?]+)/);
            return match && match[1] ? match[1] : false;
        }, {
            message: "Link do Spotify inválido"
        })
})