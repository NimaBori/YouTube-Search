import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import YouTubeSearch from "./YouTubeSearch";

function App() {
  return (
    <Container>
      <YouTubeSearch />
    </Container>
  );
}

export default App;
