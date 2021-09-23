import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import _Series from "./_Series";

const Series = () => {
  const [series, SetSeries] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/series.json")
      .then((res) => SetSeries(res.data.data))
      .catch((res) => console.log(res));
  }, [series.length]);

  const series_list = series.map((item) => {
    return <_Series key={item.attributes.name} attributes={item.attributes} />;
  });

  return (
    <Home>
      <div>{series_list}</div>
    </Home>
  );
};

export default Series;

const Home = styled.div`
  max-width: 1200px;
`;
