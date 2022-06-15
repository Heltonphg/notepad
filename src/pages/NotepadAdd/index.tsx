import React, { useEffect, useState } from 'react';
import {
	Container,
	Date,
	Header,
	Icon,
	InputDescription,
	InputTitle,
	WrapperPad,
} from './styles';
import theme from '../../global/styles/theme';
import moment from 'moment';
import 'moment/locale/pt-br';
import { TouchableOpacity } from 'react-native';

const NotepadAdd: React.FC = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const [isValid, setIsValid] = useState(false);

	useEffect(() => {
		if (title.length > 0 && description.length > 0) {
			setIsValid(true);
		} else {
			setIsValid(false);
		}
	}, [title, description]);

	return (
		<Container>
			<Header>
				<TouchableOpacity>
					<Icon name={'arrow-back'} size={theme.metrics.ms(27)} />
				</TouchableOpacity>

				<Date>{moment().format('ll')}</Date>

				<TouchableOpacity disabled={!isValid}>
					<Icon
						name={'check'}
						size={theme.metrics.ms(25)}
						color={
							!isValid ? theme.colors.gray_disable : theme.colors.text_dark
						}
					/>
				</TouchableOpacity>
			</Header>

			<WrapperPad>
				<InputTitle
					placeholder={'Insira o título'}
					value={title}
					onChangeText={setTitle}
					autoCorrect={false}
					multiline={true}
				/>

				<InputDescription
					placeholder={'Descrição...'}
					value={description}
					onChangeText={setDescription}
					numberOfLines={20}
					maxLength={4000}
					multiline={true}
					autoCapitalize={'none'}
					autoCorrect={false}
					style={{
						textAlignVertical: 'top',
						paddingTop: theme.metrics.ms(10),
					}}
				/>
			</WrapperPad>
		</Container>
	);
};

export default NotepadAdd;
