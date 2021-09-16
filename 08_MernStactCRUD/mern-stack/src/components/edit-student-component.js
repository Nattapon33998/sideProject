import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const EditStudent = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState("");

  useEffect(() => {
    axios
      .get(
        "http://localhost:4000/students/edit-student/" + props.match.params.id
      )
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setRollNo(res.data.rollNo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submitData = () => {
    console.log(name);
    console.log(email);
    console.log(rollNo);

    const studentObject = {
      name: name,
      email: email,
      rollNo: rollNo,
    };

    axios
      .put(
        "http://localhost:4000/students/update-student/" +
          props.match.params.id,
        studentObject
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    props.history.push("/student-list");
  };

  return (
    <div className="form-wrapper mt-5">
      <h1>Update Student</h1>
      <Form>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No.</Form.Label>
          <Form.Control
            type="text"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
          />
        </Form.Group>

        <Button variant="success" size="lg" block="block" onClick={submitData}>
          Update Student
        </Button>
      </Form>
    </div>
  );
};

export default EditStudent;
