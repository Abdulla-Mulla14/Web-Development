const http = require('http');
const fs = require('fs');
const path = require('path')

const port = 3000;

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, req.url === "/" ? "index.html" : req.url); // (req.url === '/' ? "index.html" : "req.url") this part is just like the if else (req.url === '/')-> is the condition rest is if this happens do this and if this happens do this as like if else

    console.log(filePath);
    
    
    const extName = String(path.extname(filePath)).toLowerCase()

    const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.png': 'text/png',
    }

    const contentType = mimeTypes[extName] || 'application/octet-stream'

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if(err.code === "ENOENT") {
                res.writeHead(404, {'content-type': 'text/html'})
                res.end("404: File Not Found Bruuuhhhhh")
            }
        } else {
            res.writeHead(200, {'content-type': contentType}) // In response we send two things Head and Body. First head and then the body with the end
            res.end(content, 'utf-8')
        }
    })
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
    
})