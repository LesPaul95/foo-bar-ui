import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <Link to="/foo">
        <div>go to foo</div>
      </Link>
      <Link to="/bar">
        <div>go to bar</div>
      </Link>
    </div>
  );
}
