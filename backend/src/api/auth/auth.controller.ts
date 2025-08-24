import { RequestHandler, Request, Response } from 'express';
import { authService } from './auth.service';

class AuthController {
  public register: RequestHandler = async (req: Request, res: Response) => {
    const auth = await authService.register(req.body);

    res.status(auth.statusCode).send(auth);
  };

  public login: RequestHandler = async (req: Request, res: Response) => {
    const auth = await authService.login(req.body);

    res.status(auth.statusCode).send(auth);
  };

  public authenticate: RequestHandler = async (req: Request, res: Response) => {
    const auth = await authService.authenticate(req.userId);

    res.status(auth.statusCode).send(auth);
  };
}

export const authController = new AuthController();
