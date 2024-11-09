import mongoose from 'mongoose';
const prescriptionSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assumes a User model exists
        required: true
    },
    doctor: {
        name: {
            type: String,
        },
        phone: {
            type: String,
        }
    },
    prescription: [
        {
            name: {
                type: String,
            },
            dosage: {
                type: String,
            },
            frequency: {
                type: String,
            },
            timing: {
                type: String,
            }
        }
    ],
    medicalCondition: {
        type: String,
    }
}, {
    timestamps: true // Adds createdAt and updatedAt timestamps
});

export const Prescription = mongoose.model('Prescription', prescriptionSchema);
