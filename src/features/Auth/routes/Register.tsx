import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoaderCircle } from "lucide-react"
import { motion } from "motion/react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { AuthProps } from "../Auth"
import useAuthentication from "../hooks/useAuth"

const RegisterSchema = z.object({
  firstName: z.string().min(3, {
    message: "First name must be at least 3 characters"
  }),
  lastName: z.string().min(3, {
    message: "Last name must be at least 3 characters"
  }),
  email: z.string().email({
    message: "Email must be a valid email address"
  }),
  password: z
    .string()
    .min(7, { message: "Password must be at least 7 characters" })
    .max(20, { message: "Password can be no longer than 20 characters" })
    .refine((password) => /[A-Z]/.test(password), {
      message: "Password must have at least one upper case latter",
    })
    .refine((password) => /[a-z]/.test(password), {
      message: "Password must have at least one lower case letter",
    })
    .refine((password) => /[0-9]/.test(password), { message: "Password must have at least one number" })
    .refine((password) => /[!@#$%^&*]/.test(password), {
      message: "Password must have at least one special character",
    })
})

const Register = (props: AuthProps) => {
  const { isLoading, error, signUpCall } = useAuthentication()
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    }
  })
  const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
    signUpCall(data.firstName, data.lastName, data.email, data.password)
  }

  return (
    <div
      className="w-64">
      {isLoading &&
        <div className='top-0 left-0 absolute flex justify-center items-center bg-black/40 w-full h-full text-white'>
          <motion.div animate={{ rotate: 360 }} transition={{ ease: 'linear', duration: 2, repeat: Infinity }}>
            <LoaderCircle size={48} />
          </motion.div>
        </div>
      }
      <div
        className="mb-3 text-2xl text-center">
        Register
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField control={form.control} name='firstName' render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs">First Name</FormLabel>
              <FormControl>
                <Input placeholder='John' {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )} />
          <FormField control={form.control} name='lastName' render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs">Last Name</FormLabel>
              <FormControl>
                <Input placeholder='Doe' {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )} />
          <FormField control={form.control} name='email' render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs">Email</FormLabel>
              <FormControl>
                <Input type='email' placeholder='johndoe@email.com' {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )} />
          <FormField control={form.control} name='password' render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs">Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder='abc123!' {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )} />
          <div
            className="my-4 text-center text-sm">Have an Account?
            <span
              className="ml-2 text-primary cursor-pointer"
              onClick={props.switch}>
              Login here
            </span>
          </div>
          <div
            className="flex justify-center">
            <Button type="submit">
              Register
            </Button>
          </div>
        </form>
        {error && <div className="bg-destructive text-destructive-foreground">{error}</div>}
      </Form>
    </div>
  )
}

export default Register