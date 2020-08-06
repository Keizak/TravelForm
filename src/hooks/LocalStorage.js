import React, {useState} from 'react';

// Hook
export function useLocalStorage(key, initialValue) {
	// Стейт сохраняет наше значение
	// Передаём функцию начального состояния в useState, чтобы логика выполнялась только один раз
	const [storedValue, setStoredValue] = useState(() => {
		try {
			// Получить из локального хранилища по ключу
			const item = window.localStorage.getItem(key);
			// Разобрать сохраненный json или, если никто не вернет initialValue
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			// Если ошибка, также вернуть initialValue
			console.log(error);
			return initialValue;
		}
	});

	// Вернуть упакованную версию setter-функции useState, которая
	// сохраняет новое значение для localStorage.
	const setValue = value => {
		try {
			//Разрешить value быть функцией, поэтому у нас тот же API, что и для useState
			const valueToStore =
				value instanceof Function ? value(storedValue) : value;
			// Сохранить состояние
			setStoredValue(valueToStore);
			// Сохранить в локальном хранилище
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			//Более продвинутая реализация будет обрабатывать ошибки
			console.log(error);
		}
	};

	return [storedValue, setValue];
}
