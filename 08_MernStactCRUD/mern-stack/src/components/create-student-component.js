import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CreateStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState("");

  const submitData = () => {
    console.log(name);
    console.log(email);
    console.log(rollNo);

    setName("");
    setEmail("");
    setRollNo("");
  };

  return (
    <div className="form-wrapper mt-5">
      <h1>Create Student</h1>
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
          Create Student
        </Button>
      </Form>
    </div>
  );
};

export default CreateStudent;
