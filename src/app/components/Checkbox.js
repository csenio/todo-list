import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const CheckboxOutline = styled(animated.span)`
  height: 24px;
  width: 24px;
  border: 3px solid #21d19f;
  display: inline-block;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
`;

const CheckboxInner = styled.span`
  height: 15px;
  width: 15px;
  background: #45b69c;
  display: inline-block;
  border-radius: 2px;
  margin: 1.5px;
`;

function Checkbox(props) {
  const [active, setActive] = useState(false);
  const { x } = useSpring({
    x: active ? 1 : 0,
    config: { duration: 500 }
  });

  const onClick = () => {
    setActive(!active);
  };

  return (
    <CheckboxOutline
      style={{
        transform: x
          .interpolate({
            range: [0, 0.2, 0.8, 1],
            output: [1, 0.97, 1.1, 1]
          })
          .interpolate(x => `scale(${x})`)
      }}
      onClick={onClick}
    >
      {active && <CheckboxInner />}
    </CheckboxOutline>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired
};

export default Checkbox;
