const http = require('http') // require is similar to include or import
                             // and generally assign to variable with same name as pkg
const fs = require('fs') 
const homePage = fs.readFileSync('index.html') 
const aboutPage = fs.readFileSync('about.html') 
const contactPage = fs.readFileSync('contact.html') 
const notFoundPage = fs.readFileSync('notfound.html') 
const server = http.createServer((req, res) =>{    
  if(req.url === '/about') 
    res.end(aboutPage) 
  else if(req.url === '/contact') 
    res.end(contactPage) 
  else if(req.url === '/') 
    res.end(homePage)        
  else { 
    res.writeHead(404) 
    res.end(notFoundPage) 
  }    
})

server.listen(3000)




