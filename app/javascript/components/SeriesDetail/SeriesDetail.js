import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import _Character from "./_Character";
import _CharacterForm from "./_CharacterForm";

const SeriesDetail = (props) => {
  const [series, setSeries] = useState({});
  const [character, setCharacter] = useState({
    name: "",
    image_url: "",
    bio: "",
  });
  const [loaded, setLoaded] = useState(false);
  const [showForm, setShowForm] = useState(false);

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
        // console.log(series);
        setLoaded(true);
      })
      .catch((res) => console.log(res));
  }, []);

  let characters;
  if (loaded && series.included) {
    characters = series.included.map((item) => {
      // console.log("mapping", item);
      return (
        <_Character key={item.attributes.name} attributes={item.attributes} />
      );
    });
  }

  const handleChange = (e) => {
    e.preventDefault();
    console.log("name:", e.target.name, "value:", e.target.value);
    setCharacter({ ...character, [e.target.name]: e.target.value });
    console.log("character:", character);
  };

  const addCharacter = (e) => {
    e.preventDefault();

    const series_id = series.data.id;
    axios
      .post("/api/v1/characters", { character, series_id })
      .then((res) => {
        const included = [...series.included, res.data.data];
        setSeries({ ...series, included });
        setCharacter({ name: "", image_url: "", bio: "" });
        setShowForm(false);
      })
      .catch((res) => {});
  };

  const editCharacter = () => {};
  const destroyCharacter = () => {};

  return (
    <Wrapper>
      {loaded && (
        <>
          <AddBtn>
            <button onClick={() => setShowForm(true)}>Add New Character</button>
          </AddBtn>
          <_CharacterForm
            handleChange={handleChange}
            handleSubmit={addCharacter}
            showForm={showForm}
            closeForm={() => setShowForm(false)}
            attributes={series.data.attributes}
            character={character}
          />
          <Grid>{characters}</Grid>
        </>
      )}
    </Wrapper>
  );
};

export default SeriesDetail;

const Wrapper = styled.div``;
const AddBtn = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin-right: 20px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
  }
`;
const Grid = styled.div`
  margin: 20px auto;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;
