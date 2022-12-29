import React from "react";
import { Container } from "react-bootstrap";
import Result from "./Result";

const SingleSearch = ({
  channelId,
  channelTitle,
  description,
  title,
  thumbnails,
}) => {
  const image = thumbnails.high.url; //access to high quality image
  return (
    <Container className="my-2 py-2 border rounded border-secondary border-opacity-25 shadow bg-secondary bg-opacity-25">
      <h4 className="text-uppercase text-success">{channelTitle}</h4>
      <div>
        <h5 className="text-capitalize">{title}</h5>
        <img
          src={image}
          alt="title"
          style={{ width: "100%", objectFit: "cover" }}
          className="mb-2"
        />
        <div></div>
        <p>{description}</p>
      </div>
      <div className="">
        <div className="text-info text-opacity-50">
          <h6 className="m-0 font-monospace">Channel ID</h6>
          <p className="text-success text-opacity-75">{channelId}</p>
        </div>
        <Result searchId={channelId} />
      </div>
    </Container>
  );
};

export default SingleSearch;
