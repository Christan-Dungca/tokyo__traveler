import React from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  return (
    <div style={{ marginTop: "7vh" }}>
      <h1>Article Page {id}</h1>
    </div>
  );
};

export default Article;
