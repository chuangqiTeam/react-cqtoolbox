
import {badgeFactory} from './Badge';
import theme from './theme.css';

const themeBadgeFactory = options => badgeFactory({ ...options, theme });
export default badgeFactory({ theme });
export { themeBadgeFactory as badgeFactory };
