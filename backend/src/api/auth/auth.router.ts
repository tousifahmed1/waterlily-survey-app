import { validateRequest } from '@/common/utils/httpHandlers';
import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import express, { Router } from 'express';
import { AuthSchema, LoginSchema, RegisterSchema } from './auth.schema';
import { authController } from './auth.controller';
import { authMiddleware, bearerAuth } from '@/common/middleware/auth';
import { createApiResponse } from '@/api-docs/openAPIResponseBuilders';
import { StatusCodes } from 'http-status-codes';

export const authRegistry = new OpenAPIRegistry();
export const authRouter: Router = express.Router();

authRegistry.registerPath({
  method: 'post',
  path: '/api/v1/auth/register',
  tags: ['Auth'],
  request: {
    body: {
      content: {
        'application/json': {
          schema: RegisterSchema.shape.body,
        },
      },
    },
  },
  responses: createApiResponse(AuthSchema, 'Success', StatusCodes.CREATED),
});
authRouter.post(
  '/register',
  validateRequest(RegisterSchema),
  authController.register
);

authRegistry.registerPath({
  method: 'post',
  path: '/api/v1/auth/login',
  tags: ['Auth'],
  request: {
    body: {
      content: {
        'application/json': {
          schema: LoginSchema.shape.body,
        },
      },
    },
  },
  responses: createApiResponse(AuthSchema, 'Success', StatusCodes.OK),
});
authRouter.post('/login', validateRequest(LoginSchema), authController.login);

authRegistry.registerPath({
  method: 'get',
  path: '/api/v1/auth/me',
  tags: ['Auth'],
  security: [{ [bearerAuth.name]: [] }],
  responses: createApiResponse(
    AuthSchema.omit({ token: true }),
    'Success',
    StatusCodes.OK
  ),
});
authRouter.get('/me', authMiddleware, authController.authenticate);
