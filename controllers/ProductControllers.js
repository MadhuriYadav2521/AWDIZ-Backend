

export const addProduct = (req, res) => {
    try {
        // console.log(req.body)
        const { Name, Price, Image } = req.body;
        if (!Name) return res.send("Name is required!");
        if (!Price) return res.send("Price is requierd!");
        // Store product data into database
        // const product =  Schema , mongodb connection, Mongodb fucntion.. 
        // console.log(Name, Price, Image, "req.body")
        return res.send({ message: "Product added!" });
    } catch (error) {
        console.log(error)
    }
}


