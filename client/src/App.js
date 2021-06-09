import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./App.css";
import Posts from "./Posts";
import CreatePost from "./CreatePost";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Posts />
        <CreatePost />
      </ApolloProvider>
    </div>
  );
};

export default App;
