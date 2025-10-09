import { faker } from "@faker-js/faker";
import fs from "fs";

const TOTAL_STUDENTS = 504;
const STUDENTS_PER_CLASS = 24;

const students = [];
const classes = [];
const teachers = [];
const news = [];
const anons = [];
const additions = [];

const director = {
  id: 1,
  firstName: faker.person.firstName(),
  photo: faker.image.avatar(),
  lastName: faker.person.lastName(),
  age: faker.number.int({ min: 40, max: 65 }),
  experienceYears: faker.number.int({ min: 10, max: 40 }),
  position: "Director",
};

const principals = [];
const PRINCIPALS_COUNT = 5;

for (let i = 1; i <= PRINCIPALS_COUNT; i++) {
  principals.push({
    id: i,
    firstName: faker.person.firstName(),
    photo: faker.image.avatar(),
    lastName: faker.person.lastName(),
    age: faker.number.int({ min: 35, max: 60 }),
    experienceYears: faker.number.int({ min: 5, max: 35 }),
    position: faker.helpers.arrayElement([
      "Deputy Director",
      "Academic Principal",
      "Administrative Principal",
    ]),
  });
}

let classId = 1;
let teacherId = 1;

for (let i = 1; i <= TOTAL_STUDENTS; i++) {
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
      photo: faker.image.avatar(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      age: faker.number.int({ min: 25, max: 65 }),
      workExperience: faker.number.int({ min: 1, max: 40 }),
      subject: faker.helpers.arrayElement([
        "Matematika",
        "Fizika",
        "Ingliz tili",
        "Tarix",
        "Kimyo",
      ]),
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

for (let i = 1; i <= 12; i++) {
  news.push({
    id: i,
    image: faker.image.urlPicsumPhotos({ width: 800, height: 400 }),
    title: faker.lorem.sentence({ min: 3, max: 7 }),
    description: faker.lorem.paragraph({ min: 2, max: 4 }),
    date: faker.date.recent({ days: 30 }).toISOString().split("T")[0],
  });
}

for (let i = 1; i <= 5; i++) {
  const startDate = faker.date.recent({ days: 10 });
  const endDate = faker.date.soon({ days: 10, refDate: startDate });

  anons.push({
    id: i,
    image: faker.image.urlPicsumPhotos({ width: 800, height: 400 }),
    title: faker.lorem.words(5),
    description: faker.lorem.sentence(10),
    startDate: startDate.toISOString().split("T")[0],
    endDate: endDate.toISOString().split("T")[0],
    time: "12:00 AM - 2:00 PM",
  });
}

const CLUB_NAMES = [
  "Robototexnika",
  "Ingliz tili speaking club",
  "Rasm chizish to‘garagi",
  "Shaxmat to‘garagi",
  "Matematika klubi",
  "IT va dasturlash to‘garagi",
  "Sport (futbol, voleybol)",
  "Drama (teatr san’ati)",
];

for (let i = 1; i <= CLUB_NAMES.length; i++) {
  additions.push({
    id: i,
    name: CLUB_NAMES[i - 1],
    description: faker.lorem.paragraph({ min: 2, max: 4 }),
    teacher: faker.person.fullName(),
    image: faker.image.urlPicsumPhotos({ width: 800, height: 400 }),
  });
}

const db = {
  director,
  principals,
  teachers,
  classes,
  students,
  news,
  anons,
  additions,
};

fs.writeFileSync("db.json", JSON.stringify(db, null, 2), "utf-8");
console.log("✅ db.json tayyor!");
