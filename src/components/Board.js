import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; // import 해주세요.
import { addTodo } from "../redux/modules/todos";
import { deleteTodo } from "../redux/modules/todos";
import { doneTodo } from "../redux/modules/todos";
import Card from "./Card";
import styled from "styled-components";

const Board = () => {
  //입력 폼 만들기
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  // console.log(todos); // 스토어에서 state 받아오는지 확인
  const dispatch = useDispatch();

  const addtodo = (e) => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      body: body,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    // console.log(todos);
    setTitle("");
    setBody("");
    // console.log(newTodo);
  };
  const deletetodo = (id) => {
    dispatch(deleteTodo(id));
  };
  const donetodo = (id) => {
    dispatch(doneTodo(id));
  };

  return (
    //입력 폼 만들기
    <div>
      <StAddForm>
        <StInputGroup>
          {/* 투두 제목 입력 */}
          <StFormLabel>제목</StFormLabel>
          <StAddInput
            className="textbox"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></StAddInput>
          {/* 투두 내용 입력 */}
          <StFormLabel>내용</StFormLabel>
          <StAddInput
            className="textbox"
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></StAddInput>
        </StInputGroup>
        {/* 투두 등록 버튼 */}
        <StAddButton onClick={addtodo}>추가하기</StAddButton>
      </StAddForm>
      {/* 투두 카드 붙느 곳 */}
      <StListContainer>
        <h2>🤔 Ing... 🤔</h2>
        <StListWrapper>
          {/* 투두스의 리스트를 배열로 재정리 */}
          {todos.map((todo) => {
            if (!todo.isDone) {
              return (
                <Card
                  todo={todo}
                  key={todo.id}
                  deleteTodo={deletetodo}
                  doneTodo={donetodo}
                ></Card>
              );
            } else {
              return null;
            }
          })}
        </StListWrapper>
        <h2>🥳 done!!! 🥳</h2>
        <StListWrapper>
          {todos.map((todo) => {
            if (todo.isDone) {
              return (
                <Card
                  todo={todo}
                  key={todo.id}
                  deleteTodo={deletetodo}
                  doneTodo={donetodo}
                ></Card>
              );
            } else {
              return null;
            }
          })}
        </StListWrapper>
      </StListContainer>
    </div>
  );
};

export default Board;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;

const StListContainer = styled.div`
  padding: 0 24px;
`;

const StListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
