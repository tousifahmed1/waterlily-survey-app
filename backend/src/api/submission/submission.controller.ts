import { RequestHandler, Request, Response } from 'express';
import { submissionService } from './submission.service';

class SubmissionController {
  public create: RequestHandler = async (req: Request, res: Response) => {
    const submission = await submissionService.create(req.body, req.userId);

    res.status(submission.statusCode).send(submission);
  };

  public findById: RequestHandler = async (req: Request, res: Response) => {
    const submission = await submissionService.findById(req.params.id);

    res.status(submission.statusCode).send(submission);
  };
}

export const submissionController = new SubmissionController();
