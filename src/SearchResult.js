import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleSearch from "./SingleSearch";
import "animate.css";

const SearchResult = ({ searchTerm }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isPending, setIsPending] = useState(true);

  //   setup youtube search api
  const apiKey = "AIzaSyAoXCIrcliZGXpLTFHlekZAZw3Gp2-AFaU"; //individual key accitivated for youtube in google developer
  const numberOfResults = 10;
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${numberOfResults}&q=${searchTerm}&key=${apiKey}`;

  const searchYouTube = () => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data);
        const { items } = res.data;
        const searchItems = items.map((item) => {
          const { snippet } = item;
          const { channelId, channelTitle, description, title, thumbnails } =
            snippet;

          return {
            channelId,
            channelTitle,
            description,
            title,
            thumbnails,
          };
        });
        setSearchResults(searchItems);
        setIsPending(false);
      })
      .catch((err) => {
        console.log(err);
        setIsPending(false);
      });
  };

  useEffect(() => {
    searchYouTube();
    setIsPending(true);
    setSearchResults([]);
  }, [url, searchTerm]);

  return (
    <Container className="py-4 mb-5 ">
      {isPending && (
        <Container className="text-center text-secondary fs-2 fw-bold">
          Loading...
        </Container>
      )}
      <Row>
        {searchResults.length > 0 &&
          searchResults.map((result, index) => (
            <Col
              key={index}
              xs={12}
              md={6}
              lg={4}
              className="animate__animated animate__fadeInDown"
            >
              <SingleSearch {...result} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default SearchResult;
