import React from 'react';
import {RecoilRoot} from 'recoil';
import {TodoList} from './components/TodoList';
import {AddTodoItem} from './components/AddTodoItem';
import {TodoFilters} from './components/TodoFilters';

function App() {
    return (
        <RecoilRoot>
            <TodoFilters />
            <AddTodoItem />
            <TodoList />
        </RecoilRoot>
    );
}

export default App;
