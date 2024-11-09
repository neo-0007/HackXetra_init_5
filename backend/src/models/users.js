import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Define the user schema
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dob: { type: Date },
    gender: { type: String, required: true },
    phone: { type: String },
    email: { type: String, unique: true, required: true },
    address1: { type: String },
    address2: { type: String },
    city: { type: String },
    pin: { type: String },
    district: { type: String },
    state: { type: String },
    country: { type: String },
    password: { type: String, required: true },
    role: { type: String, default: 'user' },
});

// Hash the password before saving the user model
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next(); // Only hash if password is modified
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// Create the user model
const User = mongoose.model('User', userSchema);
export default User;
