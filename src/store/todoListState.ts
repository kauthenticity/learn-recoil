import {atom} from 'recoil';
import type {TTodo} from '../types/todo.type';

export const todoListState = atom<TTodo[]>({
    key: 'todoListState',
    default: [],
});
