import { createReadStream } from "fs";
import { createServer } from "http";

const server = createServer((req, res) => {
   console.log(req.url);
   switch (req.url) {
      case '/':
         res.writeHead(200, { "content-type": "text/html" });
         createReadStream('public/index.html','utf8',).pipe(res)
         break;
      case '/styles.css':
         res.writeHead(200, { "content-type": "text/css" });
         createReadStream('public/styles.css','utf8',).pipe(res)
         break;
      case '/index.js':
         res.writeHead(200, { "content-type": "text/javascript" });
         createReadStream('public/index.js','utf8',).pipe(res)
         break;
      case '/js/upload.js':
         res.writeHead(200, { "content-type": "text/javascript" });
         createReadStream('public/js/upload.js','utf8',).pipe(res)
         break;
      case '/js/croper.js':
         res.writeHead(200, { "content-type": "text/javascript" });
         createReadStream('public/js/croper.js','utf8',).pipe(res)
         break;
      case '/js/controllers/controller.js':
         res.writeHead(200, { "content-type": "text/javascript" });
         createReadStream('public/js/controllers/controller.js','utf8',).pipe(res)
         break;
      case '/js/controllers/mouse-controller.js':
         res.writeHead(200, { "content-type": "text/javascript" });
         createReadStream('public/js/controllers/mouse-controller.js','utf8',).pipe(res)
         break;
      case '/js/controllers/size-controller.js':
         res.writeHead(200, { "content-type": "text/javascript" });
         createReadStream('public/js/controllers/size-controller.js','utf8',).pipe(res)
         break;
   }
});

server.listen(3000);
