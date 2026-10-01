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
import { userHook } from "../features/hooks";
import { Spinner } from "../../components/ui/spinner";

import { useState } from "react";

export default function SignUp({
  className,
  ...props
}: React.ComponentProps<"div">) {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });

  const navigate = useNavigate()
  const createUser = userHook.useCreateUser();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload = {
      name: user,
      email: email,
      password: password,
    };

    await createUser.mutateAsync(payload, {
      onSuccess: () => {
        navigate("/")
      },
    });
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className={cn("flex flex-col gap-6", className)} {...props}>
          <Card>
            <CardHeader>
              <CardTitle>Sign Up to create account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="name">Name</FieldLabel>
                    <Input
                      id="name"
                      type="text"
                      value={user}
                      placeholder="John Doe"
                      required
                      onChange={(e) => setUser(e.target.value)}
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      required
                      placeholder="******"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {/*<div className="flex items-center">
                      <a
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>*/}
                  </Field>
                  <Field>
                    <Button type="submit" disabled={createUser.isPending}>
                      {createUser.isPending ? (
                        <span className="flex items-center justify-center gap-2">
                          <Spinner className="h-4 w-4" />
                          <span>Processing...</span>
                        </span>
                      ) : (
                        "Sign Up"
                      )}
                    </Button>
                    <FieldDescription className="text-center">
                      Don&apos;t have an account?{" "}
                      <Link to="/login">Log In</Link>
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
