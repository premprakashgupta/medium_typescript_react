import { create } from "zustand";
import { persist } from "zustand/middleware";
import { auth } from "../firebase/firebase_config";
import { signInWithEmailAndPassword } from "firebase/auth";

type UserStore = {
  user: { email?: string | null } | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signout: () => Promise<void>;
};

const userstore = (set: (state: Partial<UserStore>) => void): UserStore => ({
  user: null,
  isLoading: false,
  signout: async () => {
    try {
      await auth.signOut();
      set({ user: null });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  },
  login: async (email, password) => {
    set({ isLoading: true });

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      set({ user: response.user, isLoading: false });
    } catch (error) {
      console.error("Login failed:", error);
      set({ isLoading: false });
    }

    set({ isLoading: false });
  },
});

const useUserStore = create(persist(userstore, { name: "user" }));

export default useUserStore;
