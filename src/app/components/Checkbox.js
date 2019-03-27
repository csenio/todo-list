import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const CheckboxOutline = styled(animated.span)`
  height: 24px;
  width: 24px;
  border: 3px solid ${props => props.theme.accentPrimary};
  display: inline-block;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  margin-right: 6px;
`;

const CheckboxInner = styled.span`
  height: 14px;
  width: 14px;
  background: ${props => props.theme.accentSecondary};
  display: inline-block;
  border-radius: 2px;
  margin: 2px;
`;

const Checkbox = ({ onChange, checked }) => {
  const [active, setActive] = useState(checked);
  const [{ scale }, setScale] = useSpring(() => ({
    scale: 1,
    config: { mass: 1, tension: 400, friction: 14 }
  }));

  const onMouseDown = e => {
    e.preventDefault();
    onChange(!active);
    setActive(!active);
    setScale({ scale: 0.92 });
  };

  const onMouseUp = e => {
    e.preventDefault();
    setScale({ scale: 1 });
  };

  return (
    <CheckboxOutline
      style={{
        transform: scale.interpolate(scale => `scale(${scale})`)
      }}
      onMouseDown={onMouseDown}
      onTouchStart={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchEnd={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      {active && <CheckboxInner />}
    </CheckboxOutline>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool, //initial state
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  checked: false,
  onChange: () => {}
};

export default Checkbox;
