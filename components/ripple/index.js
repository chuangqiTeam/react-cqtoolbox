import rippleFactory from './Ripple';
import theme from './theme.css';

const ripple = rippleFactory({ theme });

export default options => rippleFactory({ ...options, theme });
export {ripple};
