import { themr } from 'react-css-themr';
import Loader from './Loader';
import { LOADER } from '../identifiers';
import theme from './theme.css';

const ThemeLoader = themr(LOADER, theme)(Loader);

export default ThemeLoader;
export { ThemeLoader as Loader };
