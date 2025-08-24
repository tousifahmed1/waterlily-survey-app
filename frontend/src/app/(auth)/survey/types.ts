import z from 'zod';

export const SUBMISSION_FORM_SCHEMA = z.object({
  answers: z.array(
    z.object({
      questionId: z.uuid().nonempty(),
      content: z.string().trim(),
    })
  ),
});

export type SubmissionFormData = z.infer<typeof SUBMISSION_FORM_SCHEMA>;
