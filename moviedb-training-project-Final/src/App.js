import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CardInfo from "./components/CardInfo";
import Body from "./components/Body";
import axios from "axios";

import { BrowserRouter as Router, Route } from "react-router-dom";

import requests from "./api/data";
function App() {
  const [movie1, setMovie1] = useState([]);
  const [movie2, setMovie2] = useState([]);
  const [movie3, setMovie3] = useState([]);
  const [movie4, setMovie4] = useState([]);
  const [movie5, setMovie5] = useState([]);
  const [movie6, setMovie6] = useState([]);
  const [movie7, setMovie7] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request1 = await axios.get(requests.fetchPage1);
      const request2 = await axios.get(requests.fetchPage2);
      const request3 = await axios.get(requests.fetchPage3);
      const request4 = await axios.get(requests.fetchPage4);
      const request5 = await axios.get(requests.fetchPage5);
      const request6 = await axios.get(requests.fetchPage6);
      const request7 = await axios.get(requests.fetchPage7);
      setMovie1(request1.data.results);
      setMovie2(request2.data.results);
      setMovie3(request3.data.results);
      setMovie4(request4.data.results);
      setMovie5(request5.data.results);
      setMovie6(request6.data.results);
      setMovie7(request7.data.results);
    }
    fetchData();
  }, []);
  let allData = [
    ...movie1,
    ...movie2,
    ...movie3,
    ...movie4,
    ...movie5,
    ...movie6,
    ...movie7,
  ];

  return (
    <div className="app">
      <Router>
        <Route exact path="/">
          <Header />
          <Body />
        </Route>
        <Route path="/:id">
          <CardInfo allData={allData} />
          <Header />
          <Body />
        </Route>
      </Router>
    </div>
  );
}

export default App;
