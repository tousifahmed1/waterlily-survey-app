import z from 'zod';

export const LOGIN_FORM_SCHEMA = z.object({
  email: z.email(),
  password: z.string(),
});

export type LoginFormData = z.infer<typeof LOGIN_FORM_SCHEMA>;
