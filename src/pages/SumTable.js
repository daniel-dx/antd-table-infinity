import { Spin } from 'antd';
import { SumTable as Table } from '../components/Table';
import React, { Component } from 'react';

import '../components/Table/index.less';

import { columns, fetchData, sumData } from '../stories/Table/mockData';


// import { SumTable as Table } from '../components/Table';
// import { SumTable as Table } from '../dist/index';
// import '../components/Table/index.less';

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

  loadMoreContent = () => (
    <div
      style={{
        textAlign: 'center',
        paddingTop: 40,
        paddingBottom: 40,
        border: '1px solid #e8e8e8',
      }}
    >
      <Spin tip="Loading..." />
    </div>
  );

  render() {
    return (
      <Table
        key="key"
        loading={this.state.loading}
        onFetch={this.handleFetch}
        pageSize={50}
        loadingIndicator={this.loadMoreContent()}
        columns={columns}
        sumData={sumData}
        scroll={{ y: 450 }}
        dataSource={this.state.data}
        bordered
        debug
      />
    );
  }
}

export default App;
