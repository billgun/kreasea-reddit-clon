import { Link, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { useMutation } from "~/hooks/useMutation";
import { loginFn } from "~/routes/_authed";
import { signupFn } from "~/routes/signup";
import { z } from "zod";
import { FloatingLabel, FloatingLabelInput } from "./ui/floating-label-input";
import { Form, FormField, FormItem, FormMessage } from "./ui/form";
import { GoogleButton } from "./GoogleButton";
import { Separator } from "./ui/separator";

const loginSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginDialog() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useMutation({
    fn: loginFn,
    onSuccess: async (ctx) => {
      if (!ctx.data?.error) {
        await router.invalidate();
        router.navigate({ to: "/" });
        setOpen(false);
        form.reset();
        return;
      }
    },
  });

  const signupMutation = useMutation({
    fn: signupFn,
    onSuccess: async (ctx) => {
      if (!ctx.data?.error) {
        await router.invalidate();
        router.navigate({ to: "/" });
        setOpen(false);
        form.reset();
        return;
      }
    },
  });

  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutate({
      data,
    });
  };

  const handleSignup = () => {
    const values = form.getValues();
    signupMutation.mutate({
      data: values,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex content-center items-center">
          <DialogTitle>Login</DialogTitle>
          <DialogDescription className="text-balance text-center">
            By continuing, you agree to our User Agreement and acknowledge that
            you understand the Privacy Policy.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <GoogleButton />
          <div className="relative flex items-center justify-center">
            <Separator className="flex-1" />
            <span className="bg-background px-4 text-xs text-muted-foreground">
              OR
            </span>
            <Separator className="flex-1" />
          </div>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 py-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FloatingLabelInput
                    type="email"
                    id="email"
                    label="Email"
                    {...field}
                    className="mt-1"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FloatingLabelInput
                    type="password"
                    id="password"
                    label="Password"
                    {...field}
                    className="mt-1"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            {loginMutation.data && (
              <div className="text-sm text-red-500">
                {loginMutation.data.message}
              </div>
            )}

            <Link to="/forgot-password">Forgot Password?</Link>
            <p>
              New to Kreasea? <Link to="/signup">Sign up</Link>
            </p>

            <DialogFooter>
              <Button
                type="submit"
                disabled={loginMutation.status === "pending"}
                className="w-full bg-primary"
              >
                {loginMutation.status === "pending" ? "..." : "Login"}
              </Button>
            </DialogFooter>
            {loginMutation.data?.error &&
              loginMutation.data.message === "Invalid login credentials" && (
                <div className="text-center">
                  <button
                    className="text-sm text-blue-500 hover:underline"
                    onClick={handleSignup}
                    type="button"
                  >
                    Sign up instead?
                  </button>
                </div>
              )}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
