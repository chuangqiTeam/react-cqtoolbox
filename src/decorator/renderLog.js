
function renderLog(WrappedComponent) {
  return class LogConainer extends WrappedComponent {

    render() {
      console.log(WrappedComponent.name + ' Component:render() called once.');
      return super.render();
    }
  }
}

export default renderLog;
