'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import { authClient } from '@/lib/auth-client';
import { signInUserSchema } from '@/lib/schemas/user-schemas';

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

const SignInForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof signInUserSchema>>({
    resolver: zodResolver(signInUserSchema),
    defaultValues: {
      email: '',
      password: '',
      callbackURL: '/dashboard',
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: z.infer<typeof signInUserSchema>) => {
    const { email, password } = data;

    await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onSuccess: () => {
          toast.success('Signed in successfully');
          router.push('/dashboard');
          router.refresh();
        },
        onError: () => {
          toast.error('Failed to sign in');
        },
      }
    );
  };

  return (
    <Card className='mx-auto max-w-lg'>
      <CardHeader>
        <CardTitle className='text-xl'>Sign In</CardTitle>
        <CardDescription>Sign in to your account</CardDescription>
      </CardHeader>
      <form
        id='sign-in'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <CardContent>
          <FieldGroup>
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
            <Button
              type='submit'
              form='sign-in'
              disabled={isSubmitting}
              className='w-full'
            >
              {isSubmitting ? (
                <>
                  <Spinner className='size-4' /> <span>Signing In</span>
                </>
              ) : (
                'Sign In'
              )}
            </Button>
            <div>
              <p>
                Don&apos;t have an account?{' '}
                <Link
                  href='/sign-up'
                  className='hover:text-primary'
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </FieldGroup>
        </CardContent>
      </form>
    </Card>
  );
};

export default SignInForm;
