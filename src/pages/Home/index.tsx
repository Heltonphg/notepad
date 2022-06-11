import React, { useEffect } from 'react';
import { Container } from './styles';
import * as Location from 'expo-location';

const Home: React.FC = () => {
	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== 'granted') {
				return;
			}

			let location = await Location.getCurrentPositionAsync({});
			console.log(location);
		})();
	}, []);

	return <Container></Container>;
};

export default Home;
