import React, { useEffect, useState } from 'react';
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
	TitleEmpty,
	TitleHeader,
	TitleNote,
	WrapperButton,
} from './styles';

import { createFilter } from 'react-native-search-filter';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../../global/styles/theme';
import { NotesProps } from '../../global/interfaces';
import { useNotes } from '../../hooks/notes';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
	const [search, setSearch] = useState('');
	const [listSearch, setListaSearch] = useState<NotesProps[]>([]);

	const navigation: any = useNavigation();

	const { notes, setNoteDetail } = useNotes();

	function sortDate(element1: NotesProps, element2: NotesProps): any {
		return element1.date < element2.date;
	}

	useEffect(() => {
		const filteredList = notes.filter(
			createFilter(search, ['title', 'description']),
		);
		setListaSearch(filteredList);
	}, [search, notes]);

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
				<WrapperButton
					onPress={() => {
						setNoteDetail(item);
						navigation.navigate('NotepadAdd');
					}}>
					<TitleNote>{item.title}</TitleNote>
					<DescriptionNote numberOfLines={6}>
						{item.description}
					</DescriptionNote>
				</WrapperButton>
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
				{!!search && (
					<TouchableOpacity onPress={() => setSearch('')}>
						<MaterialIcons name="close" size={24} color={theme.colors.darker} />
					</TouchableOpacity>
				)}
			</SearchBar>

			<NotePadWrapper>
				<NotesList
					numColumns={2}
					data={listSearch.sort(sortDate)}
					keyExtractor={(item, index) => index.toString()}
					renderItem={({ item, index }) => _renderNotes(item, index)}
					ListHeaderComponent={() => {
						if (notes.length > 0) {
							return <TitleHeader>Minhas Anotações</TitleHeader>;
						}
						return <></>;
					}}
					ListEmptyComponent={() => (
						<TitleEmpty>
							{!!search
								? 'nenhuma anotação encontrada...'
								: 'nenhuma anotação adicionada...'}
						</TitleEmpty>
					)}
				/>
			</NotePadWrapper>
		</Container>
	);
};

export default Home;
