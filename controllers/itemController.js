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

const createItem=async(req, res)=>{
    try {
        const {title, author, language, pages}= req.body;

        const existingItem=await Item.findOne({title, author})
        if (existingItem){
            return res.status(400).json({ message: 'book is already there' });
        }

        const newItem= new Item({
            title,
            author,
            language,
            pages,
        })

        await newItem.save();
        res.status(201).json({ message: 'Item added in database successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add item' });
    }
}


const updateItem=async(req,res)=>{
    try {
        const itemId=req.params;
        const item= await Item.findById(itemId);

        if (!item){
            return res.status(404).json({message:'Item not found'})
        }
        if (title){
            item.title=titile
        }
        if (author){
            item.author=author
        }
        if (language){
            item.language=language
        }
        if (pages){
            item.pages=pages
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to update item' });

    }
}

const deleteItem= async(req,res)=>{
    try {
        const itemId = req.params.id;
        const deletedItem = await Item.findByIdAndDelete(itemId);
    
        if (!deletedItem) {
          return res.status(404).json({ message: 'Item not found' });
        }
    
        res.json({ message: 'Item deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Failed to delete item' });
      }
    }

module.exports ={fetchAllItems, fetchItemById, updateItem, createItem, deleteItem}