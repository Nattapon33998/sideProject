import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import StudentTableRow from "./StudentTableRow";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  // console.log(students);

  useEffect(() => {
    axios.get("http://localhost:4000/students").then((res) => {
      setStudents(res.data);
    });
  }, []);
  console.log(students);

  const DataTable = () => {
    students.map((student) => {
      return <StudentTableRow key={student._id} {...student} />;
    });
  };

  return (
    <div className="table-wrapper mt-5">
      <h1 className="mb-3">Student List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Roll No</th>
            <th>Action</th>
          </tr>
        </thead>
        {/* <tbody>{DataTable}</tbody> */}
        <tbody>
          {students.map((student) => {
            return <StudentTableRow key={student._id} {...student} />;
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default StudentList;
