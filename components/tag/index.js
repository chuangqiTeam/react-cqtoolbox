import { themr } from 'react-css-themr';
import { TAG } from '../identifiers';
import {tagFactory} from './tag';
import FontIcon from '../font_icon';
import theme from './theme.css';

const ThemedTag = themr(TAG, theme)(tagFactory(FontIcon));
export default ThemedTag;
export { ThemedTag as Tag };
