import { create } from "zustand";
import { persist } from "zustand/middleware";
import { db } from "../firebase/firebase_config";

import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

type Post = {
  title: string;
  uuid: string;
  desc: string;
  content: string;
  author: string;
};

type PostStore = {
  posts: Post[];
  isLoading: boolean;
  addPost: (post: any) => Promise<void>;
  deletePost: (uuid: string) => Promise<void>;
  fetchPost: () => Promise<void>;
};

const poststore = (set: any): PostStore => ({
  posts: [],
  isLoading: false,
  fetchPost: async () => {
    set({ isLoading: true });
    const posts: Post[] = [];
    try {
      console.log("start");

      const querySnapshot = await getDocs(collection(db, "posts"));
      querySnapshot.forEach((doc) => {
        console.log(doc.data());

        posts.push({ uuid: doc.id, ...doc.data() } as Post);
      });
      console.log(posts);

      set(() => ({
        posts: posts,
      }));
      set({ isLoading: false });
    } catch (error) {
      console.error("Error fetching post:", error);
      set({ isLoading: false });
    }
  },
  addPost: async (post) => {
    set({ isLoading: true });
    try {
      const docRef = await addDoc(collection(db, "posts"), post);
      set((state: PostStore) => ({
        posts: [...state.posts, { ...post, uuid: docRef.id }],
      }));
    } catch (error) {
      console.error("Error adding post:", error);
      set({ isLoading: false });
    }
    set({ isLoading: false });
  },
  deletePost: async (uuid) => {
    try {
      await deleteDoc(doc(db, "posts", uuid));
      set((state: PostStore) => ({
        posts: state.posts.filter((post) => post.uuid !== uuid),
      }));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  },
});

const usePostStore = create(persist(poststore, { name: "post" }));
export default usePostStore;
