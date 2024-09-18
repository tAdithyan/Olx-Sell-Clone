import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, InputNumber, Select, Upload } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { PlusOutlined } from '@ant-design/icons';


type FieldType = {
    ProductName?: string;
    Price?: string;
    Description?: string;
};


const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

const Forms: React.FC = () => (
    
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    className='  p-4 border-2 border-accent-default rounded-xl '
  >
    <Form.Item<FieldType>
      label="ProductName"
      name="ProductName"
      rules={[{ required: true, message: 'Please Enter  ProductName!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item label="Price"
    name="Price"
          rules={[{ required: true, message: 'Please Enter  Price!' }]}
>
          <InputNumber />
        </Form.Item>

        <Form.Item label="Description"      name="Description"
     rules={[{ required: true, message: 'Please Enter  Description!' }]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Category" 
        name='category'
        rules={[{ required:true,message:'please select category!'}]}
        >
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Images" valuePropName="fileList"  getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <button style={{ border: 0, background: 'none' }} type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default Forms;


