import React, {PropTypes, Component} from 'react';
import pureRender from '../decorator/pureRender';
import classnames from 'classnames';

const isArray = (arr) => Object.prototype.toString.apply(arr) === '[object Array]';

const factory = (Head, Body, Tr, Th, Td, Loader) => {

  class Table extends Component {

    static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      columns: PropTypes.array,
      dataSource: PropTypes.array,
      loading: PropTypes.bool,
      size: PropTypes.oneOf(['small', 'normal']),
      theme: PropTypes.shape({table: PropTypes.string})
    }

    static defaultProps = {
      size: 'normal',
      loading: false,
    }

    renderDataSource = (columns, dataSource) => {
      return ([
        this.renderColGroup(columns),
        this.renderHead(columns),
        this.renderBody(columns, dataSource),
      ]);
    }

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
                {item.title}
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

    renderLoad = (columns) => (
      <Tr>
        <Td colSpan={columns.length}>
          <Loader theme={this.props.theme} />
        </Td>
      </Tr>
    )

    renderBodyTr = (item, index) => {
      const {columns} = this.props;
      return (
        <Tr key={item.key}>
          {columns.map(column => (
            <Td key={column.key}>
              {column.render ?
                column.render(item[column.field], item, index) :
                item[column.field]}
            </Td>
          ))}
        </Tr>
      );
    }

    render() {
      const {
        theme,
        size,
        columns,
        dataSource,
        children,
        className
      } = this.props;

      let content;
      if (columns && isArray(columns)) {
        content = this.renderDataSource(columns, dataSource);
      } else {
        content = children;
      }

      const classes = classnames(theme.table, [theme[size]], className);
      return (
        <table className={classes}>
          {content}
        </table>
      );
    }
  }

  return pureRender(Table);
}

export {factory as tableFactory};
