import React, { useState, useEffect } from "react";
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
`;

const CheckboxInner = styled.span`
  height: 14px;
  width: 14px;
  background: ${props => props.theme.accentSecondary};
  display: inline-block;
  border-radius: 2px;
  margin: 2px;
`;

const Checkbox = ({ onCheck, onUncheck, onChange, checked, forceChecked }) => {
  const [active, setActive] = useState(forceChecked || checked || false);
  const [{ scale }, setScale] = useSpring(() => ({
    scale: 1,
    config: { mass: 1, tension: 400, friction: 14 }
  }));

  const onMouseDown = e => {
    e.preventDefault();
    if (!forceChecked) {
      onChange(!active);
      if (!active) {
        onCheck();
      } else {
        onUncheck();
      }
      setActive(!active);
    }
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
  forceChecked: PropTypes.bool, //force state
  onCheck: PropTypes.func,
  onUncheck: PropTypes.func,
  onUncheck: PropTypes.func,
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  checked: false,
  forceChecked: false,
  onCheck: () => {},
  onUncheck: () => {},
  onChange: () => {}
};

export default Checkbox;
