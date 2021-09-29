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
      <DeleteBtn onClick={(e) => props.handleDestroy(props.id, e)}>x</DeleteBtn>
      <div>
        <Avatar onClick={(e) => props.handleEdit(props.id, e)}>
          <img src={props.attributes.image_url} alt="" />
        </Avatar>
        <CharacterName>{props.attributes.name}</CharacterName>
        <CharacterBio>{truncate(character_bio, 150)}</CharacterBio>
      </div>
    </Profile>
  );
};

export default _Character;

//--------Styling components-------------
const Profile = styled.div`
  border: 1px solid #eeeeee;
  margin: 20px auto;
  padding: 20px 15px;
  border-radius: 10px;
  text-align: center;
  position: relative;
`;
const DeleteBtn = styled.div`
  background-color: red;
  border-radius: 50%;
  padding: 7px;
  display: inline-block;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
`;
const Avatar = styled.div`
  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }
  margin-bottom: 15px;
  cursor: pointer;
`;
const CharacterName = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const CharacterBio = styled.div`
  text-align: justify;
  line-height: 20px;
`;
