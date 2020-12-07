import React from "react";
import { Table } from 'react-bootstrap'

function THead() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Employee</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
      </thead>
    </Table>
  );
}

export default THead;
