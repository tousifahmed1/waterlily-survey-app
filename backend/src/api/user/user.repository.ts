import { Prisma, prisma } from '@/common/utils/prisma';

export class UserRepository {
  public findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
  }

  public findById(id: string) {
    return prisma.user.findUnique({ where: { id } });
  }

  public create(data: Prisma.UserCreateInput) {
    return prisma.user.create({ data });
  }
}
