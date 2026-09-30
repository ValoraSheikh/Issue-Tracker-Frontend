import { useMutation, useQuery } from "@tanstack/react-query";
import { userApi, type UserProps } from "./api";

export const userHooks = {
  useUser: () => {
    return useQuery({
      queryKey: ["user"],
      queryFn: userApi.getUser,
    });
  },

  useCreateUser: (payload: UserProps) => {
    return useMutation({
      mutationFn: () => userApi.createUser(payload),
    });
  },

  useUpdateUser: (payload: UserProps) => {
    return useMutation({
      mutationFn: () => userApi.updateUser(payload),
    });
  },

  useDeleteUser: () => {
    return useMutation({
      mutationFn: () => userApi.deleteUser(),
    });
  },
};
