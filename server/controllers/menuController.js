import connection from "../config/db.js";

// ➤ Add a new menu item
export const createMenu = (req, res) => {
    const { name, description, price, category } = req.body;
    const image_url = req.file ? `/uploads/${req.file.filename}` : null; // Save image path
    console.log(req.body);
    if (!name || !price || !image_url) {
        return res.status(400).json({ message: "Name, price, and image are required!" });
    }
    try {
        const addQuery = "INSERT INTO menu (name, description, price, category, image_url) VALUES (?, ?, ?, ?, ?)";
        connection.query(addQuery, [name,description,price,category,image_url], async (err, result) => {
          if (err) return res.status(500).json({ message: "Database error", error: err });
            console.log("added successfully");
           return res.status(201).json({ message: "Menu Item added successfully!",id: result.insertId});
          });
      } catch (error) {
      return res.status(500).json({ message: "Server error", error });
      }
};

// ➤ Get all menu items
export const getAllMenu = (req, res) => {
    try {
        const getquery= "SELECT * FROM menu";
        connection.query(getquery, async(err,result) =>{
            if (err) return res.status(500).json({ message: "Database error", error: err });
            console.log("fetched");
            return res.status(201).json(result);
        });
      } catch (error) {
        return res.status(500).json({ message: "Server error", error });
      }
};

// ➤ Update a menu item
export const updateMenu = (req, res) => {
    const { id } = req.params;
    const { name, description, price, category } = req.body;
    const image_url = req.file ? `/uploads/${req.file.filename}` : req.body.image_url; // Use new image if uploaded

    try {
        const updateQuery = "Update menu set name = ? , description = ? , price = ? , category = ? , image_url = ? WHERE id= ? ";
        connection.query(updateQuery, [name,description,price,category,image_url,id], async (err, result) => {
          if (err) return res.status(500).json({ message: "Database error", error: err });
            console.log("updated successfully");
           return res.status(201).json({ message: "Menu Item updated successfully!",id: result.insertId});
          });
      } catch (error) {
        return res.status(500).json({ message: "Server error", error });
      }
};

export const deleteMenu = (req,res) => {
     const {id} =req.params;
     try{
        const deleteQuery = "delete from menu WHERE id = ?";
        connection.query(deleteQuery,[id], async(err,res) =>{
           if(err) return res.status(500).json({message : "Database error", error : err});
        });
        return res.status(201).json({message : "Deleted successfully"});
     }
     catch(error)
     {
        return res.status(500).json({message : "Server error",error});
     }
};
