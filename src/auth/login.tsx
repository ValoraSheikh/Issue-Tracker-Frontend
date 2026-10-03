import { cn } from "cn";

import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "../../components/ui/field";
import { Input } from "../../components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { userHook } from "../features/hooks";
import { Spinner } from "../../components/ui/spinner";

export default function Login({
  className,
  ...props
}: React.ComponentProps<"div">) {             
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const loginUser = userHook.useLoginUser();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload = {
      email: email,
      password: password,
    };

    await loginUser.mutateAsync(payload, {
      onSuccess: () => {
        navigate("/profile");
      },
    });
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className={cn("flex flex-col gap-6", className)} {...props}>
          <Card>
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </Field>
                  <Field>
                    {/*<div className="flex items-center">
                      <FieldLabel htmlFor="password">Password</FieldLabel>
                      <a
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>*/}
                    <Input
                      id="password"
                      type="password"
                      placeholder="******"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </Field>
                  <Field>
                    <Button type="submit" disabled={loginUser.isPending}>
                      {loginUser.isPending ? (
                        <span className="flex items-center justify-center gap-2">
                          <Spinner className="h-4 w-4" />
                          <span>Processing...</span>
                        </span>
                      ) : (
                        "Login"
                      )}
                    </Button>
                    <FieldDescription className="text-center">
                      Don&apos;t have an account?{" "}
                      <Link to="/signup">Sign up</Link>
                    </FieldDescription>
                  </Field>
                </FieldGroup>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
