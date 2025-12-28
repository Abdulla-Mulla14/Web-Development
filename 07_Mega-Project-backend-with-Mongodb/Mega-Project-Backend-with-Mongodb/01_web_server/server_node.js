const http = require('http')


const hostname = '127.0.0.1'  // this is localhost so that I can run server on my own machine
const port = 3000

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end("Hello ice tea")
  } else if (req.url === '/ice-tea') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end("Thanks for ordering an ice tea, its really hot")
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 Not found");
  }
})

server.listen(port, hostname, () => {
  console.log(`Server is listening at http://${hostname}:${port}`);
})

