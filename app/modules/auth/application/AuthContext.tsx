import React from "react";
import { createContext, useContextSelector } from "use-context-selector";
import type { User } from "../infrastructure";

export type AuthContext = {
  getUser: (email: string) => Promise<User | null>;
  createUser: (params: {
    email: string;
    password: string;
  }) => Promise<User | null>;
  deleteUser: () => Promise<null>;
  updateUser: () => Promise<User | null>;
  login: (params: { email: string; password: string }) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  user: User | null;
};

const context = createContext<Partial<AuthContext>>({});

type ProviderProps = {
  children: React.ReactNode;
  value: AuthContext;
};

export const AuthProvider = ({ children, value }: ProviderProps) => {
  return <context.Provider value={value}>{children}</context.Provider>;
};

type Selector<Selected> = (state: AuthContext) => Selected;

export function useAuthContextSelector<Selected>(
  selector: Selector<Selected> = (state) => state as unknown as Selected
) {
  return useContextSelector<AuthContext, Selected>(context as any, selector);
}
