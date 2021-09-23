import React from "react";
import styled from "styled-components";

const _Character = (props) => {
  const truncate = (str, count) => {
    if (count > str.length) {
      return str;
    } else {
      str = str.substring(0, count);
      return str + "...";
    }
  };

  const character_bio = props.attributes.bio;

  return (
    <Profile>
      <Avatar>
        <img src={props.attributes.image_url} alt="" />
      </Avatar>
      <CharacterName>{props.attributes.name}</CharacterName>
      <CharacterBio>{truncate(character_bio, 100)}</CharacterBio>
    </Profile>
  );
};

export default _Character;

const Profile = styled.div`
  border: 1px solid black;
  margin: 20px auto;
  border-radius: 10px;
`;
const Avatar = styled.div`
  img {
    height: 100px;
    width: 100px;
  }
`;
const CharacterName = styled.div``;
const CharacterBio = styled.div``;
