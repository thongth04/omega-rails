import React from "react";
import styled from "styled-components";

const _CharacterForm = (props) => {
  return (
    <FormWrapper showForm={props.showForm}>
      <CloseBtn onClick={props.closeForm}>x</CloseBtn>
      <h1>Add {props.attributes.name}'s Character</h1>
      <form onSubmit={props.handleSubmit}>
        <Field>
          <input
            type="text"
            name="name"
            placeholder="Character's Name"
            onChange={props.handleChange}
            value={props.character.name}
          />
        </Field>
        <Field>
          <input
            type="text"
            name="image_url"
            placeholder="Image URL"
            onChange={props.handleChange}
            value={props.character.image_url}
          />
        </Field>
        <Field>
          <input
            type="text"
            name="bio"
            onChange={props.handleChange}
            placeholder="Character's Bio"
            value={props.character.bio}
          />
        </Field>
        <SubmitBtn type="submit">Save Character</SubmitBtn>
      </form>
    </FormWrapper>
  );
};

export default _CharacterForm;

const FormWrapper = styled.div`
  width: 50%;
  border-radius: 5px;
  background-color: lightblue;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  top: 200px;
  left: 25%;
  position: fixed;
  z-index: 1;
  visibility: ${(props) => (props.showForm ? "visible" : "hidden")};
  overflow: hidden;

  h1 {
    margin-top: 10px;
  }
  form {
    padding: 20px;
  }
`;
const CloseBtn = styled.div`
  float: right;
  display: inline-block;
  padding: 7px 15px;
  background-color: red;
  cursor: pointer;
  border-radius: 0 5px 0 5px;
`;
const Field = styled.div`
  margin-bottom: 15px;
  input {
    width: 100%;
    border: none;
    border-radius: 5px;
    padding: 15px;
    outline: none;
  }
`;
const SubmitBtn = styled.button`
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;
