import { prisma, Prisma } from '@/common/utils/prisma';
import { SubmissionDBArgs } from './submission.db-args';

export class SubmissionRepository {
  public create(data: Prisma.SubmissionCreateInput) {
    return prisma.submission.create({
      include: SubmissionDBArgs.include,
      data,
    });
  }

  public findById(id: string) {
    return prisma.submission.findUnique({
      include: SubmissionDBArgs.include,
      where: { id },
    });
  }
}
