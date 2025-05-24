import { create } from "zustand";
import toast from "react-hot-toast"; 
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "./useAuthStore";

export const useChatStore = create ((set, get) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,


getUsers: async () => {
    set({isUsersLoading: true});
    try {
        const res = await axiosInstance.get("/messages/users");
        set({ users: res.data })
    } catch (error) {
        toast.error(error.response.data.messages);
    }finally{
        set({isUsersLoading: false});
    }
},

getMessages: async (userId) => {
        set({isMessagesLoading: true});
        try {
            const res = await axiosInstance.get(`/messages/${userId}`);
            set({messages: res.data});
        } catch (error) {
            toast.error(error.response.data.message)
        }finally{
            set({isMessagesLoading: false});
        }
},

sendMessage: async (messageData) => {
    const {selectedUser, messages} = get();
     try {
        const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, messageData);
        set({messages: [...messages,res.data]});
     } catch (error) {
        toast.error(error.response.data.message);
     }
},

subscribeToMessage: () => {
  const socket = useAuthStore.getState().socket;
  const me = useAuthStore.getState().authUser._id;

  socket.emit("joinChat", { from: me, to: get().selectedUser._id });

  socket.on("newMessage", (newMessage) => {
    if (newMessage.senderId === me) return;

    set(state => ({
      messages: [...state.messages, newMessage]
    }));
  });
},


unsubscribeFromMessage: ()=>{
    const socket = useAuthStore.getState().socket;
    socket.off("newMessage");
},
setSelectedUser: (selectedUser) => set ({ selectedUser }),
}));
