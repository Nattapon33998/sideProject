import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

const StudentTableRow = (props) => {
  const { name, email, rollNo, _id } = props;

  const deleteStudent = () => {
    axios
      .delete("http://localhost:4000/students/delete-student/" + _id)
      .then((res) => {
        console.log("Student successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
    // props.history.push("/");
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{rollNo}</td>
      <td>
        <Link className="edit-link btn btn-primary" to={"/edit-student/" + _id}>
          Edit
        </Link>
        <Button variant="danger" onClick={deleteStudent}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default StudentTableRow;
