import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = (props) => {
  return (
    <div>
      <StTodoContainer key={props.todo.id}>
        <StLink to={`/${props.todo.id}`} key={props.todo.id}>
          <div>상세보기</div>
        </StLink>
        <div>
          <h2>{props.todo.title}</h2>
          <div>{props.todo.body}</div>
        </div>
        <StDialogFooter>
          <StButton
            borderColor="red"
            onClick={() => {
              props.deleteTodo(props.todo.id);
            }}
          >
            삭제하기
          </StButton>
          <StButton
            borderColor="green"
            onClick={() => {
              props.doneTodo(props.todo.id);
            }}
          >
            {props.todo.isDone ? "취소" : "완료"}
          </StButton>
        </StDialogFooter>
      </StTodoContainer>
    </div>
  );
};

export default Card;

const StTodoContainer = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
`;

const StLink = styled(Link)`
  text-decoration: none;
`;

const StDialogFooter = styled.footer`
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
