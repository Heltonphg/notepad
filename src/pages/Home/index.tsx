import React from 'react';
import { Avatar, Container, Header, Profile, Title } from './styles';
import * as Location from 'expo-location';

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
			<Header>
				<Title>Olá,{'\n'}Seja Bem-Vindo!</Title>
				<Profile>
					<Avatar source={require('../../assets/celebrite.png')} />
				</Profile>
			</Header>
		</Container>
	);
};

export default Home;
