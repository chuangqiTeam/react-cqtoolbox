import React, {PropTypes, Component} from 'react';
import pureRender from '../decorator/pureRender';
import classnames from 'classnames';

const factory = (Head, Body, Tr, Th, Td, Loader) => {

  class Table extends Component {

    static propTypes = {
      className: PropTypes.string,
      columns: PropTypes.array,
      dataSource: PropTypes.array,
      loading: PropTypes.bool,
      hoverable: PropTypes.bool,
      scrollY: PropTypes.number,
      size: PropTypes.oneOf(['small', 'normal']),
      rowKey: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
      ]),
      selectedRowKeys: PropTypes.array,
      theme: PropTypes.shape({
        table: PropTypes.string,
        loadWrapper: PropTypes.string,
        normal: PropTypes.string,
        small: PropTypes.string,
        th: PropTypes.string,
        td: PropTypes.string,
        withHover: PropTypes.string,
        active: PropTypes.string,
        scrollTable: PropTypes.string,
        scrollHeader: PropTypes.string,
        scrollBody: PropTypes.string,
      }),
    }

    static defaultProps = {
      size: 'normal',
      loading: false,
      hoverable: false,
      selectedRowKeys: [],
    }

    getTableClasses = () => {
      const {theme, size, className} = this.props;
      return classnames(theme.table, [theme[size]], className);
    }

    renderLoad = (columns) => (
      <Tr>
        <Td colSpan={columns.length}>
          <Loader theme={this.props.theme} />
        </Td>
      </Tr>
    )

    renderColGroup = (columns) => {
      return (
        <colGroup key="colgroup">
          {columns.map(item => {
            const props = {
              key: item.key,
            }

            if (item.width) {
              props.style = {width: item.width, minWidth: item.width};
            }

            return <col {...props} />;
          })}
        </colGroup>
      );
    }

    renderHead = (columns) => {
      return (
        <Head key="head">
          <Tr>
            {columns.map(item => (
              <Th key={item.key}>
                {typeof item.title === 'function' ?
                  item.title() : item.title}
              </Th>
            ))}
          </Tr>
        </Head>
      );
    }

    renderBody = (columns, dataSource) => {
      const {loading} = this.props;

      return (
        <Body key="body">
          {loading ? this.renderLoad(columns) : dataSource.map(this.renderBodyTr)}
        </Body>
      );
    }

    renderBodyTr = (item, index) => {
      const {columns, rowKey, hoverable, selectedRowKeys} = this.props;
      const key = item.key || (typeof rowKey === 'function' ? rowKey(item) : item[rowKey]);
      const isActive = !!~selectedRowKeys.indexOf(key);

      return (
        <Tr key={key} hoverable={hoverable} active={isActive}>
          {columns.map(column => {
            const {title, width, field, render, ...other} = column; // eslint-disable-line

            return (
              <Td {...other}>
                {render ?
                  column.render(item[field], item, index) :
                  item[field]}
              </Td>
            );

          })}
        </Tr>
      );
    }

    renderScrollHeader = (columns, dataSource) => {
      const {theme} = this.props;

      return (
        <div key="scrollHeader" className={theme.scrollHeader}>
          <table className={this.getTableClasses()}>
            {[
              this.renderColGroup(columns),
              this.renderHead(columns),
            ]}
          </table>
        </div>
      )
    }

    renderScrollBody = (columns, dataSource) => {
      const {theme, scrollY} = this.props;
      const style = { maxHeight: scrollY };

      return (
        <div
          key="scrollBody"
          style={style}
          className={theme.scrollBody}>
          <table className={this.getTableClasses()}>
            {[
              this.renderColGroup(columns),
              this.renderBody(columns, dataSource),
            ]}
          </table>
        </div>
      )
    }

    render() {
      const {
        theme,
        columns,
        scrollY,
        dataSource,
      } = this.props;


      if (scrollY) {
        return (
          <div className={theme.scrollTable}>
            {[
              this.renderScrollHeader(columns, dataSource),
              this.renderScrollBody(columns, dataSource),
            ]}
          </div>
        );
      }

      return (
        <table className={this.getTableClasses()}>
          {[
            this.renderColGroup(columns),
            this.renderHead(columns),
            this.renderBody(columns, dataSource),
          ]}
        </table>
      );
    }
  }

  return pureRender(Table);
}

export {factory as tableFactory};
