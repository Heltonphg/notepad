import styled from 'styled-components/native';
import theme from '../../global/styles/theme';
import { FlatList, FlatListProps } from 'react-native';

import { NotesProps } from '../../global/interfaces';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
	flex: 1;
	background: ${({ theme }) => theme.colors.background};
	padding: 0 ${({ theme }) => theme.metrics.base_padding}px;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.text_dark};
	font-family: ${({ theme }) => theme.fonts.medium};
	font-size: ${({ theme }) => theme.metrics.normal}px;
`;

export const Header = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Avatar = styled.Image`
	width: ${({ theme }) => theme.metrics.ms(25)}px;
	height: ${({ theme }) => theme.metrics.ms(25)}px;
`;

export const Profile = styled.View`
	width: ${({ theme }) => theme.metrics.ms(35)}px;
	height: ${({ theme }) => theme.metrics.ms(35)}px;
	background: ${({ theme }) => theme.colors.primary};
	border-radius: ${({ theme }) => theme.metrics.base_border_radius}px;
	align-items: center;
	justify-content: center;
`;

export const SearchBar = styled.View`
	flex-direction: row;
	align-items: center;

	width: 100%;
	height: ${({ theme }) => theme.metrics.ms(40)}px;

	border-radius: ${({ theme }) => theme.metrics.base_border_radius}px;
	background: ${({ theme }) => theme.colors.background_light};

	padding: 0 ${({ theme }) => theme.metrics.base_padding}px;
	margin-top: ${({ theme }) => theme.metrics.base_top}px;
`;

export const InputSearch = styled.TextInput.attrs({
	placeholderTextColor: theme.colors.text_gray,
})`
	width: 86%;
	height: 100%;
	margin-left: ${({ theme }) => theme.metrics.ms(8)}px;
	font-size: ${({ theme }) => theme.metrics.small}px;
	color: ${({ theme }) => theme.colors.text_dark};
`;

export const NotePadWrapper = styled.View`
	flex: 1;
	padding-top: ${({ theme }) => theme.metrics.base_top}px;
`;

export const WrapperButton = styled.TouchableOpacity.attrs({
	activeOpacity: 0.8,
})`
	flex: 1;
`;
export const ButtonDelete = styled.TouchableOpacity.attrs({
	activeOpacity: 0.8,
})``;

export const CardNote = styled(Animatable.View)`
	width: 47%;
	border-radius: ${({ theme }) => theme.metrics.base_border_radius}px;
	opacity: 0.3;
	margin-right: 6%;

	padding: ${({ theme }) => theme.metrics.ms(8)}px
		${({ theme }) => theme.metrics.ms(6)}px
		${({ theme }) => theme.metrics.ms(2)}px
		${({ theme }) => theme.metrics.ms(8)}px;
`;

export const NotesList = styled(
	FlatList as new (props: FlatListProps<NotesProps>) => FlatList<NotesProps>,
).attrs({
	showsVerticalScrollIndicator: false,
	contentContainerStyle: { paddingBottom: theme.metrics.base_padding },
})``;

export const TitleNote = styled.Text`
	color: ${({ theme }) => theme.colors.text_dark};
	font-family: ${({ theme }) => theme.fonts.semi_bold};
	font-size: ${({ theme }) => theme.metrics.normal}px;
`;

export const DescriptionNote = styled.Text`
	color: ${({ theme }) => theme.colors.text_dark};
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${({ theme }) => theme.metrics.small}px;
`;

export const Date = styled.Text`
	color: ${({ theme }) => theme.colors.text_dark};
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${({ theme }) => theme.metrics.small}px;
`;
export const WrapperFooter = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
`;

export const TitleHeader = styled.Text`
	color: ${({ theme }) => theme.colors.text_dark};
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: ${({ theme }) => theme.metrics.normal}px;
	margin-bottom: ${({ theme }) => theme.metrics.ms(10)}px;
`;

export const TitleEmpty = styled.Text`
	color: ${({ theme }) => theme.colors.text_dark};
	font-family: ${({ theme }) => theme.fonts.medium};
	font-size: ${({ theme }) => theme.metrics.normal}px;
	margin-bottom: ${({ theme }) => theme.metrics.ms(10)}px;
`;
