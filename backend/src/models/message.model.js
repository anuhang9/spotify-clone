import { model, Schema } from "mongoose";

const messageModel = Schema({
    senderId: {type: String, required: true},
    receiverId: {type: String, required: true},
    content: {type: String, required: true},
}, {timestamps: true});

export const Message = model("Message", messageModel);