import { useState } from "react";
import { Container } from "react-bootstrap";
import SearchResult from "./SearchResult";
import Button from "react-bootstrap/Button";

const YouTubeSearch = () => {
  const [value, setValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(value);
    setValue("");
    //console.log(value, " is submited");
  };

  return (
    <Container>
      <Container className="text-center mt-5 py-4 bg-secondary bg-opacity-50 shadow rounded-top">
        <form onSubmit={handleSubmit}>
          <h1 className="mb-3">
            Search <span className="fw-bolder text-danger">YouTube</span>
          </h1>
          <div className="d-flex justify-content-between align-items-center border border-dark rounded shadow">
            <input
              autoFocus
              className="ps-3"
              style={{ fontSize: "1.2rem" }}
              type="text"
              placeholder="Enter your keyword here"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button
              variant="outline-secondary"
              type="submit"
              className="py-2 px-3 text-white fs-4 fw-bold border-0"
            >
              Search
            </Button>
          </div>
        </form>
      </Container>
      <Container className="bg-secondary bg-opacity-25 rounded-bottom shadow-sm">
        {searchTerm && <SearchResult searchTerm={searchTerm} />}
      </Container>
    </Container>
  );
};

export default YouTubeSearch;
