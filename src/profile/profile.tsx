import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import type { UserProps } from "../features/api";
import { userHook } from "../features/hooks";

export default function Profile() {
  const user = userHook.useUser();

  if (user.isLoading) {
    return <div>Loading...</div>;
  }

  if (user.error) {
    return <div>Error: {user.error.message}</div>;
  }

  const { data } = user;

  if (!data) {
    return <div>No data</div>;
  }

  console.log(data)

  return (
    <div>
      {data.map((item: UserProps) => (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm">
            <div className={"flex flex-col gap-6"}>
              <Card>
                <CardHeader>
                  <CardTitle>User Profile</CardTitle>
                  <CardDescription>
                    Here you can Look at Your details
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h1 className="text-xl font-bold">Name</h1>
                  <div>{item.name}</div>

                  <h1 className="text-xl font-bold">Email</h1>
                  <div>{item.email}</div>

                  <h1 className="text-xl font-bold">Created At</h1>
                  <div>{item.createdAt}</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
