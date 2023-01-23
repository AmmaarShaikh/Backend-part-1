const http = require('http')

const server = http.createServer((req,res)=> {
    if(req.url === '/'){
        res.write('Hello World ');
        res.write('This is our first server');
        res.end();
    }
    
    if(req.url === 'api/courses'){
        res.write(JSON.stringify([1,2,3]))
        res.write('This is a list of offerings');
        res.write(' at BTHS');
        res.end();
    }
}
)

const express = require('express');

const app = express();

const courses = [
    {id: 1, name:'Web Development'},
    {id:2, name:'IT'},
    {id:3, name:'Cybersecurity'},
];

app.get('/', (req,res)=>{
    res.send("Hello There");
})

app.get('/api/courses', (req,res)=>{
    res.send(courses);
})

app.get('/api/courses/:id', (req,res)=>{
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send("The course with the given ID was not found");
        return;
    }
        res.send(course);
}
)
app.listen(3000, () => {
    console.log('Listening on port 3000 ...');
})
