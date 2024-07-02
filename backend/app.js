const express = require('express')
const app = express();

const cors = require('cors');
app.use(cors());

const port = 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/students', (req, res) => {
  const student = req.body;
  student.id = students.length + 1;
  students.push(student);
  setTimeout(() => res.json(student), 5000);
})

app.put('/students/:id', (req, res) => {
  const studentId = req.params.id;
  const student = req.body;
  const index = students.findIndex(student => student.id === Number(studentId));
  if (index !== -1) {
    students.splice(index, 1, student);
  }
  res.json(student)
})

app.delete('/students/:id', (req, res) => {
  const studentId = req.params.id;
  const index = students.findIndex(student => student.id === Number(studentId));
  if (index !== -1) {
    students.splice(index, 1);
  }
  res.json({success: true})
})

app.get('/students', (req, res) => {
  setTimeout(() => res.json(students), 5000);
})

app.get('/students/:id', (req, res) => {
  const studentId = req.params.id;
  const student = students.find(student => student.id === Number(studentId));
  setTimeout(() => res.json(student), 5000);
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