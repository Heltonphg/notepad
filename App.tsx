import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NotesProvider, useNotes } from './src/hooks/notes';
import 'moment/locale/pt-br';

import {
	useFonts,
	BalooBhai2_400Regular,
	BalooBhai2_500Medium,
	BalooBhai2_600SemiBold,
	BalooBhai2_700Bold,
} from '@expo-google-fonts/baloo-bhai-2';

import theme from './src/global/styles/theme';
import { ActivityIndicator } from 'react-native';
import AppRoutes from './src/routes/app.routes';

export default function App() {
	const [fontsLoaded] = useFonts({
		BalooBhai2_400Regular,
		BalooBhai2_500Medium,
		BalooBhai2_600SemiBold,
		BalooBhai2_700Bold,
	});

	const { isLoading } = useNotes();

	if (!fontsLoaded || isLoading) {
		return <ActivityIndicator />;
	}

	return (
		<ThemeProvider theme={theme}>
			<StatusBar
				animated={true}
				barStyle={'dark-content'}
				backgroundColor={'white'}
			/>
			<SafeAreaView
				style={{
					flex: 1,
					backgroundColor: theme.colors.background,
					paddingTop: theme.metrics.base_top,
				}}>
				<NotesProvider>
					<NavigationContainer>
						<AppRoutes />
					</NavigationContainer>
				</NotesProvider>
			</SafeAreaView>
		</ThemeProvider>
	);
}
