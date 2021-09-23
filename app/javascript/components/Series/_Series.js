import React from "react";
import styled from "styled-components";

const _Series = (props) => {
  return (
    <Card>
      <SeriesBanner>
        <img src={props.attributes.image_url} alt={props.attributes.name} />
      </SeriesBanner>
      <SeriesDescription>
        <SeriesName>{props.attributes.name}</SeriesName>
        {props.attributes.description}
      </SeriesDescription>
    </Card>
  );
};

export default _Series;

const Card = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  max-width: 80%;
  border: 1px solid #efefef;
  margin: 10px auto;
  border-radius: 10px;

  img {
    max-height: 50px;
  }
`;
const SeriesBanner = styled.div``;
const SeriesName = styled.div``;
const SeriesDescription = styled.div`
  padding: 5px 20px;
`;
