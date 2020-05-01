import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import Card from "react-bootstrap/Card";
import HTML2React from 'html2react';
import Button from "react-bootstrap/Button";
import * as yup from "yup";
import { getFeedListing } from "./requests";

const querystring = require("querystring");


function FeedPage({ feedsStore, location }) {
  const [initialized, setInitialized] = useState(false);
  const [setUrl] = useState("");
  const url = 'https://www.reddit.com/r/worldnews/.rss'
  const [listings, setListings] = useState([]);
  const [data, setData] = useState({});
  const getListings = async url => {
    try {
      const response = await getFeedListing(url);
      setListings(response.data.items);
      setData(response.data.feed);
    } catch (ex) {
      console.log(ex);
    }
  };
  const openLink = url => {
    window.location.href = url;
  };
  useEffect(() => {
    if (!initialized) {
      const url = 'https://www.reddit.com/r/worldnews/.rss';
    //  setUrl(url);
      getListings(url);
      setInitialized(true);
    }
  });
  return (
    <div className="feed-page">
      <div className="inner-content">
        <h2>News Feed via Reddit:</h2>
        <h2 className="center title">
          <img src='https://www.redditstatic.com/icon.png' /> {data.title}
        </h2>
        {listings.map((l, i) => {
          return (
            <Card key={i}>
              <Card.Title className="card-title">{HTML2React(l.title)}</Card.Title>
              <Card.Body>
                <p>{HTML2React(removeBR(l.description))}</p>
                <p>{HTML2React(l.content)}</p>
                <Button variant="primary" onClick={openLink.bind(this, l.link)}>
                  Open
                </Button>{" "}
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
export default withRouter(observer(FeedPage));

function removeBR(text){
  var clean = text.replace("<br>",'');
  return clean;
}
