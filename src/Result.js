import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Result = ({ searchId }) => {
  const apiKey = "AIzaSyAoXCIrcliZGXpLTFHlekZAZw3Gp2-AFaU";
  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${searchId}&key=${apiKey}`;
  const [statistics, setStatistics] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const numberWithComas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const searchYouTube = () => {
    axios
      .get(url)
      .then((res) => {
        const { subscriberCount, videoCount, viewCount } =
          res.data.items[0].statistics;
        setStatistics({
          subs: subscriberCount,
          videos: videoCount,
          views: viewCount,
        });
        setIsPending(false);
      })
      .catch((err) => {
        console.log(err);
        setIsPending(false);
      });
  };

  useEffect(() => {
    searchYouTube();
  }, [url, searchId]);

  return (
    <Container className="m-0 p-2 border rounded border-light border-opacity-50">
      {isPending && <div>...Loading</div>}
      {statistics && (
        <Container className="m-0 p-0 ">
          <Col className="">
            <Row>
              <h6 className="fw-bold mb-2 fs-5 text-info font-monospace">
                Channel Details
              </h6>
            </Row>
            <Row className="d-flex justify-content-start">
              <p className="mb-1 fs-6 ">
                Views:{" "}
                <span className="fw-bold">
                  {numberWithComas(statistics.views)}
                </span>
              </p>
            </Row>
            <Row>
              <p className="mb-1 fs-6 ">
                Subscribers:{" "}
                <span className="fw-bold">
                  {numberWithComas(statistics.subs)}
                </span>
              </p>
            </Row>
            <Row>
              <p className="m-0 fs-6 ">
                Total Number of Videos:
                <span className="fw-bold">
                  {" "}
                  {numberWithComas(statistics.videos)}
                </span>
              </p>
            </Row>
          </Col>
        </Container>
      )}
    </Container>
  );
};

export default Result;
