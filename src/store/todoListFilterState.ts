import {atom} from 'recoil';
import type {TTodoListFilter} from '../types/todoListFilter.type';

export const todoListFilterState = atom<TTodoListFilter>({
    key: 'todoListFilterState',
    default: 'ShowAll',
});
