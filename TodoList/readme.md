# TodoList!!

counter App에서 props와 state를 사용해서 데이터를 다뤘다.
하지만 위 2개는 부모 컴포넌트에서 자식 컴포넌트, 즉 위에서 아래로 데이터가 흐른다.

만약 다른 데이터 흐름에서 한쪽 방향으로 흐르고 있는 데이터를 사용하고 싶다면??

공통 부모 컴포넌트에서부터 데이터가 흘러가게 해야할까?? 물논 그래도 된다.
하지만 너무 비효율적이다.

## Context API

그래서 나온게 리액트에서 Flux라는 개념을 도입한 Context API를 제공하였다!
※ Flux ?? https://www.notion.so/seojaewan/Flux-c8d5709390c745ea80d2f8d3a7f1cd8b

Context는 부모 컴포넌트로부터 자식 컴포넌트로 전달되는 흐름과 상관없이, 전역적으로 사용되는 데이터를 다룬다.
전역 데이터를 Context에 저장한 후, 필요한 컴포넌트에서 해당 데이터를 불러와 사용한다.

Context를 사용하기 위해선 Context API를 사용하여 Context의 프로바이더(Provider)와 컨슈머(Consumer)를 생성한다.

Context에 저장된 데이터를 사용하기 위해서는 공통 부모 컴포넌트에 Context의 프로바이더를 사용하여 데이터를 제공한다.
데이터를 사용하려는 컴포넌트에서 Context의 컨슈머를 사용하여 실제 데이터를 사용한다.

## AsyncStorage

리액트에서 데이터를 다루는 Props와 State, Context는 휘발성이다. 이 데이터는 메모리에서만 존재하며, 물리적으로 데이터를 저장하진 않는다.
하지만 데이터들은 API를 통해 서버에 저장하여 사용하거나, 앱 내에서 저장하여 사용하는 경우가 많다.

AsyncStorage는 앱 내에서 간단하게 데이터를 저장할 수 있는 저장소이다.
웹에서 사용하는 windows.localStorage와 매우 유사하다. AsyncStorage는 키 값( key - value ) 저장소로서 간단하게 앱 내에 저장하기 위해 사용할 수 있다.

AsyncStorage를 사용하기 위해선 커뮤니티 라이브러리인 react-native-community/react-native-async-storage 를 사용한다.

src/Context/TodoListContext/@types/index.d.ts

Props의 타입을 정의할 때와 같이 한 파일에서 타입을 정의하면 해당 파일 안에서만 타입을 사용할 수 있다.
하지만 @types/index.d.ts 파일을 만들고 해당 파일 안에 타입을 정의하면 프로젝트 전반에 걸쳐 타입을 사용할 수 있다.

## 배운 것

TouchableWithoutFeedback : 자식 뷰로 구성하게 되면, 키보드가 보여지는 상태에서 빈 공강 또는 자식 뷰를 터치하면 닫히도록 동작
TouchableWithoutFeedback는 자식 뷰를 1개만 가질 수 있으므로 전체 공간을 채우는 뷰를 추가한다.

### Input

autoCapitalize : TextInput의 특정 문자를 자동으로 대문자로 표시할 수 있도록 한다.
=> characters : 모든 문자, words : 각 단어의 첫 글자, sentences : 각 문장의 첫 글자(가본 값), none : 아무것도 자동으로 대문자화 시키지 않는다.
autoCompleteType : 자동 완성 기능을 제공
autoCorrect : 자동 수정을 비활성화시긴다. 기본값은 true
autoFocus : 입력에 초점을 맞춘다. 기본값은 false
returnKeyType : 리턴 키의 모양을 결정한다.
onSubmitEditing : 키보드의 "완료" 버튼을 눌렀을 시 호출되는 함수

### FlatList

data : 리스트 뷰에 표시할 데이터의 배열
keyExtractor : 리액트에 반복적으로 동일한 컴포넌트를 표시하기 위해서 키값 설정
=> 리액트는 이 킥밧을 보고 컴포넌트를 구별한다.
=> react에서 map에서 key를 설정하는 것과 같은 논리라고 생각하면 될듯
ListEmptyComponent : 주어진 배열에 데이터가 없을 경우 표시되는 컴포넌트
renderItem : 주어진 배열에 데이터를 사용하여 반복적으로 표시될 컴포넌트
contentContainerStyle={todoList.length === 0 && {flex: 1}} : 표시할 데이터가 없는 경우, ListEmptyComponent가 출력되는데,
=> 이 컴포넌트도 하나의 리스트 아이템으로 표시되기 때문에, 전체화면으로 표시되지 않는다.
=> 그래서 length가 0인 경우 flex :1 을 설정
