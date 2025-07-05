import { User } from "@/types/user";
import { httpClient } from "@/api/_core/http";

export const getUsers = () => httpClient.get<User[]>("/users");
export const createUser = (user: Omit<User, "_id">) => httpClient.post("/users", user);
export const updateUser = (id: string, user: Partial<User>) =>
  httpClient.put(`/users/${id}`, user);
export const deleteUser = (id: string) => httpClient.delete(`/users/${id}`);
