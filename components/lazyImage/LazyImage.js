import React, { Component, PropTypes } from 'react';
import {findDOMNode} from 'react-dom';
import classnames from 'classnames';
import throttle from '../utils/throttle';
import {inViewport} from 'cq-kit-dom';

let components = [];
let throttleLazyImageHandler;

const loadImage = (src) => {
  const img = document.createElement('img');

  const promise = new Promise((resolve, reject) => {
    img.addEventListener('load', resolve);
    img.addEventListener('error', reject);
  });

  img.src = src;

  return promise;
};

const pendImages = (pending) => {
  pending.forEach((component) => {
    loadImage(component.props.url)
      .then(() => {
        component.setState({ visible: true });
      });
  });

};

const lazyImageHandler = () => {

  const pending = [];

  components = components.filter(component => {
    const node = findDOMNode(component);
    if (inViewport(node)) {
      pending.push(component);
      return false;
    }

    return true;
  })

  if (!components.length) {
    window.removeEventListener('scroll', throttleLazyImageHandler);
    throttleLazyImageHandler = null;
  }

  pendImages(pending);
};


class LazyImage extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    scroll: PropTypes.bool,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    placeholder: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.object,
  }

  static defaultProps = {
    theme: {},
    scroll: true,
    height: 'auto',
    className: '',
    placeholder: require('./loader.gif'),
  }

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    }
  }

  componentDidMount() {
    const {
      scroll,
    } = this.props;

    if (scroll) {
      components.push(this);
    }

    if (!throttleLazyImageHandler && components.length) {
      throttleLazyImageHandler = throttle(lazyImageHandler);
      window.addEventListener('scroll', throttleLazyImageHandler);
    }
  }

  componentWillUnmount() {
    const index = components.indexOf(this);
    if (index !== -1) {
      components.splice(index, 1);
    }

    if (components.length === 0) {
      window.removeEventListener('scroll', this.throttleLazyImageHandler);
    }
  }


  render() {
    const {
      url,
      style,
      theme,
      scroll,// eslint-disable-line
      height,
      placeholder,
      className,
      ...other,
    } = this.props;

    const {
      visible,
    } = this.state;

    const classes = classnames({
      [theme.placeholder]: !visible,
    }, className);

    const styles = Object.assign({ height: height}, style);

    const props = {
      ...other,
      style: styles,
      className: classes,
    };

    if (!visible && React.isValidElement(placeholder)) {
      return React.cloneElement(placeholder, props);
    }

    return (
      <img
        {...props}
        src={visible ? url : placeholder}
        alt=""
      />
    );
  }

}

export default LazyImage;
