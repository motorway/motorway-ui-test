import React from "react";
import { Box } from "@material-ui/core";
import "./style.css";

const Image = ({ url, image }) => (
  <Box className="image_container">
    <img src={url} alt="" className="image" />
    <img src={image} alt="" className="image" />
  </Box>
);

export default Image;
