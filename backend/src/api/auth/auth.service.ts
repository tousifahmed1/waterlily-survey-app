import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcryptjs';

import { ServiceResponse } from '@/common/models/serviceResponse';
import { userService } from '../user/user.service';
import { LoginData, RegisterData } from './auth.schema';

import { JWTService } from '@/common/utils/jwt';
import { User } from '@/common/database/generated/prisma';

class AuthService {
  async register(data: RegisterData) {
    const isEmailExists = await userService.findByEmail(data.email);

    if (isEmailExists) {
      return ServiceResponse.failure(
        'user already exists',
        null,
        StatusCodes.BAD_REQUEST
      );
    }

    const user = await userService.create({
      ...data,
      password: this.hashPassword(data.password),
    });

    const token = JWTService.sign({ id: user.id });

    return ServiceResponse.success(
      'User registered successfully',
      {
        user: this.secureAuth(user),
        token,
      },
      StatusCodes.CREATED
    );
  }

  async login(data: LoginData) {
    const user = await userService.findByEmail(data.email);

    if (!user || !this.isPasswordValid(data.password, user.password)) {
      return ServiceResponse.failure(
        'Invalid credentials',
        null,
        StatusCodes.BAD_REQUEST
      );
    }

    const token = JWTService.sign({ id: user.id });

    return ServiceResponse.success(
      'User registered successfully',
      {
        user: this.secureAuth(user),
        token,
      },
      StatusCodes.OK
    );
  }

  async authenticate(userId: string) {
    const user = await userService.findById(userId);

    if (!user) {
      return ServiceResponse.failure(
        'User not authorized',
        null,
        StatusCodes.UNAUTHORIZED
      );
    }

    return ServiceResponse.success(
      'User authenticated successfully',
      { user: this.secureAuth(user) },
      StatusCodes.OK
    );
  }

  private isPasswordValid(password: string, hashedPassword: string) {
    return bcrypt.compareSync(password, hashedPassword);
  }

  private hashPassword(password: string) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }

  private secureAuth(user: User) {
    const { password, createdAt, ...rest } = user;

    return rest;
  }
}

export const authService = new AuthService();
