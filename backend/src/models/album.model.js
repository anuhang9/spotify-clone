import mongoose, { model, Schema } from "mongoose";

const albumSchema = new Schema({
    title: {type: String, required: true},
    artist: {type: String, required: true},
    imageURl: {type: String, required: true},
    releaseYear: {type: Number, required: true},
    songs: [{type: mongoose.Schema.Types.ObjectId, ref: "Song"}],

}, {timestamps: true});

export const Album = model("Album", albumSchema);