'use client';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { SubmissionFormData } from '../survey/types';
import { Submission } from '@/repositories/submission/types';
import { SubmissionService } from '@/repositories/submission/serivce';
import { Loading, QuestionCard } from '@/components';
import { SURVEY_QUESTIONS } from '@/repositories/question';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

export const SubmissionView = () => {
  const params = useParams();
  const router = useRouter();

  const submissionId = params.id as string;

  const [submission, setSubmission] = useState<Submission | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const form = useForm<SubmissionFormData>();

  useEffect(() => {
    if (submissionId) {
      setIsLoading(true);

      SubmissionService.getById(submissionId)
        .then((data) => setSubmission(data.responseObject))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [submissionId]);

  useEffect(() => {
    if (!!submission) {
      form.setValue('answers', submission.answers);
    }
  }, [submission]);

  if (isLoading) {
    return <Loading />;
  }

  if (!submission) {
    return (
      <div className='flex items-center justify-center min-h-120'>
        <Card className='text-center flex w-full mx-4 max-w-lg'>
          <CardHeader>
            <CardTitle>Submission not found</CardTitle>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className='flex flex-col p-16 items-center'>
      <div className='text-center flex flex-col gap-2'>
        <h2 className='text-2xl font-semibold'>Submission</h2>

        <p className='text-sm text-muted-foreground'>
          <span>Submission Data: </span>
          <span>{new Date(submission.createdAt).toLocaleDateString()}</span>
        </p>

        <p className='text-sm text-muted-foreground'>
          <span>Submission By: </span>
          <span>{submission.user.name}</span>
        </p>
      </div>

      <FormProvider {...form}>
        <form className='space-y-6 mt-6'>
          {SURVEY_QUESTIONS.map((question, index) => (
            <QuestionCard
              key={question.id}
              question={question}
              index={index}
              disabled
            />
          ))}

          <Button
            type='button'
            onClick={() => router.push('/survey')}
            className='flex mx-auto'
          >
            Submit another
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};
