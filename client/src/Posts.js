import React from "react";
import { useQuery, gql } from "@apollo/client";

const Posts = () => {
  const { loading, error, data } = useQuery(gql`
    {
      getAllPosts {
        id
        title
        description
      }
    }
  `);

  console.log(data);

  if (error) return <h1>{error.message}</h1>;

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      {data.getAllPosts.map((d) => (
        <div key={d.id}>
          <h1>{d.title}</h1>
          <h3>{d.description}</h3>
        </div>
      ))}
    </div>
  );
};

export default Posts;
