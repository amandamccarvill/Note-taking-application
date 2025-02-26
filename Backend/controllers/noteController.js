const Note = require('../models/note');
const User = require('../models/user');

// Create a new note
const createNote = async (req, res) => {
    try {
        const { title, description } = req.body;
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const newNote = await Note.create({
            title,
            description, 
            user: user._id,
        })
        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        console.log('24',error)
        if (error.name === 'ValidationError') {
            // Capture validation error messages from Mongoose
            const errorMessages = {};
            Object.keys(error.errors).forEach((key) => {
                errorMessages[key] = error.errors[key].message; // Collect error messages per field
            });
            res.status(400).json({ errors: errorMessages });
        } else {
            res.status(500).json({ error: 'Server error' });
        }
    }
};

// Get all notes with user details
const getNotes = async (req, res) => {
    try {
        const notes = await Note.find().populate('user', 'name email'); // Fetch all notes for user
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get a specific note by ID
const getNotebyId = async (req, res) => {
    try {
        const { id } = req.params;
        const note = await Note.findById(id); // Fetch a specific note by ID
        if (!note) {
            return res.status(404).json({ error: 'Note not found' });
        }
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Update a note by ID
const updateNote = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        const note = await Note.findByIdAndUpdate(
            id,
            { title, description },
            { new: true, runValidators: true } // Ensure validation during the update
        );

        if (!note) {
            return res.status(404).json({ error: 'Note not found' });
        }

        res.status(200).json(note);
    } catch (error) {
        if (error.name === 'ValidationError') {
            // Capture validation error messages from Mongoose
            const errorMessages = {};
            Object.keys(error.errors).forEach((key) => {
                errorMessages[key] = error.errors[key].message; // Collect error messages per field
            });
            res.status(400).json({ errors: errorMessages });
        } else {
            res.status(500).json({ error: 'Server error' });
        }
    }
};

// Delete a note by ID
const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        const note = await Note.findByIdAndDelete(id);
        if (!note) {
            return res.status(404).json({ error: 'Note not found' });
        }
        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    createNote,
    getNotes,
    getNotebyId,
    updateNote,
    deleteNote,
};
