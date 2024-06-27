import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

export const ToggleButton = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<button
			onClick={toggleTheme}
			style={{
				background: theme === 'dark' ? 'black' : 'white',
				color: theme === 'dark' ? 'white' : 'black',
			}}>
			Toggle Theme
		</button>
	);
};
