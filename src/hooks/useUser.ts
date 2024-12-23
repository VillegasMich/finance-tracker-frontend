import { useQuery, useMutation } from "@tanstack/react-query";
import API_BASE_URL from "../api/apiClient";
import { FetchUser, FetchUsers } from "../dto/User/FetchUser";
import { UserModel, UserModels } from "../models/User/UserModel";
import { RegisterUser } from "../dto/User/RegisterUser";
import { z } from "zod";

export const useUser = () => {

  const fetchUsers = async () => {
    const response = await fetch(`${API_BASE_URL}/users`);
    if (!response.ok) {
      throw new Error("Failed to fetch transactions");
    }
    const responseBody = await response.json();
    const users = FetchUsers.parse(responseBody);
    const userModels = UserModels.parse(users)
    return userModels;
  };

  const registerUser = async (user: z.infer<typeof RegisterUser>) => {
    const userModel = RegisterUser.parse(user);
    const response = await fetch(`${API_BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userModel),
    });
    if (!response.ok) {
      // TODO: Create Error model and use it
      response.json().then((data) => console.log(data.message))
      throw new Error("Failed to register user");
    }
    const responseBody = await response.json();
    const userR = FetchUser.parse(responseBody);
    const userModelR = UserModel.parse(userR)
    return userModelR;
  }

  return {
    useFetchUsers: () => useQuery({ queryKey: ["users"], queryFn: fetchUsers }),
    useRegisterUser: () => useMutation({ mutationFn: registerUser }),
  }
};
