import type {TTodo} from '../types/todo.type';

let id = 0;

export const getId = () => {
    return id++;
};

export const replaceItemAtIndex = (
    arr: TTodo[],
    index: number,
    newValue: TTodo
) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

export const removeItemAtIndex = (arr: TTodo[], index: number) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
};
