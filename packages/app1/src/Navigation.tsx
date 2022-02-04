import { Link } from "react-router-dom";
import React from "react";

const style = { border: "1px solid #000", padding: 12 };

const Navigation = () => (
  <div style={style}>
    <Link to="/">Home</Link> - <Link to="/about">About</Link> -<Link to="/about/foo">Foo</Link>
  </div>
);

export default Navigation;
