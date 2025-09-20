// App.js
import React from "react";

// Base class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Student subclass
class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  displayInfo() {
    return `${super.displayInfo()}, Course: ${this.course}`;
  }

  study() {
    return `${this.name} is studying ${this.course}`;
  }
}

// Teacher subclass
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  displayInfo() {
    return `${super.displayInfo()}, Subject: ${this.subject}`;
  }

  teach() {
    return `${this.name} is teaching ${this.subject}`;
  }
}

// React component
function App() {
  const student1 = new Student("Aditi", 20, "Computer Science");
  const teacher1 = new Teacher("Mr. Sharma", 40, "Mathematics");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Person Class Hierarchy Example</h1>

      <h2>Student Details</h2>
      <p>{student1.displayInfo()}</p>
      <p>{student1.study()}</p>

      <h2>Teacher Details</h2>
      <p>{teacher1.displayInfo()}</p>
      <p>{teacher1.teach()}</p>
    </div>
  );
}

export default App;
