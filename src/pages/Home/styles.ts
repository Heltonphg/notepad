import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
`;
export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.text_dark};
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${({ theme }) => theme.metrics.normal}px;
`;
