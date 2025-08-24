import { Prisma } from '@/common/utils/prisma';

export const SubmissionDBArgs: Prisma.SubmissionDefaultArgs = {
  include: {
    answers: true,
    user: {
      select: {
        id: true,
        name: true,
        email: true,
      },
    },
  },
};
