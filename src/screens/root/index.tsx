import React from 'react';
import { PageHeader } from 'antd';
import { NavLink } from 'react-router-dom';

type Props = any;

const Root: React.FC<Props> = props => {
  return (
    <PageHeader
      backIcon={false}
      title="Prediction App"
      extra={[
        <NavLink
          key="0"
          exact
          activeStyle={{
            fontWeight: 'bold',
            color: 'blue'
          }}
          to="/predict"
        >
          Predict
        </NavLink>,
        <NavLink
          key="1"
          exact
          activeStyle={{
            fontWeight: 'bold',
            color: 'blue'
          }}
          to="/history"
        >
          History
        </NavLink>
      ]}
    >
      {props.children}
    </PageHeader>
  );
};

export default Root;
