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
import uuid from 'react-native-uuid';

import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useNotes } from '../../hooks/notes';
import { NotesProps } from '../../global/interfaces';
import * as Location from 'expo-location';
import { getRandomColor } from '../../utils/functions';

const NotepadAdd: React.FC = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [loading, setLoading] = useState<boolean>(false);

	const { detailNote, addNote, editNote, setNoteDetail } = useNotes();

	const [isValid, setIsValid] = useState(false);

	const navigation: any = useNavigation();
	const isFocused = useIsFocused();

	useEffect(() => {
		if (title.length > 0 && description.length > 0) {
			setIsValid(true);
		} else {
			setIsValid(false);
		}
	}, [title, description]);

	useEffect(() => {
		if (detailNote && isFocused) {
			setTitle(detailNote.title);
			setDescription(detailNote.description);
		} else {
			setTitle('');
			setDescription('');
			setNoteDetail(null);
		}
	}, [isFocused]);

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
			id: detailNote ? detailNote.id : String(uuid.v4()),
			title,
			description,
			color: detailNote ? detailNote.color : getRandomColor(),
			date: moment().format('YYYY-MM-DD HH:mm:ss'),
			location: detailNote
				? detailNote.location
				: location.coords.latitude + ',' + location.coords.longitude,
		};

		if (detailNote) {
			await editNote(note);
		} else {
			await addNote(note);
		}

		setLoading(false);
		setDescription('');
		setTitle('');
		setNoteDetail(null);
		if (detailNote) {
			navigation.goBack();
		} else {
			navigation.navigate('Home');
		}
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
