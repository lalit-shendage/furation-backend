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
        // fetching id bu req
    const { id } = req.params;
    
    const item = await Item.findById(id);
    // if item of give id is not present
    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.json({ item });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch item' });
    }
}


module.exports ={fetchAllItems, fetchItemById}