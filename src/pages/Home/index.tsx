import React from 'react';
import { Container } from './styles';
import * as Location from 'expo-location';
import { Text } from 'react-native';

const Home: React.FC = () => {
	async function handleGetLocation() {
		let { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== 'granted') {
			return;
		}
		return await Location.getCurrentPositionAsync({});
	}

	return (
		<Container>
			<Text>Home</Text>
		</Container>
	);
};

export default Home;
