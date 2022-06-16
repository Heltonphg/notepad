import React, {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';
import { NotesProps } from '../global/interfaces';
import {
	keyStorage,
	loadStorage,
	persistStorage,
} from '../utils/base_async_storage';

interface NotesProviderProps {
	children: ReactNode;
}
interface INotesContextData {
	notes: NotesProps[];
	getNotes(): Promise<void>;
	addNote(note: NotesProps): Promise<void>;
	editNote(note: NotesProps): Promise<void>;
	setNoteDetail(note: NotesProps | null): void;
	detailNote: NotesProps | null;
	isLoading: boolean;
}

export const NotesContext = createContext({} as INotesContextData);

function NotesProvider({ children }: NotesProviderProps) {
	const [notes, setNotes] = useState<NotesProps[]>([]);
	const [detailNote, setDetailNote] = useState<NotesProps | null>(null);

	const [isLoading, setIsLoading] = useState<boolean>(true);

	async function getNotes() {
		setIsLoading(true);
		const notes_storage: NotesProps[] | null = await loadStorage(keyStorage);

		if (notes_storage) {
			setNotes(notes_storage);
		}
		setIsLoading(false);
	}

	async function addNote(note: NotesProps) {
		const notes_storage: NotesProps[] | null = await loadStorage(keyStorage);
		if (notes_storage) {
			const allNotes = [...notes_storage, note];

			setNotes(allNotes);

			await persistStorage({
				key: keyStorage,
				value: allNotes,
			});
		} else {
			const allNotes = [note];

			setNotes(allNotes);

			await persistStorage({
				key: keyStorage,
				value: allNotes,
			});
		}
	}

	async function editNote(note: NotesProps) {
		const notes_storage: NotesProps[] | null = await loadStorage(keyStorage);
		if (notes_storage) {
			let allNotes: NotesProps[] = notes_storage;

			const existNote = allNotes.find((element) => element.id === note.id);

			if (!!existNote) {
				allNotes = notes_storage.filter((element) => element.id !== note.id);
				allNotes = [...allNotes, note];
			}

			setNotes(allNotes);

			await persistStorage({
				key: keyStorage,
				value: allNotes,
			});
		}
	}

	function setNoteDetail(note: NotesProps | null) {
		setDetailNote(note);
	}

	useEffect(() => {
		getNotes();
	}, []);

	return (
		<NotesContext.Provider
			value={{
				notes,
				getNotes,
				addNote,
				editNote,
				isLoading,
				detailNote,
				setNoteDetail,
			}}>
			{children}
		</NotesContext.Provider>
	);
}

function useNotes() {
	return useContext(NotesContext);
}

export { NotesProvider, useNotes };
