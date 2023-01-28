import {selector} from 'recoil';
import {todoListState} from './todoListState';
import {todoListFilterState} from './todoListFilterState';

export const filteredTodoListState = selector({
    key: 'filteredTodoList',
    get: ({get}) => {
        const filter = get(todoListFilterState);
        const todoList = get(todoListState);

        switch (filter) {
            case 'ShowAll':
                return todoList;
            case 'ShowCompleted':
                return todoList.filter((todoItem) => todoItem.isCompleted);
            case 'ShowUncompleted':
                return todoList.filter((todoItem) => !todoItem.isCompleted);
        }
    },
});
