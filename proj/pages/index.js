import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { Typography } from "@mui/material";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import SwiperPosts from "../components/SwiperPosts";


function index() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    fetch("https://demo-api.vsdev.space/api/articles")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, []);

  return (
    <div style={{backgroundColor: "rgb(188, 188, 188)" }}>
      <Navbar/>
      {!loading ? (
        <div>
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            padding="100px"
            color="white"
          >
            Welcome to our informational portal
          </Typography>
          
          <Typography variant="h4" align="center" color="white">
            <Link href="/news">
              Click here to read News
            </Link>
          </Typography>
          <SwiperPosts/>
        </div>
      ) : (
        <Loader />
      )}
      <Footer />
    </div>
  );
}

export default index;
