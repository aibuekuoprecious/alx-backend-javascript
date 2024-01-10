export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const studentA: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "Kenya",
};
const studentB: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
  location: "Nigeria",
};

const studentsList: Student[] = [studentA, studentB];
const table = document.createElement('table');

studentsList.forEach((student) => {
  let row = table.insertRow();
  let cell1 = row.insertCell();
  let cell2 = row.insertCell();
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

document.body.appendChild(table);
document.title = 'Task 0';
