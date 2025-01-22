const express = require('express');
const app = express();

app.use(express.json());

const morgan = require('morgan')

morgan.token('data', (req, res)=> JSON.stringify(req.body))

let agenda = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

//app.use(morgan('tiny'))
app.use(morgan((tokens, req, res) => {
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms',
        tokens.data(req, res)
    ].join(' ')
}
))

app.get('/api/persons', (request, response) =>{
    response.json(agenda);
})


app.get('/info', (request, response) =>{
    const date = new Date();
    response.send(`<p>Phonebook has info for ${agenda.length} people</p><p>${date}</p>`);
})

app.get('/api/persons/:id', (request, response)=>{
    const id = Number(request.params.id);
    const person = agenda.find(p=> p.id === id);
    person ? response.json(person) : response.status(404).end();
})

app.delete('/api/persons/:id', (request, response)=>{
    const id = Number(request.params.id);
    agenda = agenda.filter(p => p.id !== id);
    response.status(200).end();
})

app.post('/api/persons', (request, response) =>{
    const body = request.body;
    if(!body.name || !body.number){
        return response.status(400).json({
            error: 'name or number missing'
        })
    }
    let newName = false;
    newName = agenda.find(p => p.name.toLowerCase() === body.name.toLowerCase());
    if(newName){
        return response.status(400).json({
            error: 'name must be unique'
        })
    }
    const person = {
        id: Math.floor(Math.random()*10000),
        name: body.name,
        number: body.number
    }
    agenda = agenda.concat(person);
    response.json(person)
})

const PORT = 3001;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})
