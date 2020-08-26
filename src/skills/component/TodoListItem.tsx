import React from 'react';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import { MdFavorite, MdFavoriteBorder, MdDelete } from 'react-icons/md';

function TodoListItem({
  task,
  onDelete,
  onFinish,
  done,
}: {
  task: string;
  onDelete: () => void;
  onFinish: () => void;
  done: boolean;
}) {
  return (
    <li style={{ position: 'relative' }}>
      <Paper variant="outlined">
        <Paragraph done={done}>{task}</Paragraph>
        <Delete onClick={onDelete}>
          <MdDelete />
        </Delete>
        <Done onClick={onFinish}>{done ? <MdFavorite /> : <MdFavoriteBorder />}</Done>
      </Paper>
    </li>
  );
}

const Paragraph = styled.p<{ done: boolean }>`
  width: 330px;
  white-space: normal;
  overflow-wrap: break-word;
  font-size: 1rem;
  padding: 20px;
  text-decoration: ${(props) => (props.done ? 'line-through' : 'none')};
`;

const Delete = styled.span`
  display: block;
  position: absolute;
  top: 0;
  right: 0px;
  cursor: pointer;
  font-size: 1.6rem;
  color: purple;
  &:hover {
    opacity: 0.4;
  }
  &:active {
    opacity: 0.8;
  }
`;
const Done = styled.span`
  display: block;
  position: absolute;
  top: 0;
  left: 12px;
  cursor: pointer;
  font-size: 1.6rem;
  color: purple;
  &:hover {
    opacity: 0.4;
  }
  &:active {
    opacity: 0.8;
  }
`;

export default TodoListItem;
