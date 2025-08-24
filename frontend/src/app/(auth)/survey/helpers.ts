import { SURVEY_QUESTIONS } from '@/repositories/question';

class _SubmissionFormHelpers {
  prepareForm() {
    const answers = SURVEY_QUESTIONS.map((question) => ({
      questionId: question.id,
      content: '',
    }));

    return {
      answers,
    };
  }
}

export const SubmissionFormHelpers = new _SubmissionFormHelpers();
