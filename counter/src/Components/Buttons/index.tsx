import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity``;
const Icon = Styled.Image``;

//  Button 컴포넌트는 iconName과 onPress 라는 두 가지 Props를 가지고 있다.
//  Props는 현재 만들고 있는 Button 컴포넌트에서 값을 지정하여 사용하는 것이 아니라, Button 컴포넌트를 불러와 사용하는 부분에서 값을 지정하여 사용한다.

//  타입 스크립트를 사용하여 컴포넌트의 Props 타입을 지정함으로, 타입에 대한 버그와 에러를 줄이고, 이 컴포넌트를 사용하는 곳에서 정확하게 파악이 가능!
interface Props {
  // iconName은 필수항목이기 때문에 : 로 나타낸다.
  // onPress는 필수항목은 아니기 떄문에 ?:로 나타낸다.
  iconName: 'plus' | 'minus';
  onPress?: () => void;
}

const Button = ({iconName, onPress}: Props) => {
  return (
    <Container onPress={onPress}>
      {/* 
            이미지를 구현할 때 HTML의 Image 태그가 아닌 require를 사용하여 구현한다.
            기본 사이즈로 선언하고 이외에 2x,3x 크기의 이미지를 가지고 있다면, 리액트 네이티브는 해당 단말기 화면에 맞게
            자동으로 불러와준다!
        */}
      <Icon
        source={
          iconName === 'plus'
            ? require('~/Assets/Images/add.png')
            : require('~/Assets/Images/remove.png')
        }
      />
    </Container>
  );
};

export default Button;
