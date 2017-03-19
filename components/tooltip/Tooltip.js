import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Trigger from '../trigger';
import getPlacements from './placements.js';

const defaults = {
  placement: 'top',
  action: 'hover',
  className: '',
  theme: {},
};
const tooltipFactory = (options = {}) => {
  const {
    placement: defaultplacement,
    action: defaultAction,
    className: defaultClassName,
    theme: defaultTheme,
  } = { ...defaults, ...options };

  return (ComposedComponent) => {

    class TooltippedComponent extends Component {
      static propTypes = {
        className: PropTypes.string,
        action: PropTypes.string,
        placement: PropTypes.oneOf([
          'top', 'left', 'right', 'bottom',
          'topLeft', 'topRight', 'bottomLeft', 'bottomRight',
          'leftTop', 'leftBottom', 'rightTop', 'rightBottom',
        ]),
        tooltip: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.node,
        ]),
        theme: PropTypes.shape({
          tooltip: PropTypes.string,
          tooltipActive: PropTypes.string,
          tooltipInner: PropTypes.string,
        }),
      }

      static defaultProps = {
        placement: defaultplacement,
        action: defaultAction,
        className: defaultClassName,
        theme: defaultTheme,
      }

      constructor(props) {
        super(props);

        this.state = {
          open: false,
        }
      }

      getPopupElement = () => {
        const {theme, className, tooltip, placement} = this.props;

        const classes = classnames(theme.tooltip, {
          [theme.tooltipActive]: this.state.open,
        }, className);

        const arrowClasses = classnames(theme.tooltipArrow, theme[placement]);

        return (
          <div
            className={classes}
            data-react-toolbox="tooltip">
            <span className={arrowClasses}></span>
            <span className={theme.tooltipInner}>{tooltip}</span>
          </div>
        );
      }

      getPlacement() {
        return getPlacements()[this.props.placement];
      }

      handleTooltipToggle = () => {
        this.setState({ open: !this.state.open });
      }

      render() {
        const {
          className, // eslint-disable-line
          tooltip, // eslint-disable-line
          theme,
          placement, // eslint-disable-line
          action,
          ...other,
        } = this.props;

        const popupElement = this.getPopupElement();
        const align = this.getPlacement();

        return (
          <Trigger
            action={action}
            popupTheme={theme}
            popupAlign={align}
            popupVisible={this.state.open}
            onPopupVisibleChange={this.handleTooltipToggle}
            popup={popupElement}>
            <ComposedComponent {...other} />
          </Trigger>
        );
      }
    }

    return TooltippedComponent;
  }
}

export { tooltipFactory };
