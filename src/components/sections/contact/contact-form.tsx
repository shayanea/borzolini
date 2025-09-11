'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  consent: z.literal<boolean>(true, {
    errorMap: () => ({ message: 'Please accept the privacy policy' }),
  }),
});

export type ContactFormValues = z.infer<typeof schema>;

export const ContactForm = () => {
  const [serverError, setServerError] = useState<string | null>(null);
  const [serverSuccess, setServerSuccess] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(schema), mode: 'onTouched' });

  const onSubmit = async (values: ContactFormValues) => {
    setServerError(null);
    setServerSuccess(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Failed to send message');
      }
      setServerSuccess('Message sent successfully. We will get back to you shortly.');
      reset();
    } catch (err) {
      setServerError((err as Error).message);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className='mx-auto max-w-2xl space-y-6'>
        {serverError && (
          <div className='rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-700'>{serverError}</div>
        )}
        {serverSuccess && (
          <div className='rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-700'>{serverSuccess}</div>
        )}

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-slate-700'>
              Name
            </label>
            <input
              id='name'
              type='text'
              {...register('name')}
              className='mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Jane Doe'
              aria-invalid={!!errors.name}
            />
            {errors.name && <p className='mt-1 text-sm text-red-600'>{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-slate-700'>
              Email
            </label>
            <input
              id='email'
              type='email'
              {...register('email')}
              className='mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='jane@example.com'
              aria-invalid={!!errors.email}
            />
            {errors.email && <p className='mt-1 text-sm text-red-600'>{errors.email.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor='subject' className='block text-sm font-medium text-slate-700'>
            Subject
          </label>
          <input
            id='subject'
            type='text'
            {...register('subject')}
            className='mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='How can we help?'
            aria-invalid={!!errors.subject}
          />
          {errors.subject && <p className='mt-1 text-sm text-red-600'>{errors.subject.message}</p>}
        </div>

        <div>
          <label htmlFor='message' className='block text-sm font-medium text-slate-700'>
            Message
          </label>
          <textarea
            id='message'
            rows={5}
            {...register('message')}
            className='mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Provide as much detail as you can...'
            aria-invalid={!!errors.message}
          />
          {errors.message && <p className='mt-1 text-sm text-red-600'>{errors.message.message}</p>}
        </div>

        <div className='flex items-start gap-3'>
          <input
            id='consent'
            type='checkbox'
            {...register('consent')}
            className='mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500'
            aria-invalid={!!errors.consent}
          />
          <label htmlFor='consent' className='text-sm text-slate-700'>
            I agree to the processing of my information as described in the privacy policy.
          </label>
        </div>
        {errors.consent && <p className='-mt-2 text-sm text-red-600'>{errors.consent.message}</p>}

        <div className='pt-2'>
          <Button type='submit' disabled={isSubmitting} className='min-w-32'>
            {isSubmitting ? 'Sending…' : 'Send message'}
          </Button>
        </div>
      </form>
    </Container>
  );
};
