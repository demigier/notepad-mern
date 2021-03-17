import {Schema, model} from 'mongoose';

const noteSchema = new Schema({
    title:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    description:{
        type: String,
        trim: true
    },
    created_At: {
        type: Date, 
        default: Date.now
    }
}, {
    timestamps: false,
    versionKey: false 
});


export default model('Note', noteSchema);