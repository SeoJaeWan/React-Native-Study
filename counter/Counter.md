#Counter!!

commit에도 적었지만 따로 md 파일로 진행과정을 적는것도 ㄱㅊ을거 같당!

아직 타입스크립트에 대해 어색하긴 하지만
Props를 interface를 통해 지정해주고 사용하여 지정해둔 상태값외에 값이 들어오면 에러를 발생시키는 부분 자체는 새롭다!
새로워 짜릿해 최고야!
그 외에 useState를 사용한다던가 이런부분은 React를 통해 이미 알기때문에 생략!
이미지 넣을때 HTML의 img 태그가 아니며 require로 호출하며(Buttons 컴포넌트) 또 파일명@2x.png 등등 @nx 형식을 붙이면 화면 크기에 따라 맞춰 표현해준다는 것도 처음알았다!

아이콘을 불러올때 Materal Design에서 가져오는건 머 혹시모르니??

또 react-native는 flex를 신기하게 사용하는데,

flex는 부모의 View 크기의 특정 비율만큼 차지하게 된다.

flex:1인 컨테이너 뷰는 화면 전체를 1의 비율만큼 가지게 된다.
만약 2개의 컨테이너가 있는데 각각 flex :1을 가지면 1:1 비율로 가져간다.
만약 3개의 컨테이너가 있고 flex를 1: 2 : 1을 가지면 마찬가지로 1 : 2 : 1의 비율을 가진다!