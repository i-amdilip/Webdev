
let student={
    name:"Aarav",
    age:20,
    course:"B.Tech CSE",
    subjects: ["DSA", "Web Dev", "Math"],
    isEnrolled:true
}

console.log(student);



console.log(student.name);
console.log(student.age);
console.log(student.subjects[1]);


let keyHolder="course";
console.log(student[keyHolder]);


student.graduationYear=2026;
student.isEnrolled=false;
student.age=25;
delete student.name;
console.log(student)