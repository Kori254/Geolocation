const Store= require('../models/Store')

// @desc Get all stores
// @route Get /api/v1/stores
// @access public

exports.getStores= async (req, res, next)=>{
    try{
        const stores= await Store.find();
        return res.status(200).json({
            success:true,
            count:stores.length,
            data:stores
        });
    }catch(err){
        console.log(err);
        res.status(500).json({error:'server error'}); 
    }
}

// @desc Create a stores
// @route Post /api/v1/stores
// @access public

exports.addStores= async (req, res, next)=>{
    try{
        const store = await Store.create(req.body);

        return res.status(200).json({
            success:true,
            data: store
        });
        
    }catch(err){
              
        console.log(err);
        if(err.code===11000){
            return res.status(400).json({err: 'the store already exists'});
        }  
        res.status(500).json({error:'server error'});
    }
}