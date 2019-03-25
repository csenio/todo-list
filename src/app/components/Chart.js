import React from "react";
import PropTypes from "prop-types";
import CircularProgressbar from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import styled from "styled-components";

export const ChartContainer = styled.div`
  height: 80px;
  width: 80px;
`;

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
  percentage: PropTypes.number.isRequired
};

Chart.defaultProps = {
  percentage: 0
};

export default Chart;
