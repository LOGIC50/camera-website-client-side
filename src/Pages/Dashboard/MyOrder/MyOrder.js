import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./MyOrder.css";

const MyOrder = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `https://murmuring-depths-55393.herokuapp.com/order?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handleDelete = (id) => {
    const url = `https://murmuring-depths-55393.herokuapp.com/order/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("Successfully Delated");
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
        }
      });
  };

  return (
    <div className="container" id="myOrder" style={{ marginTop: "50px" }}>
      <hr />
      <p
        style={{
          textAlign: "left",
          fontSize: "1.2rem",
          color: "blue",
          marginBottom: "0px",
        }}
      >
        Customer's Name: {user.displayName}
      </p>
      <p style={{ textAlign: "left", fontSize: "1.2rem", color: "blue" }}>
        Customer's Email: {user.email}
      </p>
      <hr />
      <br />
      <h2 style={{ marginBottom: "30px" }}>My Orders List</h2>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="Appointments table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: "1.2rem" }}>
                Products Name
              </TableCell>
              <TableCell style={{ fontSize: "1.2rem" }} align="center">
                Price
              </TableCell>
              <TableCell style={{ fontSize: "1.2rem" }} align="right">
                Purchase
              </TableCell>
              <TableCell style={{ fontSize: "1.2rem" }} align="right">
                Cancel
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.productsName}
                </TableCell>
                <TableCell align="center">{row.price} $</TableCell>
                <TableCell align="right">
                  {row.payment ? (
                    "Paid"
                  ) : (
                    <Link to={`/dashboard/payment/${row._id}`}>
                      <button className="button-33">Pay</button>
                    </Link>
                  )}
                </TableCell>
                <TableCell align="right">
                  <button
                    className="button-34"
                    onClick={() => handleDelete(row._id)}
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyOrder;
