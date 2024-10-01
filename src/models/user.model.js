import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true , 'Username is required'],
        trim: true,
        
    },
    email: {
        type: String,
        unique: true,
        required: [true , 'Email is required'],
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        trim : true
    }
});

export default mongoose.models.User || mongoose.model('User', userSchema);