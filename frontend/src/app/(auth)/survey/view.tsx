'use client';
import React, { act, useState } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { SubmissionFormData } from './types';
import { SubmissionFormHelpers } from './helpers';
import { useRouter } from 'next/navigation';
import { SubmissionService } from '@/repositories/submission/serivce';
import { Button } from '@/components/ui/button';
import { SURVEY_QUESTIONS } from '@/repositories/question';

import { QuestionCard } from '@/components';
import { Progress } from '@/components/ui/progress';

export const SurveyView = () => {
  const router = useRouter();

  const [submissionId, setSubmissionId] = useState('');
  const [activeStep, setActiveStep] = useState(0);

  const form = useForm<SubmissionFormData>({
    defaultValues: SubmissionFormHelpers.prepareForm(),
  });

  const answers = useWatch({ control: form.control, name: 'answers' });

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      const res = await SubmissionService.create(data);

      setSubmissionId(res.responseObject.id);
    } catch (error) {
      setSubmissionId('');
    }
  });

  if (submissionId) {
    return (
      <div className='flex flex-col min-h-120 p-16 items-center justify-center gap-4'>
        <p className='text-lg'>Thank you for submitting the survey.</p>
        <div className='flex gap-2'>
          <Button onClick={() => setSubmissionId('')}>Submit again</Button>
          <Button
            onClick={() => {
              if (!submissionId) return;

              router.push(`/submissions/${submissionId}`);
            }}
          >
            View Submission
          </Button>
        </div>
      </div>
    );
  }

  const activeQuestion = SURVEY_QUESTIONS[activeStep];

  const isRequiredAndAnswered = activeQuestion.isRequired
    ? Boolean(answers[activeStep]?.content)
    : true;

  const isFormComplete = SURVEY_QUESTIONS.every((question, index) => {
    if (!question.isRequired) {
      return true;
    }

    return Boolean(answers[index].content);
  });

  const isLastQuestion = activeStep === SURVEY_QUESTIONS.length - 1;

  const handlePrevious = () => {
    if (activeStep <= 0) return 0;

    setActiveStep((prev) => prev - 1);
  };

  const handleNext = () => {
    if (isLastQuestion || !isRequiredAndAnswered) return;

    setActiveStep((prev) => prev + 1);
  };

  const nextButtonNode = isLastQuestion ? (
    <Button type='button' onClick={onSubmit} disabled={!isFormComplete}>
      Submit
    </Button>
  ) : (
    <Button
      type='button'
      onClick={handleNext}
      disabled={isLastQuestion || !isRequiredAndAnswered}
    >
      Next
    </Button>
  );

  const progress = SURVEY_QUESTIONS.length
    ? ((activeStep + 1) / SURVEY_QUESTIONS.length) * 100
    : 0;

  return (
    <div className='flex flex-col p-16 items-center'>
      <h2 className='text-2xl font-semibold'>Survey Questions</h2>

      <FormProvider {...form}>
        <form onSubmit={onSubmit} className='space-y-6 mt-6'>
          <Progress value={progress} />
          {SURVEY_QUESTIONS.slice(activeStep, activeStep + 1).map(
            (question) => (
              <QuestionCard
                key={question.id}
                question={question}
                index={activeStep}
              />
            )
          )}

          <div className='flex items-center justify-between'>
            <Button
              type='button'
              disabled={activeStep <= 0}
              onClick={handlePrevious}
            >
              Prev
            </Button>

            {nextButtonNode}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
