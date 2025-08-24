import { ServiceResponse } from '@/common/models/serviceResponse';
import { SubmissionRepository } from './submission.repository';
import { StatusCodes } from 'http-status-codes';
import { CreateSubmissionData } from './submission.schema';

class SubmissionService {
  private repository: SubmissionRepository;

  constructor(repository: SubmissionRepository = new SubmissionRepository()) {
    this.repository = repository;
  }

  async findById(id: string) {
    const submission = await this.repository.findById(id);

    if (!submission) {
      return ServiceResponse.failure(
        'Submission not found',
        null,
        StatusCodes.NOT_FOUND
      );
    }

    return ServiceResponse.success(
      'Submission found',
      submission,
      StatusCodes.OK
    );
  }

  async create(data: CreateSubmissionData, userId: string) {
    const submission = await this.repository.create({
      user: { connect: { id: userId } },
      answers: {
        createMany: {
          data: data.answers,
        },
      },
    });

    return ServiceResponse.success(
      'Submission created successfully',
      submission,
      StatusCodes.CREATED
    );
  }
}

export const submissionService = new SubmissionService();
