import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Purchase.css";

import { Button, Container, Box, Grid } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Purchase = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://murmuring-depths-55393.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("order processed successfully");
          reset();
        }
      });
  };
  useEffect(() => {
    fetch(`https://murmuring-depths-55393.herokuapp.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            id="purchase-div"
            style={{
              margin: "auto",
              marginTop: "50px",
            }}
          >
            <div>
              <img
                style={{ width: "60%", borderRadius: "5px" }}
                src={product.img}
                alt=""
              />
            </div>
            <div>
              <h2>{product.model}</h2>
            </div>
            <div>
              <h6>Price: {product.price} $</h6>
            </div>
            <h1>Place Order</h1>
            <form onSubmit={handleSubmit(onSubmit)} id="purchase-form">
              <input defaultValue={user.displayName} {...register("name")} />

              <input defaultValue={user.email} {...register("email")} />
              {errors.email && (
                <span className="error">This field is required</span>
              )}

              <input
                defaultValue={product.model}
                // placeholder="product name"
                {...register("productsName", { required: true })}
              />
              <input
                defaultValue={product.price}
                // placeholder="Price"
                {...register("price", { required: true })}
              />

              <input
                placeholder="Address"
                defaultValue=""
                {...register("address", { required: true })}
              />

              <input
                placeholder="phone number"
                defaultValue=""
                {...register("phone", { required: true })}
              />

              <input type="submit" />
              <div className="form-link">
                <Link to="/dashboard/myOrder">
                  <Button
                    type="submit"
                    variant="contained"
                    style={{
                      marginBottom: "10px",
                      display: "block",
                      margin: "10px auto",
                      width: "50%",
                    }}
                  >
                    My Order
                  </Button>
                </Link>
                <Link to="/home">
                  <Button
                    type="submit"
                    variant="contained"
                    style={{
                      marginBottom: "10px",
                      display: "block",
                      margin: "10px auto",
                      width: "50%",
                    }}
                  >
                    Go To Home
                  </Button>
                </Link>
              </div>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Purchase;
