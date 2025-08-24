type QuestionType = 'paragraph' | 'number' | 'multipleChoice' | 'checkbox';

export type QuestionOption = {
  id: string;
  label: string;
};

export type Question = {
  id: string;
  type: QuestionType;
  title: string;
  description: string;
  options: QuestionOption[];
  isRequired: Boolean;
};
