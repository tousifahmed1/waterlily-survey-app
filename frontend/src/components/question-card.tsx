import { SubmissionFormData } from '@/app/(auth)/survey/types';
import { Question } from '@/repositories/question';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from './ui/form';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { RadioGroup } from '@radix-ui/react-radio-group';
import { RadioGroupItem } from './ui/radio-group';

type Props = {
  index: number;
  question: Question;

  disabled?: boolean;
};

export const QuestionCard: React.FC<Props> = (props) => {
  const { question, index, disabled = false } = props;

  const { control } = useFormContext<SubmissionFormData>();

  return (
    <FormField
      control={control}
      name={`answers.${index}.content`}
      render={({ field }) => (
        <FormItem>
          <Card className='p-4 max-w-lg'>
            <FormLabel>
              {question.title}

              {question.isRequired && <span className='text-red-500'>*</span>}
            </FormLabel>
            <FormDescription>{question.description}</FormDescription>

            <FormControl>
              <div>
                {question.type === 'number' && (
                  <Input
                    {...field}
                    type='number'
                    placeholder='Enter your answer'
                    min='0'
                    disabled={disabled}
                    value={field.value || ''}
                  />
                )}

                {question.type === 'paragraph' && (
                  <Textarea
                    {...field}
                    placeholder='Enter your answer'
                    className='resize-none'
                    rows={4}
                    disabled={disabled}
                    value={field.value || ''}
                  />
                )}

                {question.type === 'checkbox' && (
                  <div className='flex flex-col gap-4'>
                    <span className='font-semibold'>Options</span>

                    <div className='flex flex-col gap-2'>
                      {question.options.map((option) => {
                        const currentValues = field.value
                          ? field.value.split(',')
                          : [];

                        const isChecked = currentValues.includes(option.id);

                        return (
                          <div
                            key={option.id}
                            className='flex items-center gap-2'
                          >
                            <Checkbox
                              id={`${question.id}-${option.id}`}
                              checked={isChecked}
                              disabled={disabled}
                              onCheckedChange={(checked) => {
                                let newVals = [...currentValues];

                                if (checked) {
                                  newVals.push(option.id);
                                } else {
                                  newVals = newVals.filter(
                                    (val) => val !== option.id
                                  );
                                }

                                field.onChange(newVals.join(','));
                              }}
                              className='p-2'
                            />
                            <Label htmlFor={`${question.id}-${option.id}`}>
                              {option.label}
                            </Label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {question.type === 'multipleChoice' && (
                  <div className='flex flex-col gap-4'>
                    <span className='font-semibold'>Options</span>

                    <RadioGroup
                      onValueChange={field.onChange}
                      disabled={disabled}
                      className='flex flex-col gap-2'
                    >
                      {question.options.map((option) => {
                        const isChecked = field.value === option.id;

                        return (
                          <div
                            key={option.id}
                            className='flex items-center gap-2'
                          >
                            <RadioGroupItem
                              id={`${question.id}-${option.id}`}
                              checked={isChecked}
                              value={option.id}
                            />
                            <Label htmlFor={`${question.id}-${option.id}`}>
                              {option.label}
                            </Label>
                          </div>
                        );
                      })}
                    </RadioGroup>
                  </div>
                )}
              </div>
            </FormControl>
          </Card>
        </FormItem>
      )}
    />
  );
};
