import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender'
  },
  {
    title: 'Country',
    dataIndex: 'nation',
    key: 'nation'
  }
];

const History: React.FC<{}> = () => {
  const nameList = useSelector((state: IReducerStates) => state.nameList);

  const dataSource = nameList.map((name, i) => {
    return { key: i, ...name };
  });

  return <Table dataSource={dataSource} columns={columns} />;
};

export default History;
