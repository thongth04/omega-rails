import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const _Series = (props) => {
  const truncate = (str, count) => {
    if (count > str.length) {
      return str;
    } else {
      str = str.substring(0, count);
      return str + "...";
    }
  };

  const series_description = props.attributes.description;

  return (
    <Card>
      <SeriesBanner image_url={props.attributes.image_url} />
      <SeriesDescription>
        <p>
          <SeriesName>
            <Link
              to={`/series/${props.attributes.slug}`}
              style={{ textDecoration: "none", color: "darkcyan" }}
            >
              {props.attributes.name}
            </Link>
          </SeriesName>
          {truncate(series_description, 500)}
          <Link
            to={`/series/${props.attributes.slug}`}
            style={{ textDecoration: "none", color: "darkcyan" }}
          >
            Continue
          </Link>
        </p>
      </SeriesDescription>
    </Card>
  );
};

export default _Series;

const Card = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  max-width: 70%;
  border: 1px solid black;
  margin: 20px auto;
  border-radius: 10px;
`;
const SeriesBanner = styled.div`
  background: url(${(props) => props.image_url});
  background-repeat: no-repeat;
  // background-size: 100% 100%;
  background-size: cover;
  border-radius: 10px 10px 0 0;
`;
const SeriesDescription = styled.div`
  padding: 10px 20px;
  text-align: justify;
  line-height: 20px;
`;
const SeriesName = styled.span`
  font-size: 40px;
  font-weight: bold;
  padding: 7px;
  float: left;
`;
