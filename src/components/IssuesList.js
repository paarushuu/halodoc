import React, { Fragment } from "react";
import Pagination from "./common/Pagination";
export default function IssuesList({ total, page, data }) {
  function getMoreData() {}
  return (
    <div>
      <div>Open</div>
      <div>Closed</div>
      <div>Labels Filter</div>
      {data.map((item, index) => {
        return (
          <Fragment key={index}>
            <div></div>
            <div></div>
            <div>{item.title}</div>
          </Fragment>
        );
      })}
      {/* <Pagination total={total} page={page} onClick={getMoreData} /> */}
    </div>
  );
}
