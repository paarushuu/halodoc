import React, { useState, useEffect } from "react";
import constants from "../../constants/Constants";

export default function Pagination({ total, page }) {
  const perpage = constants.perpage;
  if (total <= perpage) {
    return null;
  } else if (total > perpage) {
    const pages = total / perpage;

    if (page) {
    }

    for (let i = 1; i <= pages; i++) {
      // if (i === constants.paginationBreak) {
      //   return <div>Next</div>;
      // }
      return <div>{i}</div>;
    }
  }
}
