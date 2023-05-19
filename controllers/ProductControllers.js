

export const addProduct = (req, res) => {
    try {
        console.log(req.body)
        // const { Name, Price, Image } = req.body;
        // console.log(Name, "req.body")
        res.send(`Hi  from add`)
    } catch (error) {
        console.log(error)
    }
}


