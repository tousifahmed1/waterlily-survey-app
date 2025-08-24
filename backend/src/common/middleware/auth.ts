import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { JWTService } from '../utils/jwt';
import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

export const bearerAuthRegistry = new OpenAPIRegistry();

export const bearerAuth = bearerAuthRegistry.registerComponent(
  'securitySchemes',
  'bearerAuth',
  {
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT',
  }
);

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED).send('Unauthorized');
  }

  const decoded = JWTService.verify(token) as { id: string };

  if (!decoded) {
    return res.status(StatusCodes.UNAUTHORIZED).send('Unauthorized');
  }

  req.userId = decoded.id;
  next();
};
