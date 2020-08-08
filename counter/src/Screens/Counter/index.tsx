import React, {useState} from 'react';
import Styled from 'styled-components/native';
import Button from '~/Components/Buttons';

const Container = Styled.SafeAreaView`
    flex: 1;
`;

const TitleContainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const TitleLabel = Styled.Text`
    font-size: 24px;
`;

const CountContainer = Styled.View`
    flex: 2;
    justify-content: center;
    align-items: center;
`;
const CountLabel = Styled.Text`
    font-size: 24px;
    font-weight: bold;
`;

const ButtonContainer = Styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

// 필수 Props인 initValue와 title을 가지고 있다.
interface Props {
  title?: string;
  initValue: number;
}

const Counter = ({title, initValue}: Props) => {
  // 카운트를 변경하기 위해서 useState를 사용하였다.
  // 전달받은 Props인 initValue를 초기값으로 지정한다.
  // 여기서 <number>는 타입스크립트로 타입을 명시한 것이다.
  const [count, setCount] = useState<number>(initValue);

  return (
    <Container>
      {title && (
        <TitleContainer>
          <TitleLabel>{title}</TitleLabel>
        </TitleContainer>
      )}
      <CountContainer>
        <CountLabel>{initValue + count}</CountLabel>
      </CountContainer>

      <ButtonContainer>
        <Button iconName="plus" onPress={() => setCount(count + 1)} />
        <Button iconName="minus" onPress={() => setCount(count - 1)} />
      </ButtonContainer>
    </Container>
  );
};

export default Counter;
