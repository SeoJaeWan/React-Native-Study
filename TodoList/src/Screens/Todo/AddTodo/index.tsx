import React, {useState} from 'react';

import AddButton from './AddButton';
import TodoInput from './TodoInput';

interface Props {}

const AddTodo = ({}: Props) => {
  // 할 일 추가 버튼을 눌렀을 떄, 할 일을 입력하는 컴포넌트를 화면에 표시
  const [showInput, setShowInput] = useState<boolean>(false);

  return (
    <>
      {/* 할일 추가 버튼을 눌렀을 때, 할 일을 입력하는 컴포넌트를 화면에 표시 */}
      <AddButton onPress={() => setShowInput(true)} />

      {/* 할 일을 입력하는 컴포넌트에서 할 일 입력을 완료하면, 해당 컴포넌트를 숨김 */}
      {showInput && <TodoInput hideTodoInput={() => setShowInput(false)} />}
    </>
  );
};

export default AddTodo;
