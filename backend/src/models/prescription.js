const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assumes a User model exists
        required: true
    },
    doctor: {
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        }
    },
    prescription: [
        {
            name: {
                type: String,
                required: true
            },
            dosage: {
                type: String,
                required: true
            },
            frequency: {
                type: String,
                required: true
            },
            timing: {
                type: String,
                required: true
            }
        }
    ],
    medicalCondition: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Adds createdAt and updatedAt timestamps
});

module.exports = mongoose.model('Prescription', prescriptionSchema);
