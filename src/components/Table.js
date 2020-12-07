import React from "react";
import { Table } from "react-bootstrap";

function DataTable({ users }) {
  return (
    <Table striped bordered hover>
      <tbody>
        {users[0] !== undefined && users[0].name !== undefined ? (
          users.map(({ login, name, picture, phone, email }) => {
            return (
              <tr key={login.uuid}>
                <td className="align-middle">
                  <img src={picture.thumbnail} alt={email} />
                </td>
                <td className="firstName">{name.first}</td>
                <td className="firstLast">{name.last}</td>
                <td className="email">{email}</td>
                <td className="phone">{phone}</td>
              </tr>
            );
          })
        ) : (
          <></>
        )}
      </tbody>
    </Table>
  );
}

export default DataTable;
