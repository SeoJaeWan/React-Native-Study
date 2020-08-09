import React from 'react';
import Styled from 'styled-components/native';

// TouchableWithoutFeedback : 자식 뷰로 구성하게 되면, 키보드가 보여지는 상태에서 빈 공강 또는 자식 뷰를 터치하면 닫히도록 동작
// TouchableWithoutFeedback는 자식 뷰를 1개만 가질 수 있으므로 전체 공간을 채우는 뷰를 추가한다.
const Container = Styled.TouchableWithoutFeedback`
    position : absolute;

    top: 0;
    bottom: 0;
    left : 0;
    right : 0;
`;

const BlackBackground = Styled.View`
    background-color: #000;

    opacity: 0.3;

    width: 100%;
    height: 100%;
`;

interface Props {
  onPress: () => void;
}
//해당 뷰 컴포넌트를 클릭하면 컴포넌트를 숨기도록 설정
const Background = ({onPress}: Props) => {
  return (
    <Container onPress={onPress}>
      <BlackBackground />
    </Container>
  );
};

export default Background;
