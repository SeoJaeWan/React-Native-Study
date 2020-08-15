# Weather App!!

리액트 네이티브에서 위치 정보 기능과 Fetch API, Weather API를 사용하여 날씨 앱을 만들어 보자!

## Weather APU

Fetch API를 사용하여 앱 외부에 있는 날씨 데이터를 가져오기 위해선 날씨 정보를 가지고 있는 API가 필요하다!

이번엔 OpenWeather에서 무료로 제공하는 날씨 API를 사용할 예정이닼!

※ OpenWether : https://openweathermap.org/api

### Fetch ??

자바스크립트에서 비동기 요청을 처리하기 위해서 사용한다!

```
    fetch(URL, DATA)
    .then(function(response) {
        return response.json();
    })
    .then(function(json){
        ...
    })
```

기본적으로 Fetch API는 위와 같이 Promise 기반으로 작성한다.
리액트 네이티브도 자바스크립트이므로, 비동기 요청을 처리하기 위해 Fetch API를 사용할 수 있다.

## 위치 정보

위치 정보는 react-native-geolocation-service 라이브러리를 사용하여 위치 정보를 습득할 예정이다!!

※ npm install -save react-native-geolocation-service

리액트 네이티브에서 위치 정보 API는 웹의 위치 정보 API 스펙을 확장하여 사용한다.
그렇기 떄문에 웹에서 사용하는 API를 그대로 사용할 수 있다.

react-native-geolocation-service 외에 안드로이드 부분은 android.location.API를 사용할 수 있다. 하지만 이 API는 정확도가 떨어져 사용하길 권장하지 않는다.

ios와 android에서 위치 정보를 사용하기 위해서 사용자 권한(Permission) 설정이 필요한데, ios는 내가 확인을 못하니 ㅠㅠ
android만 설정하겠다.

./android/app/src/main/AndroidManifest.xml 파일을 열고

```
    <manifest xmlns:android="http://schemas.android.com/apk/res/android"
  package="com.weatherapp">

    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />  <- 이친구를 추가!

    ...

</manifest>

```

위와 같이 `<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />` 입력하면 사용할 것이라는 것을 명시하는 것이며,
요청은

```
...
import {PermissionsAndroid} from 'react-native';

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('dsaasdsda', granted);
      console.log('You can use the location');
    } else {
      console.log('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};
...
```

여기와 같이 추가로 해줘야 한다.

책에선 안적어준.... ㅠㅠ;; 하루종일 찾아다녔다...
