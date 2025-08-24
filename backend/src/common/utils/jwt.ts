import jwt from 'jsonwebtoken';
import { env } from './envConfig';

class _JWTService {
  public sign(payload: string | Buffer | object) {
    return jwt.sign(payload, env.JWT_SECRET, {
      expiresIn: '24h',
    });
  }

  public verify(token: string) {
    return jwt.verify(token, env.JWT_SECRET);
  }
}

export const JWTService = new _JWTService();
