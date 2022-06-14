import styled from 'styled-components/native';

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
