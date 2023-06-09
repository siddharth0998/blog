import axios from "axios";
import React from "react";
import { create } from "zustand";

const useStore = create((set) => ({
  blogs: [],
  selectedBlog: [],
  saveData: false,
  setSaveData: async (flag: boolean) => {
    set({ saveData: flag });
  },
  getBlog: async () => {
    const data = await axios.get("http://localhost:4001");
    set({ blogs: data.data.data });
  },
  getBlogById: async (id: string) => {
    const data = await axios.get(`http://localhost:4001/${id}`);
    set({ selectedBlog: data.data.data });
  },
  deleteBlog: async (id: any) => {
    const data = await axios.delete(`http://localhost:4001/delete/${id}`);
    if (data.status === 200) set({ blogs: data.data.data });
  },
  createBlog: async (title: string, description: string) => {
    const data = await axios.post("http://localhost:4001/create", {
      title,
      description,
    });
    if (data.status === 200) {
      set({ blogs: data.data.data });
    }
  },
  editBlog: async (id: string, title: string, description: string) => {
    const data = await axios.put(`http://localhost:4001/update/${id}`, {
      title,
      description,
    });
    if (data.status === 200) set({ blogs: data.data.data });
  },
}));

export const useBlogStore = useStore;
