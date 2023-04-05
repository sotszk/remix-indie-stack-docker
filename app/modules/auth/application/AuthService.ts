import type { AuthContext } from "./AuthContext";
import { getUserByEmail, createUser, verifyLogin } from "../infrastructure";

export const authService: AuthContext = {
  isAuthenticated: false,
  user: null,

  getUser(email) {
    return getUserByEmail(email);
  },
  createUser({ email, password }) {
    return createUser(email, password);
  },
  deleteUser() {
    return Promise.resolve(null);
  },
  updateUser() {
    return Promise.resolve(null);
  },
  async login({ email, password }) {
    const user = await verifyLogin(email, password);
    if (!user) throw new Error("ログイン失敗");
    this.user = user;
  },
  logout() {
    return;
  },
};
