'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { signIn} from "next-auth/react"
import { toast } from "sonner"

export function AuthForm() {
  const form = useForm()

  const handleSubmit = form.handleSubmit (async(data) => {
    try {

      await signIn('email', { email: data.email, redirect: false})

      toast.success('Verifique seu e-mail')
    } catch (error) {
      toast.error('Ocorreu um erro')
      
    }


  })

  return (
    <div className="mx-auto max-w-md space-y-6 py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Sign in or sign up</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your email to receive a magic link to sign in or sign up.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label className="sr-only" htmlFor="email">
            Email
          </Label>
          <Input id="email" placeholder="you@example.com" required type="email" { ...form.register('email')} />
        </div>
        <Button className="w-full" type="submit">
          Send magic link
        </Button>
      </form>
     
    </div>
  )
}