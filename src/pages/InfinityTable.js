import { InfinityTable as Table } from 'antd-table-infinity';
import React, { Component } from 'react';

import { columns, fetchData } from '../stories/Table/mockData';

// import { SumTable as Table } from '../components/Table';
// import '../components/Table/SumTable/index.css';

// import { InfinityTable as Table } from '../dist/index';
// import '../dist/index.css';

class App extends Component {
  state = {
    data: [],
    loading: false,
  };
  handleFetch = () => {
    console.log('loading');
    this.setState({ loading: true });
    fetchData(this.state.data.length).then(newData =>
      this.setState(({ data }) => ({
        loading: false,
        data: data.concat(newData),
      })),
    );
  };

  render() {
    return (
      <React.Fragment>
        {/* Support columns props */}
        <Table
          key="key"
          loading={this.state.loading}
          onFetch={this.handleFetch}
          pageSize={50}
          columns={columns}
          scroll={{ y: 450 }}
          dataSource={this.state.data}
          bordered
          debug
        />

        {/* Support children */}
        <Table
          key="key"
          loading={this.state.loading}
          onFetch={this.handleFetch}
          pageSize={10}
          scroll={{ y: 450 }}
          dataSource={this.state.data}
          bordered
          debug
        >
          <Table.Column title="Name" dataIndex="name" key="name"
            render={(text, record, index) => (
              <span>
                {record.index}: {record.name}
              </span>
            )} />
        </Table>
      </React.Fragment>
    );
  }
}

export default App;
