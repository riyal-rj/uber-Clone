import mongoose from 'mongoose';
import validator from 'validator';

const userSchema=new mongoose.Schema({
    username:{
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
    phone: {
        type: String,
        required: true,
        unique: true,
        minlength:[10, 'Phone no must of 10 digits']
    },
    socketId:{
        type:String
    },
    lastlogin:{
        type:Date,
        default:Date.now
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    resetPasswordToken:String,
    resetPasswordExpiresAt:Date,
    verificationToken:String,
    verificationTokenExpiresAt:Date
},{timestamps:true});

const indianPhoneRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;

userSchema.pre('save', function (next) {
  if (indianPhoneRegex.test(this.phone)) {
    if (!this.phone.startsWith('+91')) {
      this.phone = `+91${this.phone.replace(/^(91|0)/, '')}`;
    }
  }
  next();
});

export const User=mongoose.model('User',userSchema);

