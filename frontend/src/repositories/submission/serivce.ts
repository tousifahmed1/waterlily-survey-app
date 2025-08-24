import { api } from '@/lib/api';
import { CreateSubmissionData, Submission } from './types';

class _SubmissionService {
  async create(data: CreateSubmissionData) {
    return api<Submission>('/submissions/', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getById(id: string) {
    return api<Submission>(`/submissions/${id}`);
  }
}

export const SubmissionService = new _SubmissionService();
