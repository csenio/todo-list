import React from "react";
import PropTypes from "prop-types";
import CircularProgressbar from "react-circular-progressbar";
import { ChartContainer } from "./styles";
import "react-circular-progressbar/dist/styles.css";

function Chart({ percentage, theme }) {
  return (
    <ChartContainer>
      <CircularProgressbar
        strokeWidth={5}
        styles={{
          trail: { stroke: theme.accentLight },
          path: { stroke: theme.accentPrimary },
          text: {
            fill: theme.accentPrimary,
            fontSize: "18px",
            fontFamily: "Open Sans"
          }
        }}
        initialAnimation={true}
        text={`${percentage}%`}
        percentage={percentage}
      />
    </ChartContainer>
  );
}

Chart.propTypes = {
  percentage: PropTypes.number.isRequired,
  theme: PropTypes.array.isRequired
};

Chart.defaultProps = {
  percentage: 0
};

export default Chart;
