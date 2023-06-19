const Item =require('../models/Item');

const fetchAllItems =async(req,res)=>{
    try {
         // fetching all items from database 
    const items=await Item.find();

    res.json({items})
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch items' });
    }
}
const fetchItemById =async(req,res)=>{
    try {
         // fetching all items from database 
    const items=await Item.find();

    res.json({items})
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch items' });
    }
}


module.exports ={fetchAllItems, fetchItemById}