import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import "./ImageDrawer.css";

export default function ImageDrawer() {
  return (
    <Container className="image-drawer">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} data-aos="zoom-in" data-aos-duration="2000">
            <img
              style={{ width: "100%", height: "95%" }}
              src="https://i.ibb.co/XsWN4Gj/l1.jpg"
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={6} data-aos="zoom-in" data-aos-duration="2000">
            <Grid item xs={12} md={12}>
              <img
                style={{ width: "100%", height: "100%", margin: "15px 0px" }}
                src="https://i.ibb.co/d224K1x/l4.jpg"
                alt=""
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <img
                style={{ width: "100%", height: "100%", margin: "15px 0px" }}
                src="https://i.ibb.co/TgD0JTS/l5.jpg"
                alt=""
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            data-aos="zoom-in-right"
            data-aos-duration="2000"
          >
            <Grid item xs={12} md={12}>
              <img
                style={{ width: "100%", height: "100%", margin: "15px 0px" }}
                src="https://i.ibb.co/TT1Lkg5/l6.jpg"
                alt=""
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <img
                style={{ width: "100%", height: "100%", margin: "15px 0px" }}
                src="https://i.ibb.co/nsszxGV/l7.jpg"
                alt=""
              />
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            data-aos="zoom-in-left"
            data-aos-duration="2000"
          >
            <img
              style={{ width: "100%", height: "95%" }}
              src="https://i.ibb.co/zs0Pgmn/l11.jpg"
              alt=""
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
