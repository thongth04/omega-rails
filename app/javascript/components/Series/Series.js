import axios from "axios";
import React, { useEffect, useState } from "react";
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

  return <div>{series_list}</div>;
};

export default Series;
