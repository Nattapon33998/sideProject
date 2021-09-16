import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const StudentTableRow = (props) => {
  const { name, email, rollNo, _id } = props;

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{rollNo}</td>
      <td>
        <Link className="edit-link btn btn-primary" to={"/edit-student/" + _id}>
          Edit
        </Link>
        <Button variant="danger">Delete</Button>
      </td>
    </tr>
  );
};

export default StudentTableRow;
