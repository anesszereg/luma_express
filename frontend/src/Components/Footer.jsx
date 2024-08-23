// import React from 'react'
import { Box } from "@mui/material";
import MegaMart from "../assets/SVGs/Brand.svg";
import logo from "../assets/SVGs/logo-symbol.svg";
import { Typography } from "@mui/material";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Login from "../Pages/Login";

const socialMedia = [
  {
    icon: <FaFacebookF />,
    color: "#3B5998",
  },
  {
    icon: <FaInstagram />,
    color: "#C13584",
  },
  {
    icon: <FaLinkedinIn />,
    color: "#0E76A8",
  },
  {
    icon: <FaTiktok />,
    color: "#000000",
  },
];

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "325px",
        width: "100%",
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "space-between",
          height: "255px",
          width: "100%",
          padding: "40px 130px",
          gap: "60px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            width: "20%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <img src={logo} alt="" />

            <img src={MegaMart} alt="" />
          </Box>
          <Typography fontSize={"16px"} fontWeight={"400"} color="#505050">
            Best information about the company gies here but now lorem ipsum is
          </Typography>
          <Box display={"flex"} alignItems={"center"} gap="10px">
            {socialMedia.map((item, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "32px",
                    width: "32px",
                    borderRadius: "50%",
                    backgroundColor: "#BDC4CD",
                    cursor: "pointer",
                  }}
                >
                  {item.icon}{" "}
                </Box>
              );
            })}{" "}
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={"start"}
          gap="60px"
          marginRight={"200px"}
        >
          <Box display="flex" flexDirection={"column"} gap={"10px"}>
            <Typography fontSize={"16px"} fontWeight={"600"} color="#1C1C1C">
              About Us
            </Typography>
            <Box display="flex" flexDirection={"column"} gap={"3px"}>
              <Typography fontSize={"16px"} fontWeight={"400"} color="#8B96A5">
                Find store
              </Typography>
              <Typography fontSize={"16px"} fontWeight={"400"} color="#8B96A5">
                Categories
              </Typography>
              <Typography fontSize={"16px"} fontWeight={"400"} color="#8B96A5">
                Blogs
              </Typography>
            </Box>
          </Box>
          <Box display="flex" flexDirection={"column"} gap={"10px"}>
            <Typography fontSize={"16px"} fontWeight={"600"} color="#1C1C1C">
              Partnership
            </Typography>
            <Box display="flex" flexDirection={"column"} gap={"3px"}>
              <Typography fontSize={"16px"} fontWeight={"400"} color="#8B96A5">
                Partnership
              </Typography>
              <Typography fontSize={"16px"} fontWeight={"400"} color="#8B96A5">
                Partnership
              </Typography>
              <Typography fontSize={"16px"} fontWeight={"400"} color="#8B96A5">
                Partnership
              </Typography>
              <Typography fontSize={"16px"} fontWeight={"400"} color="#8B96A5">
                Blogs
              </Typography>
            </Box>
          </Box>
          <Box display="flex" flexDirection={"column"} gap={"10px"}>
            <Typography fontSize={"16px"} fontWeight={"600"} color="#1C1C1C">
              Information
            </Typography>
            <Box display="flex" flexDirection={"column"} gap={"3px"}>
              <Typography fontSize={"16px"} fontWeight={"400"} color="#8B96A5">
                Help Center
              </Typography>
              <Typography fontSize={"16px"} fontWeight={"400"} color="#8B96A5">
                Money Refund
              </Typography>
              <Typography fontSize={"16px"} fontWeight={"400"} color="#8B96A5">
                Shipping
              </Typography>
              <Typography fontSize={"16px"} fontWeight={"400"} color="#8B96A5">
                Contact us
              </Typography>
            </Box>
          </Box>
          <Box display="flex" flexDirection={"column"} gap={"10px"}>
            <Typography fontSize={"16px"} fontWeight={"600"} color="#1C1C1C">
              For users
            </Typography>
            <Box display="flex" flexDirection={"column"} gap={"3px"}>
              <Typography fontSize={"16px"} fontWeight={"400"} color="#8B96A5">
                <Link to='/login'>Login</Link>
              </Typography>
              <Typography fontSize={"16px"} fontWeight={"400"} color="#8B96A5">
                Register
              </Typography>
              <Typography fontSize={"16px"} fontWeight={"400"} color="#8B96A5">
                Setting
              </Typography>
              <Typography fontSize={"16px"} fontWeight={"400"} color="#8B96A5">
                My Orders
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          height: "70px",
          backgroundColor: "#EFF2F4",
          padding: "40px 130px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography fontSize={"16px"} fontWeight={"400"} color={"#606060"}>
          @2024 All rights reserved. Mega Mart
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
