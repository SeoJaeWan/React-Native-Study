# Movie App

## 기능

### 앱 아이콘

앱 아이콘을 생성하기 위해선 react-native-make라는 라이브러리를 사용한다!
옛날엔 generator-rn-toolbox를 사용하였지만 현재, Deprecated 되었다고 한다.

또한 필요한게 1024 \* 1024 사이즈의 img 파일이다.

<code>npm install --save-dev @bam.tech/react-native-make</code> 명령어를 사용하여 react-native-make를 설치하고,

콘솔창에서
react-native set-icon --path [path-to-image] --background ["color"] 이렇게 사용하면 icon이 android와 ios 폴더에 저장된다.
ex) react-native set-icon --path ./src/Assets/Images/app_icon.png --background "#000000"

### 앱 스플래시 스크린 이미지

react-native-make를 통해서 스플래시 스크린 이미지를 만들 수 있다.
스플래시 스크린 이미지를 생성하기 위해서는 3000 \* 3000 이상의 사이즈 img 파일이 필요하다.

react-native set-splash --path [path-to-image] --resize center --background ["color"]
ex) react-native set-splash --path ./src/Assets/Images/app_splash.png --resize center --background "#000000"

앱 아이콘과 앱 스플래시 스크린을 만드는 방법은
https://dev-yakuza.github.io/ko/react-native/react-native-make/#react-native-splash-screen를 참고!

### 앱 스플래시 스크린 이미지 적용!

react-native-make 툴을 이용해서 스플래시 이미지와 아이콘을 만들고 부드러운 방식으로 스프래드 스크린을 나오게 하자!
따로 설정하지 않으면, Splash 스크린이 빨리 종료되어 버린다.

이를 커스텀하기 위해서는 react-native-splash-screen 라이브러리를 사용한다.
<code>npm install --save react-native-splash-screen</code>

react-native-splash-screen을 사용하려면 크게 네이티브(Native) 부분과 JS부분에 소스를 추가해줘야 한다.
네이티브(Native) 부분은 안드로이드, iOS에서 Splash 스크린을 실행시키기 위한 부분이고, JS 부분은 네이티브(Native)에서 실행한 Splash 스크린을 종료시키기 위한 처리이다.

#### 안드로이드

안드로이드에서 react-native-splash-screen을 사용하기 위해서 android/app/src/main/java/com/movieapp/MainActivity.java를 열고 수정을 한다.

```
package com.movieapp;

import android.os.Bundle;                                // <-
import org.devio.rn.splashscreen.SplashScreen;           // <-
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this, R.style.SplashScreenTheme);
        super.onCreate(savedInstanceState);
    }
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "MovieApp";
  }
}

```

또한 안드로이드에서 사용할 Splash 스크린을 생성해야 한다.

android/app/src/main/res/layout/launch_screen.xml 파일을 수정한다.

```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical" android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@drawable/launch_screen">
</LinearLayout>
```

#### iOS

아래 링크를 보고 필요할 때 공부하자!

#### JS

위에 설정한 Splash 스크린을 종료시키기 위해서 코드를 추가한다.

```
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
...
const WelcomePage = () => {
  ...
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  ...
}
```

<code>SplashScreen.hide()</code> 를 사용하면 원하는 시점에 Splash 스크린을 종료시킬 수 있다.

https://dev-yakuza.github.io/ko/react-native/react-native-make/#react-native-splash-screen
