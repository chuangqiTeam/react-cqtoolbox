import React, {Component} from 'react';
import Portal from '../portal';

const renderModalComponent = (WrappedComponent) =>
  class ModalComponent extends Component {

    state = {
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
          <Portal>{component}</Portal>
          <WrappedComponent {...newProps} />
        </div>
      );
    }
  }

export default renderModalComponent;
