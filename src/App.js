import React, { useState, useEffect } from "react";
import IssuesList from "./components/IssuesList";
import constants from "./constants/Constants";
import "./styles.css";

export default function App() {
  const [result, setResult] = useState([]);
  const [total, setTotal] = useState(0);
  const perpage = constants.perpage;
  const page = useState(2);

  useEffect(() => {
    fetch(
      "https://api.github.com/search/issues?q=repo:angular/angular/node+type:issue+state:open&per_page=" +
        perpage +
        "&page=" +
        page
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
        setTotal(responseData.total_count);
        setResult(responseData.items);
      })
      .catch((error) => {
        throw error;
      });
  }, [page, result]);
  return (
    <div className="App">
      <h1>Listing of Issues1</h1>
      <div className="repoowner">Repo Owner/Repo name</div>
      <div className="issuemain">Issues</div>
      {result && result.length >= 1 && (
        <IssuesList total={total} page={1} data={result} />
      )}
    </div>
  );
}
