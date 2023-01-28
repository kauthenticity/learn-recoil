import React, {useState} from 'react';
import {useSetRecoilState} from 'recoil';
import {todoListState} from '../store/todoListState';
import {getId} from '../utils/todoUtils';

export const AddTodoItem = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const setTodoList = useSetRecoilState(todoListState);

    const onChangeInput = ({
        target: {value},
    }: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(value);
    };

    const onClickAddButton = () => {
        if (inputValue === '') return;

        setTodoList((prev) => [
            ...prev,
            {
                id: getId(),
                text: inputValue,
                isCompleted: false,
            },
        ]);
        setInputValue('');
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={onChangeInput} />
            <button onClick={onClickAddButton}>추가</button>
        </div>
    );
};
