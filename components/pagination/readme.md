
## 分页(Pagination)

采用分页的形式分隔长列表，每次只加载一个页面。

### 例子

```jsx
import React, {Component} from 'react';
import Pagination from 'react-rainie-toolbox/lib/pagination';
import Section from 'react-rainie-toolbox/lib/section';

class PaginationTest extends Component {
  state = {
    page: 1,
    total: 10,
  }

  handlePageClick = (page) => {
    this.setState({ page });
  }

  render() {
    return (
      <Section title="分页">
        <Pagination
            currentPage={this.state.page}
            totalPages={this.state.total}
            onChange={this.handlePageClick}/>
      </Section>
    );
  }
}

export default PaginationTest;
```

### 属性(Props)

值             | 值类型        | 默认  | 描述
:------------ | :--------- | :-- | :---------
`currentPage` | `Number`   | `1` | `当前页索引`
`totalPages`  | `Number`   |     | `总页数`
`onChange`    | `Function` |     | `页码变化回调函数`
`theme`       | `Object`   |     | `添加自定义主题`

### 主题(Theme)

Name         | Description
:----------- | :----------
`pagination` | `分页样式`
`space`      | `分页按钮间隔`
