import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import _Character from "./_Character";
import _CharacterForm from "./_CharacterForm";
import _EditCharacter from "./_EditCharacter";

const SeriesDetail = (props) => {
  const [series, setSeries] = useState({});
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState({
    name: "",
    image_url: "",
    bio: "",
  });
  const [loaded, setLoaded] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [currentID, setCurrentID] = useState("");

  const slug = props.match.params.slug;
  const url = `/api/v1/series/${slug}`;

  useEffect(() => {
    // console.log(props);
    // api/v1/series/naruto
    // series/naruto

    axios
      .get(url)
      .then((res) => {
        // console.log(res);
        setSeries(res.data);
        // console.log(series);
        setCharacters(res.data.included);
        setLoaded(true);
      })
      .catch((res) => console.log(res));
  }, [character]);

  const handleChange = (e) => {
    e.preventDefault();
    console.log("name:", e.target.name, "value:", e.target.value);
    setCharacter({ ...character, [e.target.name]: e.target.value });
    console.log("character:", character);
  };

  const addCharacter = (e) => {
    const series_id = series.data.id;
    e.preventDefault();

    axios
      .post("/api/v1/characters", { character, series_id })
      .then((res) => {
        const included = [...series.included, res.data.data];
        // console.log("include:", included);
        setSeries({ ...series, included });
        setCharacters(included);
        setCharacter({ name: "", image_url: "", bio: "" });
        setShowForm(false);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  const handleShowEdit = (id, e) => {
    e.preventDefault();
    console.log(id);

    axios
      .get(url)
      .then((res) => {
        console.log(res);
        const currentCharacter = characters.find(
          (character) => character.id == id
        );
        console.log(currentCharacter.attributes);
        setCharacter(currentCharacter.attributes);
        setCurrentID(id);
        setShowEdit(true);
      })
      .catch((data) => {
        console.log(data);
      });
  };
  const editCharacter = (e) => {
    e.preventDefault();
    const series_id = series.data.id;

    axios
      .patch(`/api/v1/characters/${parseInt(currentID)}`, {
        character,
        series_id,
      })
      .then((res) => {
        console.log(res);
        setCharacter({ name: "", image_url: "", bio: "" });
        setCurrentID("");
        setShowEdit(false);
      })
      .catch((res) => {
        console.log(res);
      });

    console.log("updated");
    setShowEdit(false);
  };

  const destroyCharacter = (id, e) => {
    e.preventDefault();
    console.log(id);

    axios
      .delete(`/api/v1/characters/${id}`)
      .then((data) => {
        // console.log(data.id);
        const included = [...characters];
        const index = included.findIndex((data) => data.attributes.id == id);
        included.splice(index, 1);
        setCharacters(included);
      })
      .catch((data) => {
        console.log("Error", data);
      });
    // console.log("clicked");
  };

  let series_characters;
  if (loaded && characters) {
    series_characters = characters.map((character, index) => {
      // console.log("mapping", item);
      return (
        <_Character
          key={index}
          id={character.id}
          attributes={character.attributes}
          handleDestroy={destroyCharacter}
          handleEdit={handleShowEdit}
        />
      );
    });
  }

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
          <_EditCharacter
            handleChange={handleChange}
            handleSubmit={editCharacter}
            showEdit={showEdit}
            closeEdit={() => {
              setShowEdit(false);
              setCharacter({ name: "", image_url: "", bio: "" });
            }}
            character={character}
          />
          <Grid>{series_characters}</Grid>
        </>
      )}
    </Wrapper>
  );
};

export default SeriesDetail;

//--------Styling components-------------
const Wrapper = styled.div``;
const AddBtn = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin-right: 20px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
`;
const Grid = styled.div`
  margin: 20px auto;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;
