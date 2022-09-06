import Database from "better-sqlite3";

const db = Database('./db/data.db', { verbose: console.log })

const teachers = [
    {
        name: "Brunilda",
        age: 27,
        subject: "Math"
    },
    {
        name: "Elona",
        age: 26,
        subject: "Food Science"
    },
    {
        name: "Bedra",
        age: 19,
        subject: "Economy"

    }
]


const students = [
    {
        name: "Ana",
        age: 27,
        teacherId: 2
    },
    {
        name: "Mira",
        age: 26,
        teacherId: 1
    },
    {
        name: "Iliri",
        age: 19,
        teacherId: 3

    }
]

const createTeachersTable = db.prepare(`
CREATE TABLE IF NOT EXISTS teachers (
    id INTEGER,
    name TEXT,
    age INTEGER,
    subject TEXT,
    PRIMARY KEY(id)
);`)

createTeachersTable.run()

const deleteAllTeachers = db.prepare(`
DELETE FROM teachers;
`)

deleteAllTeachers.run()


const createTeacher = db.prepare(`
INSERT INTO teachers (name, age, subject) VALUES (?, ?, ?);
`)

for (let teacher of teachers) {
    createTeacher.run(teacher.name, teacher.age, teacher.subject)
}


const createStudentsTable = db.prepare(`
CREATE TABLE IF NOT EXISTS students (
    id INTEGER,
    name TEXT,
    age INTEGER,
    teacherId NUMBER,
    PRIMARY KEY(id)
);`)

createStudentsTable.run()

const deleteAllStudents = db.prepare(`
DELETE FROM students;
`)

deleteAllStudents.run()


const createStudent = db.prepare(`
INSERT INTO students (name, age, teacherId) VALUES (?, ?, ?);
`)

for (let student of students) {
    createStudent.run(student.name, student.age, student.teacherId)
}



