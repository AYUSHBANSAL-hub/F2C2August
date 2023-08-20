// students array
const students = [
  {
    ID: 1,
    name: "Alice",
    age: 21,
    grade: "A",
    degree: "Btech",
    email: "alice@example.com",
  },
  {
    ID: 2,
    name: "Bob",
    age: 22,
    grade: "B",
    degree: "MBA",
    email: "bob@example.com",
  },
  {
    ID: 3,
    name: "Charlie",
    age: 20,
    grade: "C",
    degree: "Arts",
    email: "charlie@example.com",
  },
];

// renderStudent function to print data in the table
function renderStudent(displayData = students) {
  const tbody = document.getElementById("student-body");
  tbody.innerHTML = "";
  displayData.forEach((student, index) => {
    const row = document.createElement("tr");
    const columns = ["ID", "name", "age", "grade", "degree", "email"];
    columns.forEach((column) => {
      const td = document.createElement("td");
      td.textContent = student[column];
      // console.log(td);
      row.appendChild(td);
    });
    // adding edit button and delete button
    const actionTd = document.createElement("td");

    const editButton = document.createElement("button");
    editButton.textContent = "edit";
    editButton.onclick = () => editStudent(student.ID);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.onclick = () => deleteStudent(student.ID);

    actionTd.appendChild(editButton);
    actionTd.appendChild(deleteButton);
    row.appendChild(actionTd);

    tbody.appendChild(row);
  });
  // using the above forEach method I am executing a function
  // on each element in the students array
}
renderStudent();
// handleSubmit fn to hxandle the data when the user submits the form
function handleSubmit() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const grade = document.getElementById("grade").value;
  const degree = document.getElementById("degree").value;
  const email = document.getElementById("email").value;
  const StudentID = document.getElementById("student-id").value;
  console.log(name, age, grade, degree, email);
  if (StudentID) {
    const student = students.find((s) => s.ID == StudentID);
    student.name = name;
    student.age = age;
    student.grade = grade;
    student.degree = degree;
    student.email = email;
  } else {
    const newStudent = {
      ID: students[students.length - 1].ID + 1,
      name,
      age,
      grade,
      degree,
      email,
    };
    students.push(newStudent);
  }
  //  will be updated when the edit functionality is being worked on
  document.getElementById("student-form").reset();
  document.getElementById("submit-button").textContent = "Add Student";
  renderStudent();
  return false;
}
// edit student function
function editStudent(StudentID) {
  const student = students.find((s) => s.ID == StudentID);
  document.getElementById("name").value = student.name;
  document.getElementById("age").value = student.age;
  document.getElementById("grade").value = student.grade;
  document.getElementById("degree").value = student.degree;
  document.getElementById("email").value = student.email;
  document.getElementById("student-id").value = student.ID;
  document.getElementById("submit-button").textContent = "Edit Student";
}
// delete Student
function deleteStudent(StudentID) {
  const confirmation = prompt("If you are sure write 'y' or else write 'n'.");
  if (confirmation.toLowerCase() == "y") {
    const index = students.findIndex((s) => s.ID == StudentID);
    students.splice(index, 1);
    renderStudent();
    alert("Deleted successfulyy");
  }
}
// search Student functionality

function searchStudents() {
  const searchvalue = document
    .getElementById("search-input")
    .value.toLowerCase();
  const filteredStudents = students.filter((student) => {
    return (
      student.name.toLowerCase().includes(searchvalue) ||
      student.email.toLowerCase().includes(searchvalue) ||
      student.degree.toLowerCase().includes(searchvalue)
    );
  });

  renderStudent(filteredStudents);
}

// function filterExample(){
//     const eg=[30,300,280,400,205,1000];
//     const filternummbers=eg.filter((item)=>item>300);
//     console.log(filternummbers);
// }
// filterExample();
