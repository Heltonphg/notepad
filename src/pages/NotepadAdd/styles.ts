import styled from 'styled-components/native';
import theme from '../../global/styles/theme';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
	flex: 1;
	background: ${({ theme }) => theme.colors.background};
	padding: 0 ${({ theme }) => theme.metrics.base_padding}px;
`;

export const Header = styled.View`
	width: 100%;
	height: ${({ theme }) => theme.metrics.ms(40)}px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const WrapperPad = styled.View`
	flex: 1;
	padding-top: ${({ theme }) => theme.metrics.base_padding}px;
`;

export const Icon = styled(MaterialIcons)``;
export const Date = styled.Text`
	font-family: ${({ theme }) => theme.fonts.semi_bold};
	font-size: ${({ theme }) => theme.metrics.normal}px;
	color: ${({ theme }) => theme.colors.text_dark};
`;

export const InputTitle = styled.TextInput.attrs({
	placeholderTextColor: theme.colors.text_gray,
})`
	width: 100%;

	font-size: ${({ theme }) => theme.metrics.ms(20)}px;
	font-family: ${({ theme }) => theme.fonts.semi_bold};
	color: ${({ theme }) => theme.colors.text_dark};
`;
export const InputDescription = styled.TextInput.attrs({
	placeholderTextColor: theme.colors.text_gray,
})`
	width: 100%;

	font-size: ${({ theme }) => theme.metrics.ms(18)}px;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.text_dark};
`;
