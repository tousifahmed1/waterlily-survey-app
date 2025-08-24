import z from 'zod';

export const REGISTER_FORM_SCHEMA = z.object({
  name: z.string().trim().nonempty(),
  email: z.email(),
  password: z.string().min(8),
});

export type RegisterFormData = z.infer<typeof REGISTER_FORM_SCHEMA>;
