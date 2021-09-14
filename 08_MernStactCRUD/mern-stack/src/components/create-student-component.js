import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CreateStudent = () => {
  return (
    <div className="form-wrapper mt-5">
      <h1>Create Student</h1>
      <Form>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No.</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Button variant="success" size="lg" block="block" type="submit">
          Create Student
        </Button>
      </Form>
    </div>
  );
};

export default CreateStudent;
