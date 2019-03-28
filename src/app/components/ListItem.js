import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Checkbox, Text, Input } from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.textSecondary};
  margin-left: auto;
  cursor: pointer;
  &:hover,
  &:active {
    color: ${({ theme, warning }) =>
      warning ? theme.warning : theme.accentPrimary};
  }
`;

function ListItem({ checked, onChange, children, input, removeItem }) {
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
      {active && removeItem && (
        <Icon warning icon={faTrashAlt} onClick={removeItem} />
      )}
    </ListItemContainer>
  );
}

ListItem.propTypes = {
  checked: PropTypes.bool,
  input: PropTypes.bool,
  children: PropTypes.node,
  onChange: PropTypes.func,
  removeItem: PropTypes.func
};

ListItem.defaultProps = {
  checked: false,
  children: "",
  onChange: () => {}
};

export default ListItem;
