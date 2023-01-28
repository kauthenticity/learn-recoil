import React from 'react';
import {useRecoilValue} from 'recoil';
import {filteredTodoListState} from '../store/filteredTodoListState';
import {TodoItem} from './TodoItem';

export const TodoList = () => {
    const todoList = useRecoilValue(filteredTodoListState);
    return (
        <div>
            <ul>
                {todoList.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
};
