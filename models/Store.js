const mongoose= require('mongoose');

const storeSchema=new mongoose.Schema({
    storeId:{
        type:String,
        required:[true,"please add store id"],
        unique: true,//makes sure the id is unique
        trim: true, //removes the whitespace
        maxlength:[10, 'please Id must be less than ten characters']
    },
    address:{
        type:String,
        required:[true, 'please add an adress']
    },
    location:{
        type:{
            type: String,
        enum:['point'],
        },
        coordinates:{
            type:[Number],
            index:"2dsphere"
        },
        formattedAddress:String
        
        

    },
    createdAt:{
        type:Date,
        default:Date.now
    }
    
})

module.exports =mongoose.model("Store",storeSchema);