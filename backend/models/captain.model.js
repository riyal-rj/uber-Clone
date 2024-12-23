import mongoose from "mongoose";
import validator from 'validator';


const captainSchema = new mongoose.Schema({
    captainname:{
        firstname: {
            type: String,
            required: true,
            minlength: [ 3, 'First name must be at least 3 characters long' ],
        },
        lastname: {
            type: String,
            minlength: [ 3, 'Last name must be at least 3 characters long' ],
        }
    },
    email:{
        type:String,
        unique:true,
        required:[true,'Please enter your email id'],
        lowercase:true,
        validate:[validator.isEmail,'Please enter a valid email id']
    },
    password:{
        type:String,
        required:true,
        minlength:[8,'Please must have atleast 8 characters'],
        select:false
    },
    socketId:{
        type:String
    },
    averageRating:{
        type:Number,
        default:1,
        validate:[(rating)=>rating>=1 && rating<=5,'Rating must be between 1 and 5']
    },
    isAvailable:{
        type:Boolean,
        default:false
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        minlength:[10, 'Phone no must of 10 digits']
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3,'Color must be atleast 3 characters long']
        },
        number:{
            type:String,
            required:true,
            minlength:[3,'Plate must be atleast 3 characters long']
        },
        capacity:{
            type:Number,
            required:true,
            min:[1,'Capacity must be atleast 1']
        },
        type:{
            type:String,
            required:true,
            enum:['bike','car','auto','toto']
        }
    },
    location:{
        latitude:{
            type:Number
        },
        longitude:{
            type:Number
        }
    }
})

const indianPhoneRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;

captainSchema.pre('save', function (next) {
  if (indianPhoneRegex.test(this.phone)) {
    if (!this.phone.startsWith('+91')) {
      this.phone = `+91${this.phone.replace(/^(91|0)/, '')}`;
    }
  }
  next();
});

export const Captain = mongoose.model('Captain', captainSchema);