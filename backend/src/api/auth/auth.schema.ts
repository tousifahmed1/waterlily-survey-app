import { z } from 'zod';
import { UserSchema } from '../user/user.schema';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

export const AuthSchema = z.object({
  token: z.string(),
  user: UserSchema,
});

export const RegisterSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
  }),
});

export const LoginSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string(),
  }),
});

export type RegisterData = z.infer<typeof RegisterSchema.shape.body>;
export type LoginData = z.infer<typeof LoginSchema.shape.body>;
