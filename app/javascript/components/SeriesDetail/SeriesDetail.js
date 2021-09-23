import axios from "axios";
import React, { useEffect, useState } from "react";

const SeriesDetail = (props) => {
  const [series, setSeries] = useState({});
  const [detail, setDetail] = useState({
    name: "",
    image_url: "",
    bio: "",
  });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // console.log(props);
    // api/v1/series/naruto
    // series/naruto

    const slug = props.match.params.slug;
    const url = `/api/v1/series/${slug}`;

    axios
      .get(url)
      .then((res) => {
        // console.log(res);
        setSeries(res.data);
        setLoaded(true);
      })
      .catch((res) => console.log(res));
  }, []);

  let characters;
  if (loaded && series.included) {
    characters = series.included.map((item) => {
      // console.log("mapping", item);
      return (
        <>
          <h3>{item.attributes.name}</h3>
          <img src={item.attributes.image_url} />
        </>
      );
    });
  }
  return <div>{characters}</div>;
};

export default SeriesDetail;
