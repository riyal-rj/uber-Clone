import mongoose from "mongoose";

const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true,
    },
    expiresAt: {
        type: Date,
        default: Date.now,
        expires:24*60*60*1000,
    },
});

export const BlacklistToken = mongoose.model('BlacklistToken', blacklistTokenSchema);