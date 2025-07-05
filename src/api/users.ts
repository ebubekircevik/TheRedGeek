import { User } from "@/types/user";
import { apiGet, apiPost, apiPut, apiDelete } from "@/api/_core/http";

export const getUsers = () => apiGet<User[]>("/users");
export const createUser = (user: Omit<User, "_id">) => apiPost("/users", user);
export const updateUser = (id: string, user: Partial<User>) =>
  apiPut(`/users/${id}`, user);
export const deleteUser = (id: string) => apiDelete(`/users/${id}`);
