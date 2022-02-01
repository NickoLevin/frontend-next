import Head from "next/head";
import Navbar from "../../components/Navbar";
import React from "react"
;import category from "../../store/category";
import Router from "next/router";
import { Typography, Button } from "@mui/material";
import Image from "next/image";
import { observer } from "mobx-react-lite";
import Loader from "../../components/Loader";



const News = observer(() => {
  const [news, setNews] = React.useState();
  const [loading, setLoading] = React.useState(true);


  React.useEffect(() => {
    setLoading(true);
    fetch("https://demo-api.vsdev.space/api/articles")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setNews(data);
          setLoading(false);
          console.log(data);
        }, 1000);
      });
  }, []);

  return (
    <div>
      <Head>
        <title>News page</title>
      </Head>
      <Navbar />
      <div className="news" style={{ display:"flex", justifyContent:"center", flexDirection: "column"}}>
        <Typography variant="h1" align="center">
          Welcome to the news!
        </Typography>
        {loading ? (
          <Loader />
        ) : (
          <React.Fragment style={{margin:"0 auto"}}>
            {news.map((post) => (
              <div key={post.id} style={{ marginTop: "30px" }}>
                <Typography variant="h4" gutterBottom>
                  {post.name}
                </Typography>
                <Image
                  src={"/" + post.preview_image}
                  alt={post.name}
                  height="400px"
                  width="600px"
                />
                {category?.categories[post.category - 1]?.name ? (
                  <Typography
                    variant="body1"
                    gutterBottom
                    style={{ marginTop: "5px" }}
                  >
                    Category: {category?.categories[post.category - 1]?.name}
                  </Typography>
                ) : (
                  ""
                )}
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ marginTop: "5px" }}
                >
                  {post.shortDesc}
                </Typography>
                <Button
                  variant="contained"
                  style={{ marginTop: "5px" }}
                  onClick={() => Router.push(`/news/${post.id}`)}
                >
                  Подробнее
                </Button>
              </div>
            ))}
          </React.Fragment>
        )}
      </div>
    </div>
  );
});

export default News;
