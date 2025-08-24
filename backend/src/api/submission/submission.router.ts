import { validateRequest } from '@/common/utils/httpHandlers';
import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import express, { Router } from 'express';
import {
  CreateSubmissionSchema,
  GetSubmissionSchema,
  SubmissionSchema,
} from './submission.schema';
import { submissionController } from './submission.controller';
import { StatusCodes } from 'http-status-codes';
import { createApiResponse } from '@/api-docs/openAPIResponseBuilders';
import { bearerAuth } from '@/common/middleware/auth';

export const submissionRegistry = new OpenAPIRegistry();
export const submissionRouter: Router = express.Router();

submissionRegistry.registerPath({
  method: 'post',
  path: '/api/v1/submissions',
  tags: ['Submission'],
  security: [{ [bearerAuth.name]: [] }],
  request: {
    body: {
      content: {
        'application/json': {
          schema: CreateSubmissionSchema.shape.body,
        },
      },
    },
  },
  responses: createApiResponse(
    SubmissionSchema,
    'Success',
    StatusCodes.CREATED
  ),
});
submissionRouter.post(
  '/',
  validateRequest(CreateSubmissionSchema),
  submissionController.create
);

submissionRegistry.registerPath({
  method: 'get',
  path: '/api/v1/submissions/{id}',
  tags: ['Submission'],
  security: [{ [bearerAuth.name]: [] }],
  request: { params: GetSubmissionSchema.shape.params },
  responses: createApiResponse(SubmissionSchema, 'Success', StatusCodes.OK),
});
submissionRouter.get(
  '/:id',
  validateRequest(GetSubmissionSchema),
  submissionController.findById
);
