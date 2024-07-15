const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    Rfid: {
        type:String,
        required: true,
        min: 6,
        max:1024
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max:1024
    }, 
    name: {
        type: String,
        required: true,
        min: 6,
        max:1024
        
    },
    identifiant: {
        type: String,
        required: true,
        min: 6,
        max:1024
    },
    idantity: {
        type: String,
        required: true,
        min: 6,
        max:1024
    },
    Dateidantity: {
        type: String,
        required: true,
        min: 6,
        max:1024
    },
    classe: {
        type: String,
        required: true,
        min: 6,
        max:1024
    },
    code: {
        type: String,
        
    },
    payment: {
        type: String,
        
    }

    
});
module.exports = mongoose.model('User',userSchema);