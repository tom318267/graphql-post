import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_POST = gql`
  mutation createPost($title: String!, $description: String!) {
    createPost(post: { title: $title, description: $description }) {
      id
      title
      description
    }
  }
`;

const CreatePost = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const [createPost] = useMutation(CREATE_POST);

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createPost({
            variables: { title: form.title, description: form.description },
          });
          setForm({
            title: "",
            description: "",
          });
        }}
      >
        <input
          onChange={onChange}
          name="title"
          type="text"
          value={form.title}
        />
        <input
          onChange={onChange}
          name="description"
          type="text"
          value={form.description}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
