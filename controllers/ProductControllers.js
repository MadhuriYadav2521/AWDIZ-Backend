import { response } from "express";
import Products from "../modals/Products.js";
import Users from "../modals/Users.js";

export const addProduct = async (req, res) => {
    try {
        // console.log(req.body)
        const { Name, Price, Image } = req.body;
        if (!Name) return res.send("Name is required!");
        if (!Price) return res.send("Price is requierd!");
        const product = new Products({
            name: Name,
            price: Price,
            image: Image
        })
        console.log(product, "check here");
        await product.save();
        return res.send(product);
    } catch (error) {
        console.log(error)
    }
}

export const getAllProducts = async (req, res) => {
    try{
        const response = await Products.find({}).exec()
        if(response){
            return res.send(response);
        }else{
            return res.send("Products not found!")
        }

    }catch(error){
        return res.send(error);
    }
}


