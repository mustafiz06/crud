const {client } = require("./config");


const insertData=async ()=> {
    try {
        const database = client.db("Country");
        const ashian = database.collection("ashian");

        // create a document to insert
        const doc = {
            name: "Bangladesh",
            capital: "Dhaka",
        };
        const result = await ashian.insertOne(doc);

        console.log(result)

    }
    catch (error) {
        console.log(error);
    }
    finally {
        await client.close();
    }
} 

insertData()
