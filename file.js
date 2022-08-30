const fs = require('fs');
// fs means filesystem

// reading files
fs.readFile('./docs/blog.txt', (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data.toString());
});

// writing file
fs.writeFile('./docs/blog.txt', 'hello, world', (err) => {
    if(err) {
        console.log(err);
    }
    console.log("file was written");
});

fs.writeFile('./docs/blog1.txt', 'hello, again', (err) => {
    if(err) {
        console.log(err);
    }
    console.log("file was written");
});

//directories
if(!fs.existsSync('./assest')) {
    fs.mkdir('./assest', (err) => {
        if(err) {
            console.log(err);
        }
        console.log("Folder created");
    });
} else {
    fs.rmdir("./assest", (err) => {
        if(err) {
            console.log(err);
        }
        console.log("Folder deleted");
    });
}

// deleting files
if(fs.existsSync('./docs/delete_me.txt')) {
    fs.unlink('./docs/delete_me.txt', (err) => {
        if(err) {
            console.log(err);
        }
        console.log("file deleted");
    });
}
