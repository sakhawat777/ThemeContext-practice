import { createContext } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from './useTheme ';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
