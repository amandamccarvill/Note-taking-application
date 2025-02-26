const mongoose = require('mongoose');

// Note Schema definition
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'], // Validation: Title must be provided
        minLength: [5, 'Title must be at least 5 characters'], // Validation: Title must be at least 5 characters
        maxLength: [100, 'Title must be less than 100 characters'], // Validation: Title must be at most 100 characters
        trim: true // Removes leading and trailing spaces
    },
    description: {
        type: String,
        required: [true, 'Description is required'], // Validation: Description must be provided
        minLength: [5, 'Description must be at least 5 characters'], // Validation: Description must be at least 5 characters
        Trim: true // Removes leading and trailing spaces
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true }); // Automatically add createdAt and updatedAt timestamps

// Create a Mongoose model for the note schema
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;