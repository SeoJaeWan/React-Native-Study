import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import Styled from 'styled-components/native';

import {TodoListContext} from '~/Context/TodoListContext';

import EmptyItem from './EmptyItem';
import TodoItem from './TodoItem';

const Container = Styled(FlatList)`
padding-top: 10px;

`;

interface Props {}

const TodoList = ({}: Props) => {
  const {todoList, removeTodoList} = useContext<ITodoListContext>(
    TodoListContext,
  );
  return (
    <Container
      data={todoList}
      keyExtractor={(item, index) => {
        return `todo-${index}`;
      }}
      ListEmptyComponent={<EmptyItem />}
      renderItem={({item, index}) => (
        <TodoItem
          text={item as string}
          onDelete={() => removeTodoList(index)}
        />
      )}
      contentContainerStyle={todoList.length === 0 && {flex: 1}}
    />
  );
};

// data : 리스트 뷰에 표시할 데이터의 배열
// keyExtractor : 리액트에 반복적으로 동일한 컴포넌트를 표시하기 위해서 키값 설정
//                리액트는 이 킥밧을 보고 컴포넌트를 구별한다.
//                react에서 map에서 key를 설정하는 것과 같은 논리라고 생각하면 될듯
// ListEmptyComponent : 주어진 배열에 데이터가 없을 경우 표시되는 컴포넌트
// renderItem : 주어진 배열에 데이터를 사용하여 반복적으로 표시될 컴포넌트
// contentContainerStyle={todoList.length === 0 && {flex: 1}} : 표시할 데이터가 없는 경우, ListEmptyComponent가 출력되는데,
//                                                              이 컴포넌트도 하나의 리스트 아이템으로 표시되기 때문에, 전체화면으로 표시되지 않는다.
//                                                              그래서 length가 0인 경우 flex :1 을 설정

export default TodoList;
