const mongoose = require('mongoose');
//const validator = require('validator');

const jwt = require('jsonwebtoken');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/LoginFormPractice');
}

const logInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        /*validate: {
            validator: value => validator.isEmail(value) && value.endsWith('@gmail.com'),
            message: props => `${props.value} is not a valid Gmail address`
        }*/
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        ///validate: {
           // validator: value => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(value),
          //  message: props => `Password must contain at least one numeric digit, one uppercase and one lowercase letter, one special character and must be at least 8 characters long`
       // }
    }
});
const feedbackSchema=new mongoose.Schema({
    from:{
        type: String,
        required:true
    },
    feedback:{
        type: String,
        maxLength:50,

    },
    starRating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    created_at:{
        type:Date,
        required:true

    }
});
feedbackSchema.virtual('starRatingStars').get(function () {
    // Convert numerical rating to stars
    const stars = '★'.repeat(Math.round(this.starRating)) + '☆'.repeat(5 - Math.round(this.starRating));
    return stars;
});

const ratings=mongoose.model("ratings",feedbackSchema);


const LogInCollection = mongoose.model('logincollection', logInSchema);
module.exports = { LogInCollection, ratings };
   
    
    

