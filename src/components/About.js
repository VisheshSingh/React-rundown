import React from "react";
import rainbow from "../HOC/rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta odit
        ullam nam iure esse ex consequatur, voluptatem modi quasi, natus
        consectetur quam aliquam. Eaque voluptates consequatur recusandae
        aliquam molestiae beatae ad iure nesciunt unde blanditiis, esse itaque
        odit rerum velit, optio saepe necessitatibus nisi iusto.
      </p>
    </div>
  );
};

export default rainbow(About);
