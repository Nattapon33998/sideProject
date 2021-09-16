import React from "react";

const StudentTableRow = (props) => {
  const { name, email, rollNo, _id } = props;

  return (
    <div>
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{rollNo}</td>
      </tr>
      <tr></tr>
    </div>
  );
};

export default StudentTableRow;
