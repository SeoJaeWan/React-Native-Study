import React from 'react';
import Styled from 'styled-components/native';

import Background from './Background';
import TextInput from './TextInput';

const Container = Styled.KeyboardAvoidingView`
    position : absolute;

    top:0;
    bottom : 0;
    left: 0;
    right : 0;

    justify-content : flex-end;
`;

interface Props {
  hideTodoInput: () => void;
}

// Backgorund 컴포넌트를 선택했을 때, 텍스트 입력이 완료되었을 때, 호출하여 컴포넌트를 숨긴다.
const TodoInput = ({hideTodoInput}: Props) => {
  return (
    <Container>
      {/* 할 일 입력 컴포넌트는 화면을 어둡게 처리할 Background 컴포넌트, 할 일 텍스트를 입력받을 TextInput 컴포넌트 */}
      <Background onPress={hideTodoInput} />
      <TextInput hideTodoInput={hideTodoInput} />
    </Container>
  );
};

export default TodoInput;
