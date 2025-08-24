import { User } from '../auth';

type Answer = {
  id: string;
  questionId: string;
  content: string;
};

export type Submission = {
  id: string;
  user: User;
  answers: Answer[];

  createdAt: Date | string;
};

export type CreateSubmissionData = {
  answers: Omit<Answer, 'id'>[];
};
