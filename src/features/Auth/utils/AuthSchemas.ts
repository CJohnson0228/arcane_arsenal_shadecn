import { z } from 'zod'

const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email must be a valid email address',
  }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .max(20, { message: 'Password can be no longer than 20 characters' })
    .refine((password) => /[A-Z]/.test(password), {
      message: 'Password must have at least one upper case latter',
    })
    .refine((password) => /[a-z]/.test(password), {
      message: 'Password must have at least one lower case letter',
    })
    .refine((password) => /[0-9]/.test(password), {
      message: 'Password must have at least one number',
    })
    .refine((password) => /[!@#$%^&*]/.test(password), {
      message: 'Password must have at least one special character',
    }),
})

const RegisterSchema = z.object({
  firstName: z.string().min(3, {
    message: 'First name must be at least 3 characters',
  }),
  lastName: z.string().min(3, {
    message: 'Last name must be at least 3 characters',
  }),
  email: z.string().email({
    message: 'Email must be a valid email address',
  }),
  password: z
    .string()
    .min(7, { message: 'Password must be at least 7 characters' })
    .max(20, { message: 'Password can be no longer than 20 characters' })
    .refine((password) => /[A-Z]/.test(password), {
      message: 'Password must have at least one upper case latter',
    })
    .refine((password) => /[a-z]/.test(password), {
      message: 'Password must have at least one lower case letter',
    })
    .refine((password) => /[0-9]/.test(password), {
      message: 'Password must have at least one number',
    })
    .refine((password) => /[!@#$%^&*]/.test(password), {
      message: 'Password must have at least one special character',
    }),
})

export { LoginSchema, RegisterSchema }
