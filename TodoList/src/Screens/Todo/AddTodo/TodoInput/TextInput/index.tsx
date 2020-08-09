import React, {useContext} from 'react';
import Styled from 'styled-components/native';

import {TodoListContext} from '~/Context/TodoListContext';

const Input = Styled.TextInput`
    width: 100%;
    height: 60px;
    background-color: #FFF;

    padding: 0px 8px;

    font-size: 20px;
`;

interface Props {
  hideTodoInput: () => void;
}

const TextInput = ({hideTodoInput}: Props) => {
  const {addTodoList} = useContext<ITodoListContext>(TodoListContext);
  return (
    <Input
      autoFocus={true}
      autoCapitalize="none"
      autoCorrect={false}
      placeholder="할 일을 입력!"
      returnKeyType="done"
      onSubmitEditing={({nativeEvent}) => {
        addTodoList(nativeEvent.text);
        hideTodoInput();
      }}
    />
  );
};

// autoCapitalize : TextInput의 특정 문자를 자동으로 대문자로 표시할 수 있도록 한다.
//                  characters : 모든 문자, words : 각 단어의 첫 글자, sentences : 각 문장의 첫 글자(가본 값), none : 아무것도 자동으로 대문자화 시키지 않는다.
// autoCompleteType : 자동 완성 기능을 제공
// autoCorrect : 자동 수정을 비활성화시긴다. 기본값은 true
// autoFocus : 입력에 초점을 맞춘다. 기본값은 false
// returnKeyType : 리턴 키의 모양을 결정한다.
// onSubmitEditing : 키보드의 "완료" 버튼을 눌렀을 시 호출되는 함수

export default TextInput;
