//리덕스에는 모듈에 사용할수 있는 state 초기값이 모인다.
const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const DONE_TODO = "todos/DONE_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};
export const doneTodo = (id) => {
  return {
    type: DONE_TODO,
    id,
  };
};

// 1. 이니셜 스테이트 만들기
const initialState = {
  todos: [
    {
      id: 1,
      title: "react를 배워봅시다.",
      body: "리액트 사용해보기",
      isDone: false,
    },
    {
      id: 2,
      title: "redux를 배워봅시다.",
      body: "리덕스 사용해보기",
      isDone: true,
    },
  ],
};

// 2.리듀서 만들기
const todos = (state = initialState, action) => {
  console.log(action);
  // 5. 리듀서에서 명령 추가하기
  switch (action.type) {
    case ADD_TODO:
      // console.log("hi");
      return { ...state, todos: [...state.todos, action.payload] };

    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => {
          return todo.id !== action.id;
        }),
      };
    case DONE_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    default:
      return state;
  }
};

// 3.임포트 하기
export default todos;
