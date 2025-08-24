'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { LOGIN_FORM_SCHEMA, LoginFormData } from './types';
import { useAuth } from '@/contexts/auth';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const LoginView = () => {
  const { login, isLoading } = useAuth();

  const router = useRouter();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(LOGIN_FORM_SCHEMA),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      await login(data);

      router.push('/survey');
    } catch (error) {
      if (error instanceof Error) {
        form.setError('root', {
          message: error.message || 'Something went wrong',
        });
      }
    }
  });

  return (
    <div className='flex min-h-120 justify-center items-center'>
      <Card className='w-full max-w-md'>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your email and password to login
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={onSubmit} className='space-y-4'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder='Enter your email' />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type='password'
                        placeholder='Enter your password'
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {form.formState.errors.root && (
                <div className='text-sm text-red-500 text-center bg-red-50 p-2 rounded'>
                  {form.formState.errors.root.message}
                </div>
              )}

              <Button className='w-full' disabled={isLoading}>
                Login
              </Button>
            </form>
          </Form>

          <div className='flex items-center justify-center gap-1 mt-4'>
            <span>Don't have an account?</span>
            <Link href='/register' className='text-blue-500'>
              Register
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
