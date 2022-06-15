import AsyncStorage from '@react-native-async-storage/async-storage';

const EVENTS_KEY = '@notepad';

interface BaseAsyncStorageProps {
	key: string;
	value: any;
}

export const keyStorage = '@notepad:notes';

export const persistStorage = async <T>(data: BaseAsyncStorageProps) => {
	try {
		return AsyncStorage.setItem(
			`${EVENTS_KEY}:${data.key}`,
			JSON.stringify(data.value),
		);
	} catch (e) {
		console.warn('AsyncStorage:setItem', e);
	}
};

export const loadStorage = async <T>(key: string): Promise<T | null> => {
	try {
		const value = await AsyncStorage.getItem(`${EVENTS_KEY}:${key}`);
		if (value !== null) {
			return JSON.parse(value);
		}
	} catch (e) {
		console.warn('AsyncStorage:getItem', e);
	}
	return Promise.resolve(null);
};
