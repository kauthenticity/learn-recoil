import React from 'react';
import {useRecoilState} from 'recoil';
import {todoListFilterState} from '../store/todoListFilterState';
import type {TTodoListFilter} from '../types/todoListFilter.type';

export const TodoFilters = () => {
    const [todoListFilter, setTodoListFilter] =
        useRecoilState(todoListFilterState);

    const onChangeFilter = ({
        target: {value},
    }: React.ChangeEvent<HTMLSelectElement>) => {
        setTodoListFilter(value as TTodoListFilter);
    };
    return (
        <select value={todoListFilter} onChange={onChangeFilter}>
            <option value="ShowAll">전부 보기</option>
            <option value="ShowCompleted">완료된 것만 보기</option>
            <option value="ShowUncompleted">완료되지 않은 것만 보기</option>
        </select>
    );
};
