import React from 'react';
import {useRecoilState} from 'recoil';
import {todoListState} from '../store/todoListState';
import {TTodo} from '../types/todo.type';
import {replaceItemAtIndex, removeItemAtIndex} from '../utils/todoUtils';

type TTodoItemProps = {
    todo: TTodo;
};

export const TodoItem = ({todo}: TTodoItemProps) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((todoItem) => todoItem === todo);

    const toggleTodoCompletion = () => {
        const newTodoList = replaceItemAtIndex(todoList, index, {
            ...todo,
            isCompleted: !todo.isCompleted,
        });

        setTodoList(newTodoList);
    };

    const removeTodo = () => {
        const newTodoList = removeItemAtIndex(todoList, index);
        setTodoList(newTodoList);
    };

    return (
        <li>
            <input type="text" value={todo.text} />
            <input
                type="checkbox"
                checked={todo.isCompleted}
                onClick={toggleTodoCompletion}
            />
            <button onClick={removeTodo}>삭제</button>
        </li>
    );
};
