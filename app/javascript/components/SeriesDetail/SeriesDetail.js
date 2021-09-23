import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import _Character from "./_Character";

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
      console.log("mapping", item);
      return (
        <_Character key={item.attributes.name} attributes={item.attributes} />
      );
    });
  }
  return <Grid>{characters}</Grid>;
};

export default SeriesDetail;

const Grid = styled.div`
  margin: 20px auto;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;
