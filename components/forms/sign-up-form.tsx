'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import { authClient } from '@/lib/auth-client';
import { createUserSchema } from '@/lib/schemas/user-schemas';

import { FormFieldControl } from '../form-fields/FormFieldControl';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { FieldGroup } from '../ui/field';
import { Spinner } from '../ui/spinner';

const SignUpForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof createUserSchema>>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      callbackURL: '/dashboard',
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: z.infer<typeof createUserSchema>) => {
    const { name, email, password } = data;

    await authClient.signUp.email(
      {
        name,
        email,
        password,
      },
      {
        onSuccess: async () => {
          toast.success(
            'Account created successfully. Please check your email to verify your account',
            { duration: 8000 }
          );

          await new Promise((resolve) => setTimeout(resolve, 2000));
          router.push('/dashboard');
          router.refresh();
        },
        onError: () => {
          toast.error('Failed to create account');
        },
      }
    );
  };

  return (
    <Card className='mx-auto max-w-lg'>
      <CardHeader>
        <CardTitle className='text-xl'>Create Account</CardTitle>
        <CardDescription>Create an account to get started</CardDescription>
      </CardHeader>
      <form
        id='create-account'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <CardContent>
          <FieldGroup>
            <FormFieldControl
              control={form.control}
              name='name'
              label='Full Name'
              type='text'
              placeholder='John Doe'
              autoComplete='name'
            />
            <FormFieldControl
              control={form.control}
              name='email'
              label='Email'
              type='email'
              placeholder='john.doe@example.com'
              autoComplete='email'
            />
            <FormFieldControl
              control={form.control}
              name='password'
              label='Password'
              type='password'
              placeholder='********'
              autoComplete='off'
            />
            <FormFieldControl
              control={form.control}
              name='confirmPassword'
              label='Confirm Password'
              type='password'
              placeholder='********'
              autoComplete='off'
            />
            <Button
              type='submit'
              form='create-account'
              disabled={isSubmitting}
              className='w-full'
            >
              {isSubmitting ? (
                <>
                  <Spinner className='size-4' /> <span>Creating Account</span>
                </>
              ) : (
                'Create Account'
              )}
            </Button>
            <div>
              <p>
                Already have an account?{' '}
                <Link
                  href='/sign-in'
                  className='hover:text-primary'
                >
                  Sign In
                </Link>
              </p>
            </div>
          </FieldGroup>
        </CardContent>
      </form>
    </Card>
  );
};

export default SignUpForm;
