// generate.js
import { faker } from "@faker-js/faker";
import fs from "fs";

const TOTAL_STUDENTS = 240; // nechta student bo‘lishini shu yerda belgilaysan
const STUDENTS_PER_CLASS = 24;

const students = [];
const classes = [];
const teachers = [];

let classId = 1;
let teacherId = 1;

// Har 24 ta studentdan keyin yangi sinf yaratiladi
for (let i = 1; i <= TOTAL_STUDENTS; i++) {
  // Agar yangi sinf kerak bo‘lsa
  if ((i - 1) % STUDENTS_PER_CLASS === 0) {
    const grade = faker.number.int({ min: 5, max: 11 });
    const section = faker.string.alpha({ length: 1, casing: "upper" });

    classes.push({
      id: classId,
      name: `${grade}-${section}`,
      grade,
      room: faker.number.int({ min: 100, max: 400 }).toString(),
      teacherId: teacherId,
      studentIds: [],
    });

    teachers.push({
      id: teacherId,
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      subject: faker.helpers.arrayElement([
        "Matematika",
        "Fizika",
        "Ingliz tili",
        "Tarix",
        "Kimyo",
      ]),
      email: faker.internet.email(),
      phone: faker.phone.number("+9989########"),
      classIds: [classId],
    });

    teacherId++;
    classId++;
  }

  const currentClassId = classId - 1;

  const student = {
    id: i,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: faker.number.int({ min: 12, max: 18 }),
    gender: faker.helpers.arrayElement(["M", "F"]),
    classId: currentClassId,
  };

  students.push(student);
  classes[currentClassId - 1].studentIds.push(i);
}

const db = { teachers, classes, students };

fs.writeFileSync("db.json", JSON.stringify(db, null, 2), "utf-8");

console.log("✅ db.json tayyor!");

// Natijada:
// 240 student → 10 sinf
// 10 teacher → 10 sinfga biriktiriladi
