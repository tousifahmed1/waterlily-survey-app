import { z } from 'zod';
import { UserSchema } from '../user/user.schema';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

const AnswerSchema = z.object({
  id: z.string().uuid(),
  questionId: z.string().uuid(),
  submissionId: z.string().uuid(),
  content: z.string().trim().optional().default(''),
});

const CreateAnswerSchema = AnswerSchema.pick({
  questionId: true,
  content: true,
});

export const CreateSubmissionSchema = z.object({
  body: z.object({
    answers: z.array(CreateAnswerSchema),
  }),
});

export const GetSubmissionSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
});

export const SubmissionSchema = z.object({
  id: z.string(),
  createdAt: z.string().datetime(),
  user: UserSchema,
  answers: z.array(AnswerSchema),
});

export type CreateSubmissionData = z.infer<
  typeof CreateSubmissionSchema.shape.body
>;
