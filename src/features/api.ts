import { axiosClient } from "../lib/axois/axios-client";

export interface UserProps {
  id?: string;
  name?: string;
  email: string;
  password: string;
  createdAt?: string;
}

export interface ProjectProps {
  id?: string;
  name: string;
  description: string;
  ownerId?: string;
  createdAt?: string;
}

export interface GetAllPropertiesProps {
  users: UserProps;
  projects: ProjectProps;
}

export interface IssueProps {
  id?: string;
  name: string;
  description: string;
  projectId: string;
  priority: string;
  dueDate: string;
  assigneeId: string;
  labels: string[];
  createdAt: string;
}

export interface CommentsProps {
  id?: string;
  comment: string;
  userId: string;
  createdAt?: string;
}

export const userApi = {
  loginUser: async (payload: UserProps) => {
    const { data } = await axiosClient.post("/auth/login", payload);
    return data;
  },

  getUser: async (): Promise<UserProps[]> => {
    const { data } = await axiosClient.get("/user");
    return data.data;
  },

  createUser: async (payload: UserProps) => {
    const { data } = await axiosClient.post("/user", payload);
    return data.date;
  },

  updateUser: async (payload: UserProps) => {
    const { data } = await axiosClient.post("/user", payload);
    return data.data;
  },

  deleteUser: async () => {
    const { data } = await axiosClient.delete("/user");
    return data.data;
  },
};

export const projectApi = {
  getAllProjects: async (): Promise<GetAllPropertiesProps[]> => {
    const { data } = await axiosClient.get("/project/all");
    return data.data;
  },

  createProject: async (payload: ProjectProps) => {
    const { data } = await axiosClient.post("/project", payload);
    return data.date;
  },

  updateProject: async (projectId: string, payload: ProjectProps) => {
    const { data } = await axiosClient.patch(`/project/${projectId}`, payload);
    return data.data;
  },

  deleteProject: async (projectId: string) => {
    const { data } = await axiosClient.delete(`/project/${projectId}`);
    return data.data;
  },
};

export const issueApi = {
  getProjectIssues: async (projectId: string): Promise<IssueProps[]> => {
    const { data } = await axiosClient.get(`/project/issue/${projectId}`);
    return data.data;
  },

  getIssue: async (issueId: string): Promise<IssueProps> => {
    const { data } = await axiosClient.get(`/project/${issueId}`);
    return data.data;
  },

  createIssue: async (projectId: string, payload: IssueProps) => {
    const { data } = await axiosClient.post(`/issue/${projectId}`, payload);
    return data.date;
  },

  updateIssue: async (issueId: string, payload: ProjectProps) => {
    const { data } = await axiosClient.patch(`/project/${issueId}`, payload);
    return data.data;
  },

  deleteIssue: async (issueId: string) => {
    const { data } = await axiosClient.delete(`/project/${issueId}`);
    return data.data;
  },
};

export const commentApi = {
  getAllComments: async (issueId: string): Promise<CommentsProps> => {
    const { data } = await axiosClient.get(`/issue/comment/${issueId}`);
    return data.data;
  },

  createComment: async (payload: CommentsProps) => {
    const { data } = await axiosClient.post(`/comment`, payload);
    return data.date;
  },

  updateComment: async (commentId: string, payload: CommentsProps) => {
    const { data } = await axiosClient.post(`/comment/${commentId}`, payload);
    return data.data;
  },

  deleteComment: async (commentId: string) => {
    const { data } = await axiosClient.delete(`/comment/${commentId}`);
    return data.data;
  },
};
