import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default function App() {
  return (
    <div style={{ display: "block", width: 700, padding: 50 }}>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>TITLE</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>DESCRIPTION</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>EXAMPLE 1</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>EXAMPLE 2</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>EXAMPLE 3</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>CONSTRAINTS</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>EXPECTED OUTPUT</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Label>DIFFICULTY LEVEL</Form.Label>
        <Form.Select size="lg" aria-label="Default select example">
          <option>SELECT</option>
          <option value="1">EASY</option>
          <option value="2">MEDIUM</option>
          <option value="3">HARD</option>
        </Form.Select>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>CATEGORY</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form>
    </div>
  );
}
