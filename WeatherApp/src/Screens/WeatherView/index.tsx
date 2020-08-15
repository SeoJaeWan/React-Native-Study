import React, {useState, useEffect} from 'react';
import {FlatList, Alert, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #eee;
`;

const WeatherContainer = styled(FlatList)``;
const LoadingView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Loading = styled.ActivityIndicator`
  margin-bottom: 16px;
`;
const LoadingLabel = styled.Text`
  font-size: 16px;
`;
const WeatherItemContainer = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Weather = styled.Text`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: bold;
`;
const Temperature = styled.Text`
  font-size: 16px;
`;

interface Props {}
interface IWeather {
  temperature?: number;
  weather?: string;
  isLoading: boolean;
}

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

const WeatherView = ({}: Props) => {
  const [weatherInfo, setWeatherInfo] = useState<IWeather>({
    temperature: undefined,
    weather: undefined,
    isLoading: false,
  });

  const getCurrentWeather = () => {
    setWeatherInfo({
      isLoading: false,
    });
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(process.env.REACT_APP_API_KEY);
        const {latitude, longitude} = position.coords;
        console.log(latitude, longitude);
        let getUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude.toFixed(
          1,
        )}&lon=${longitude.toFixed(1)}&APPID=ae8b2c972c9d1865c07e2e0d4461164e`;
        console.log(getUrl);
        fetch(getUrl)
          .then((response) => {
            console.log(response);
            return response.json();
          })
          .then((json) => {
            console.log(json);
            setWeatherInfo({
              temperature: json.main.temp,
              weather: json.weather[0].main,
              isLoading: true,
            });
          })
          .catch((error) => {
            console.log(error);
            setWeatherInfo({
              isLoading: true,
            });
            showError('날씨 정보를 받아오지 못했습니다.');
          });
      },
      (error) => {
        console.log(error);
        setWeatherInfo({
          isLoading: true,
        });
        showError('위치 정보를 받아오지 못했습니다.');
      },
    );
  };

  const showError = (message: string): void => {
    setTimeout(() => {
      Alert.alert(message);
    }, 500);
  };

  useEffect(() => {
    requestLocationPermission();
    getCurrentWeather();
  }, []);

  let data = [];
  const {isLoading, weather, temperature} = weatherInfo;
  if (weather && temperature) {
    data.push(weatherInfo);
  }

  return (
    <Container>
      <WeatherContainer
        onRefresh={() => getCurrentWeather()}
        refreshing={!isLoading}
        data={data}
        keyExtractor={(item, index) => {
          return `Weather-${index}`;
        }}
        ListEmptyComponent={
          <LoadingView>
            <Loading size="large" color="#1976D2" />
            <LoadingLabel>Loading ...</LoadingLabel>
          </LoadingView>
        }
        renderItem={({item, index}) => (
          <WeatherItemContainer>
            <Weather>{(item as IWeather).weather}</Weather>
            <Temperature>({(item as IWeather).temperature}°C)</Temperature>
          </WeatherItemContainer>
        )}
        contentContainerStyle={{flex: 1}}
      />
    </Container>
  );
};
export default WeatherView;
