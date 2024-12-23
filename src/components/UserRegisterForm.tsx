import { useUser } from "../hooks/useUser";
import { Button } from "./ui/button";
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { RegisterUser } from "@/dto/User/RegisterUser";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { toast } from "@/hooks/use-toast";

export const UserRegisterForm = () => {
  const router = useNavigate()
  const { useRegisterUser } = useUser();
  const { isPending, isSuccess, isError, error, mutate } = useRegisterUser();


  const form = useForm<z.infer<typeof RegisterUser>>({
    resolver: zodResolver(RegisterUser),
    defaultValues: {
      username: "",
      email: "",
      password: ""
    }
  })

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Registration Successful",
        description: "You have successfully created an account.",
      })
      router("/")
    }
    if (isError) {
      toast({
        title: "Registration Failed",
        description: error?.message || "An error occurred during registration.",
        variant: "destructive",
      })
    }
  }, [isSuccess, isError, error, router])

  const onSubmit = (data: z.infer<typeof RegisterUser>) => {
    mutate({
      username: data.username,
      email: data.email,
      password: data.password
    })

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="johndoe" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@example.com" {...field} />
              </FormControl>
              <FormDescription>
                We'll never share your email with anyone else.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormDescription>
                Use a strong password with at least 6 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? "Registering..." : "Register"}
        </Button>
      </form>
    </Form>
  )
};
