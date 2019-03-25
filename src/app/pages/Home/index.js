import React from "react";
import PropTypes from "prop-types";
import { Button, Chart } from "../../components";

function Home(props) {
  return (
    <div>
      <h1>Home</h1>
      <Button>:D</Button>
      <Chart />
    </div>
  );
}

Home.propTypes = {};

export default Home;
