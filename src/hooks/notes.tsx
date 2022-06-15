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
	isLoading: boolean;
}

export const NotesContext = createContext({} as INotesContextData);

function NotesProvider({ children }: NotesProviderProps) {
	const [notes, setNotes] = useState<NotesProps[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isLoadingAdd, setIsLoadingAdd] = useState<boolean>(false);

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

	useEffect(() => {
		getNotes();
	}, []);

	return (
		<NotesContext.Provider
			value={{
				notes,
				getNotes,
				addNote,
				isLoading,
			}}>
			{children}
		</NotesContext.Provider>
	);
}

function useNotes() {
	return useContext(NotesContext);
}

export { NotesProvider, useNotes };
