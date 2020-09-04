import React, { useState } from 'react';

import { Form, Input, Button } from 'antd';

import { Redirect } from 'react-router';

type Props = {};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

const Predict: React.FC<Props> = () => {
  const [name, setName] = useState('');

  const [isRedirect, setRedirect] = useState(false);

  const onFinish = () => {
    setRedirect(true);
  };

  if (isRedirect) return <Redirect to={`/result/${name}`} />;

  return (
    <Form {...layout} name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item
        label="Enter name"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input id="name-input" value={name} onChange={e => setName(e.target.value)} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button id="name-submit" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Predict;
