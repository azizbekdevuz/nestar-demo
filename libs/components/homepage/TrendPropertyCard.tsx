import React from "react";
import { Stack, Box, Divider, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TrendPropertyCard = () => {
  return (
    <Stack className="trend-card-box">
      <Box
        className="card-img"
        style={{
          backgroundImage: `url("/img/banner/types/house.webp")`,
        }}
      >
        <div className="status">
          <img src="/img/icons/electricity.svg" alt="" />
          <span>TOP</span>
        </div>
        <div className="price">$10</div>
      </Box>
      <Box className="info">
        <strong className="title">Kingston Buildings</strong>
        <p className="desc">This is super apartments</p>
        <div className="options">
          <div>
            <img src="/img/icons/bed.svg" alt="" />
            <span>2 bed</span>
          </div>
          <div>
            <img src="/img/icons/room.svg" alt="" />
            <span>5 room</span>
          </div>
          <div>
            <img src="/img/icons/expand.svg" alt="" />
            <span>350 m2</span>
          </div>
        </div>
        <Divider sx={{ mt: "15px", mb: "17px" }} />
        <div className="bott">
          <p>Rent</p>
          <div className="view-like-box">
            <IconButton color="default">
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className="view-cnt">120</Typography>
            <IconButton color="default">
              <FavoriteIcon />
            </IconButton>
            <Typography className="view-cnt">200</Typography>
          </div>
        </div>
      </Box>
    </Stack>
  );
};

export default TrendPropertyCard;