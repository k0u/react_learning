import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    const newCompleteTodo = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newTodos);
    setCompleteTodos(newCompleteTodo);
  };

  const onCLickBack = (index) => {
    const newCompleteTodo = [...completeTodos];
    newCompleteTodo.splice(index, 1);

    const newTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newTodos);
    setCompleteTodos(newCompleteTodo);
  };

  return (
    <>
    <InputTodo 
      todoText={todoText} 
      onChange={onChangeTodoText} 
      onClick={onClickAdd}
      disabled ={incompleteTodos.length >= 5}/>
      {incompleteTodos.length >= 5 && <p style={{color: 'white',background:'red', borderRadius:'4px'}}>登録できるTODは5つまで!</p>}
    
    <IncompleteTodos 
    todos={incompleteTodos} 
    onClickComplete={onClickComplete}
    onClickDelete={onClickDelete}/>
    
    <CompleteTodos 
    todos={completeTodos}
    onCLickBack={onCLickBack}/>
      
    </>
  );
};
