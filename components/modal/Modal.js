import React, {Component} from 'react';
import { render } from 'react-dom';

const appenedElements = {};
const appendElementContainer = document.createElement('div');
document.body.appendChild(appendElementContainer);


function getAppendedElements() {
  const elements = [];

  const keys = Object.keys(appenedElements);
  const length = keys.length;

  if (length > 0) {
    keys.forEach((key) => {
      elements.push(appenedElements[key]);
    });
  }

  return elements;
}

function uuid() {
  const rnds = new Array(16);
  for (var i = 0, r; i < 16; i++) {
    if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
    rnds[i] = r >>> ((i & 0x03) << 3) & 0xff; // eslint-disable-line
  }

  return rnds;
}

class Modal extends Component {
  constructor(props) {
    super(props);

    this.uniqueId = uuid();
    this.setAppendElementId(this.uniqueId);
  }

  componentDidMount() {
    this.updateSelf();
  }

  componentDidUpdate() {
    this.updateSelf();
  }

  componentWillUnmount() {
    this.removeAppendElement();
  }

  updateSelf(modal) {
    this.updateAppendElement(this.props.children);
  }

  setAppendElementId(id) {
    this.appendElementId = id;
  }

  updateAppendElement(content) {
    appenedElements[this.appendElementId] = content;

    this.updateAppendElements();
  }

  updateAppendElements() {
    render(<span>{getAppendedElements()}</span>, appendElementContainer);
  }

  removeAppendElement() {
    delete appenedElements[this.appendElementId];

    this.updateAppendElements();
  }

  render() {
    return null;
  }
}

export default Modal;
