import { useState, useEffect } from 'react';

export const useTheme = (initialTheme = 'light') => {
	const [theme, setTheme] = useState(() => {
		const savedTheme = localStorage.getItem('theme');
		return savedTheme ? savedTheme : initialTheme;
	});

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	useEffect(() => {
		document.body.style.backgroundColor =
			theme === 'dark' ? 'black' : 'white';
		document.body.style.color = theme === 'dark' ? 'white' : 'black';
		localStorage.setItem('theme', theme);
	}, [theme]);

	return { theme, toggleTheme };
};
