const express = require('express')
const app = express();

const cors = require('cors');
app.use(cors());

const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/students', (req, res) => {
  const student = req.body;
  students.push(student);
  res.json(student)
})

app.get('/students', (req, res) => {
  res.json(students)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const students = [
  {
    id: 1,
    name: 'Michael John',
    dob: '1990-01-01',
    gender: 'M',
  },
  {
    id: 2,
    name: 'Jane Doe',
    dob: '1995-11-01',
    gender: 'F',
  }
]