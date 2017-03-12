import React, {Component} from 'react';
import Modal from '../modal';

const renderModalComponent = (WrappedComponent) =>
  class ModalComponent extends Component {

    state = {
      open: false,
      component: null,
    }

    renderModalComponent = (component) => {
      this.setState({ component });
    }

    render() {
      const {
        component,
      } = this.state;

      const newProps = {
        ...this.props,
        renderModalComponent: this.renderModalComponent,
      };

      return (
        <div>
          {!!component && <Modal>{component}</Modal>}
          <WrappedComponent {...newProps} />
        </div>
      );
    }
  }

export default renderModalComponent;
