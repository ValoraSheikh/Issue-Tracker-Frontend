import { useMutation, useQuery } from "@tanstack/react-query";
import {
  userApi,
  type UserProps,
  projectApi,
  type ProjectProps,
  issueApi,
  type IssueProps,
  commentApi,
  type CommentsProps,
} from "./api";
import { toast } from "../../components/ui/toast";

export const userHook = {
  useUser: () => {
    return useQuery({
      queryKey: ["user"],
      queryFn: userApi.getUser,
    });
  },

  useLoginUser: () => {
    return useMutation({
      mutationFn: (payload: UserProps) => userApi.loginUser(payload),
      onSuccess: () => {
        toast.add({
          type: "success",
          description: "User Login Succesfully",
        });
      },
      onError: () => {
        toast.add({
          type: "error",
          description: "User Login failed",
        });
      },
    });
  },

  useCreateUser: () => {
    return useMutation({
      mutationFn: (payload: UserProps) => userApi.createUser(payload),
      onSuccess: () => {
        toast.add({
          type: "success",
          description: "User Created Succesfully",
        });
      },
      onError: (err) => {
        toast.add({
          type: "error",
          description: `${err.message}`,
        });
      },
    });
  },

  useUpdateUser: (payload: UserProps) => {
    return useMutation({
      mutationFn: () => userApi.updateUser(payload),
    });
  },

  useDeleteUser: () => {
    return useMutation({
      mutationFn: userApi.deleteUser,
    });
  },
};

export const projectHook = {
  useGetAllProjects: () => {
    return useQuery({
      queryKey: ["projects"],
      queryFn: projectApi.getAllProjects,
    });
  },

  useCreateProject: () => {
    return useMutation({
      mutationFn: (payload: ProjectProps) => projectApi.createProject(payload),
    });
  },

  useUpdateProject: (projectId: string, payload: ProjectProps) => {
    return useMutation({
      mutationFn: () => projectApi.updateProject(projectId, payload),
    });
  },

  useDeleteProject: (projectId: string) => {
    return useMutation({
      mutationFn: () => projectApi.deleteProject(projectId),
    });
  },
};

export const issueHook = {
  useGetIssues: (projectId: string) => {
    return useQuery({
      queryKey: ["issues"],
      queryFn: () => issueApi.getProjectIssues(projectId),
    });
  },

  useIssue: (issueId: string) => {
    return useQuery({
      queryKey: ["issue"],
      queryFn: () => issueApi.getIssue(issueId),
    });
  },

  useCreateIssue: (projectId: string, payload: IssueProps) => {
    return useMutation({
      mutationFn: () => issueApi.createIssue(projectId, payload),
    });
  },

  useUpdateIssue: (issueId: string, payload: IssueProps) => {
    return useMutation({
      mutationFn: () => issueApi.updateIssue(issueId, payload),
    });
  },

  useDeleteIssue: (issueId: string) => {
    return useMutation({
      mutationFn: () => issueApi.deleteIssue(issueId),
    });
  },
};

export const commentHook = {
  useGetComments: (issueId: string) => {
    return useQuery({
      queryKey: ["comments"],
      queryFn: () => commentApi.getAllComments(issueId),
    });
  },

  useCreateComment: (payload: CommentsProps) => {
    return useMutation({
      mutationFn: () => commentApi.createComment(payload),
    });
  },

  useUpdateComment: (commentId: string, payload: CommentsProps) => {
    return useMutation({
      mutationFn: () => commentApi.updateComment(commentId, payload),
    });
  },

  useDeleteComment: (commentId: string) => {
    return useMutation({
      mutationFn: () => commentApi.deleteComment(commentId),
    });
  },
};
