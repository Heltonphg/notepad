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

import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useNotes } from '../../hooks/notes';
import { NotesProps } from '../../global/interfaces';
import * as Location from 'expo-location';
import { getRandomColor } from '../../utils/functions';

const NotepadAdd: React.FC = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [loading, setLoading] = useState<boolean>(false);

	const [isValid, setIsValid] = useState(false);

	const navigation: any = useNavigation();

	useEffect(() => {
		if (title.length > 0 && description.length > 0) {
			setIsValid(true);
		} else {
			setIsValid(false);
		}
	}, [title, description]);

	const { addNote } = useNotes();

	async function handleGetLocation() {
		let { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== 'granted') {
			return;
		}
		return await Location.getCurrentPositionAsync({});
	}

	async function handleSaveNote() {
		setLoading(true);
		const location: any = await handleGetLocation();
		const note: NotesProps = {
			title,
			description,
			color: getRandomColor(),
			date: moment().format('YYYY-MM-DD'),
			location: location.coords.latitude + ',' + location.coords.longitude,
		};

		await addNote(note);
		setLoading(false);
		navigation.navigate('Home');
	}

	return (
		<Container>
			<Header>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Icon name={'arrow-back'} size={theme.metrics.ms(27)} />
				</TouchableOpacity>

				<Date>{moment().format('ll')}</Date>

				<TouchableOpacity disabled={!isValid} onPress={() => handleSaveNote()}>
					{loading ? (
						<ActivityIndicator
							color={theme.colors.primary}
							size={theme.metrics.ms(24)}
						/>
					) : (
						<Icon
							name={'check'}
							size={theme.metrics.ms(24)}
							color={
								!isValid ? theme.colors.gray_disable : theme.colors.text_dark
							}
						/>
					)}
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
