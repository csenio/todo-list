import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Checkbox, Text, Input } from ".";

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

function ListItem({ checked, onChange, children, input }) {
  const [active, setActive] = useState(checked);

  function handleChange(value) {
    onChange(value);
    setActive(value);
  }

  console.log("children", children);

  return (
    <ListItemContainer>
      <Checkbox onChange={handleChange} checked={checked} />
      {input ? (
        <Input />
      ) : (
        <Text secondary={active} strikethrough={active} as="span">
          {children}
        </Text>
      )}
    </ListItemContainer>
  );
}

ListItem.propTypes = {
  checked: PropTypes.bool,
  input: PropTypes.bool,
  children: PropTypes.node,
  onChange: PropTypes.func
};

ListItem.defaultProps = {
  checked: false,
  children: "",
  onChange: () => {}
};

export default ListItem;
