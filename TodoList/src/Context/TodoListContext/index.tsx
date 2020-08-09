import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

// createContext로 Context 생성
// useState로 생성한 State를 Context 안에 저장하여 Context의 데이터를 수정할 수 있다.
const TodoListContext = createContext<ITodoListContext>({
  // @types/index.d.ts에 정의한 타입을 사용하여 Context의 데이터 타입을 지정해 주었다.
  todoList: [],
  addTodoList: (todo: string): void => {},
  removeTodoList: (index: number): void => {},
});

const TodoListContextProvider = ({children}: Props) => {
  const [todoList, setTodoList] = useState<Array<string>>([]);

  const addTodoList = (todo: string): void => {
    const list = [...todoList, todo];
    setTodoList(list);

    AsyncStorage.setItem('todoList', JSON.stringify(list));
  };

  const removeTodoList = (index: number): void => {
    let list = [...todoList];
    list.splice(index, 1);
    setTodoList(list);

    AsyncStorage.setItem('todoList', JSON.stringify(list));
  };

  const initData = async () => {
    try {
      const list = await AsyncStorage.getItem('todoList');
      if (list !== null) {
        setTodoList(JSON.parse(list));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <TodoListContext.Provider
      value={{
        todoList,
        addTodoList,
        removeTodoList,
      }}>
      {children}
    </TodoListContext.Provider>
  );
};

export {TodoListContextProvider, TodoListContext};
