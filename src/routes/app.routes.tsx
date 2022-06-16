import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Home from '../pages/Home';
import { ms } from 'react-native-size-matters';
import NotepadAdd from '../pages/NotepadAdd';

const { Navigator, Screen } = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
	const theme = useTheme();
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: theme.colors.primary,
				tabBarInactiveTintColor: theme.colors.background_gray,
				tabBarLabelPosition: 'beside-icon',
				tabBarHideOnKeyboard: true,
				tabBarShowLabel: false,
				tabBarStyle: {
					height: ms(50),

					borderTopLeftRadius: ms(20),
					borderTopRightRadius: ms(20),
					paddingBottom: ms(5),
					borderTopColor: 'transparent',
				},
			}}>
			<Screen
				name="Home"
				component={Home}
				options={{
					tabBarLabelPosition: 'below-icon',
					tabBarIcon: ({ size, color }) => (
						<MaterialIcons name="notes" size={size} color={color} />
					),
				}}
			/>

			<Screen
				name="NotepadAdd"
				component={NotepadAdd}
				options={{
					tabBarLabelPosition: 'below-icon',
					tabBarIcon: ({ size, color }) => (
						<MaterialIcons
							name="add-circle"
							size={ms(33)}
							color={theme.colors.primary}
						/>
					),
				}}
			/>
			<Screen
				name="favorite"
				component={Home}
				options={{
					tabBarLabelPosition: 'below-icon',
					tabBarIcon: ({ size, color }) => (
						<MaterialIcons name="favorite-outline" size={size} color={color} />
					),
				}}
			/>
		</Navigator>
	);
};

export default AppRoutes;
