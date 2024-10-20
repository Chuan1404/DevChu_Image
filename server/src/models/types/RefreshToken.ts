import { z } from "zod";
import { EModelStatus } from "../../share/enums";


export const RefreshTokenSchema = z.object({
  id: z.string().uuid(),
  token: z.string(),
  status: z.nativeEnum(EModelStatus).default(EModelStatus.ACTIVE),
  userId: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const RefreshTokenCreateSchema = z.object({
  token: z.string(),
  userId: z.string().uuid(),
})

export const RefreshTokenUpdateSchema = z.object({
  token: z.string().optional(),
  userId: z.string().uuid().optional(),
  status: z.nativeEnum(EModelStatus).optional(),
})

export const RefreshTokenCondSchema = z.object({
  token: z.string().optional(),
  userId: z.string().uuid().optional(),
  status: z.nativeEnum(EModelStatus).optional(),
})

export type RefreshToken = z.infer<typeof RefreshTokenSchema>
export type RefreshTokenCreateDTO = z.infer<typeof RefreshTokenCreateSchema>
export type RefreshTokenUpdateDTO = z.infer<typeof RefreshTokenUpdateSchema>
export type RefreshTokenCondDTO = z.infer<typeof RefreshTokenCondSchema>