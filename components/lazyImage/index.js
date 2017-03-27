import { themr } from 'react-css-themr';
import LazyImage from './LazyImage';
import { LAZYIMAGE } from '../identifiers';
import theme from './theme.css';

const ThemedLazyImage = themr(LAZYIMAGE, theme)(LazyImage);

export default ThemedLazyImage;
export { ThemedLazyImage };
