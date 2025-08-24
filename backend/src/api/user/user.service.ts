import { Prisma } from '@/common/utils/prisma';
import { UserRepository } from './user.repository';

class UserService {
  private repository: UserRepository;

  constructor(repository: UserRepository = new UserRepository()) {
    this.repository = repository;
  }

  async findById(id: string) {
    return this.repository.findById(id);
  }

  async findByEmail(email: string) {
    return this.repository.findByEmail(email);
  }

  async create(data: Prisma.UserCreateInput) {
    return this.repository.create(data);
  }
}

export const userService = new UserService();
