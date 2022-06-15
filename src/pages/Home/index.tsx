import React from 'react';
import {
	Avatar,
	CardNote,
	Container,
	DescriptionNote,
	Header,
	InputSearch,
	NotePadWrapper,
	NotesList,
	Profile,
	SearchBar,
	Title,
	TitleHeader,
	TitleNote,
} from './styles';

import * as Location from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../../global/styles/theme';
import { NotesProps } from '../../global/interfaces';
import { useNotes } from '../../hooks/notes';
import { useIsFocused } from '@react-navigation/native';

const mockNotes: NotesProps[] = [
	{
		title: 'Note 1',
		description: 'Lorem Ipsum is simply dummy tex',
		date: '2020-01-01',
		color: '#e8f5fd',
	},
	{
		title: 'Note 2',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
		date: '2020-01-02',
		color: '#fef4e1',
	},
	{
		title: 'Note 3',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry',
		date: '2020-01-02',
		color: '#fee9f3',
	},
	{
		title: 'Note 4',
		description:
			'Lorem Ipsum is simply dummy text of the printinLorem Ipsum is simply dummy text of the printinLorem Ipsum is simply dummy text of the printinLorem Ipsum is simply dummy text of the printinLorem Ipsum is simply dummy text of the printinpo',
		date: '2020-01-02',
		color: '#7dfd99',
	},
	{
		title: 'Note 7',
		description:
			'Lorem Ipsum is simply dummy text of the printinLorem Ipsum is simply dummy text of the printinLorem Ipsum is simply dummy text of the printinLorem Ipsum is simply dummy text of the printinLorem Ipsum is simply dummy text of the printinpo',
		date: '2020-01-02',
		color: 'rgba(139,240,245,0.37)',
	},
	{
		title: 'Note 8',
		description:
			'Lorem Ipsum is simply dummy text of the printinLorem Ipsum is simply dummy text of the printinLorem Ipsum is simply dummy text of the printinLorem Ipsum is simply dummy text of the printinLorem Ipsum is simply dummy text of the printinpo',
		date: '2020-01-02',
		color: '#d7bb95',
	},
];

const Home: React.FC = () => {
	const [search, setSearch] = React.useState('');

	const { notes } = useNotes();

	function sortDate(element1: NotesProps, element2: NotesProps): any {
		return element1.date < element2.date;
	}

	function _renderNotes(item: NotesProps, index: number) {
		return (
			<CardNote
				animation="zoomIn"
				duration={700}
				delay={index * 100}
				style={[
					{
						marginTop: index % 2 === 0 ? 0 : theme.metrics.ms(20),
						marginBottom: index % 2 === 0 ? theme.metrics.ms(10) : 0,
						backgroundColor: item.color,
					},
				]}>
				<TitleNote>{item.title}</TitleNote>
				<DescriptionNote numberOfLines={6}>{item.description}</DescriptionNote>
			</CardNote>
		);
	}

	return (
		<Container>
			<Header>
				<Title>Olá,{'\n'}Seja Bem-Vindo!</Title>
				<Profile>
					<Avatar source={require('../../assets/celebrite.png')} />
				</Profile>
			</Header>

			<SearchBar>
				<MaterialIcons name="search" size={24} color={theme.colors.darker} />
				<InputSearch
					placeholder="Buscar"
					value={search}
					onChangeText={setSearch}
					autoCapitalize="none"
					autoCorrect={false}
				/>
			</SearchBar>

			<NotePadWrapper>
				<NotesList
					numColumns={2}
					data={notes.sort(sortDate)}
					keyExtractor={(item, index) => index.toString()}
					renderItem={({ item, index }) => _renderNotes(item, index)}
					ListHeaderComponent={() => <TitleHeader>Notes</TitleHeader>}
				/>
			</NotePadWrapper>
		</Container>
	);
};

export default Home;
