const fs = require('fs/promises');

const data = 'a file containing a collection of data';


try{
    //await fs.writeFile("./data.json", data); //use it with async function
    fs.writeFile("./data.txt", data);
    console.log("file created successfully");
} catch(error){
    console.error(error);
}

