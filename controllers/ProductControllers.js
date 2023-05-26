import Products from "../modals/Products.js";

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


