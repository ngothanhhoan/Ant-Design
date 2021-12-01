import React from "react";
import { Form, Input, Cascader, Select, Checkbox, Button } from "antd";
const { Option } = Select;

const RegisterForm = () => {
  const [form] = Form.useForm();

  const residences = [
    {
      value: "india",
      label: "India",
    },
    {
      value: "japan",
      label: "Japan",
    },
    {
      value: "usa",
      label: "USA",
    },
  ];

  const formItemLayout = {
    lableCol: {
      xs: {
        san: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        san: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        pffset: 8,
      },
    },
  };

  const prefix = (
    <Form.Item name="prefix" noSTyle>
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
        <Option value="92">+92</Option>
        <Option value="93">+93</Option>
      </Select>
    </Form.Item>
  );

  const onFinish = () => {};

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initalValues={{
        residence: ["india"],
        prefix:"91"
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        lable="E-mail"
        style={{width: "400px"}}
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail",
          },
          {
            required: true,
            message: "Please input your E-mail",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        lable="Password"
        style={{ width: "400px" }}
        rules={[
          {
            required: true,
            message: "Please input your password",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="confirm"
        lable="Confirm Password"
        dependencies={["password"]}
        style={{ width: "400px" }}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please cofirm your password"
          },
          // ({getFieldValue}) => ({
          //   validator(_, value) {
          //     if (!value || getFielValue("password") --- value) {
          //       return Promise.resolve();
          //     }
          //     return Promise.reject(
          //       "The two password that you entered do not match"
          //     )
          //   }
          // })
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      <Form.Item 
      name="nickname" 
      lable="Nickname" 
      style={{ width: "400px" }}
      rules={[
        {
          required: true,
          message: "Please Input ypur nickname",
          whitespace: true,
      },
      ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="country"
        lable="Country"
        style={{ width: "250px", marginLeft: "45px" }}
        rules={[
          {
            type: "array",
            message: "Please select your country",
            whitespace: true,
        },
        ]}
      >
        <Cascader options={residences} style={{ marginLeft: "5px" }} />
      </Form.Item>
      <Form.Item 
      name="phone" 
      lable="Phone Number" 
      style={{ width: "400px" }}
      rules={[
        {
          required: true,
          message: "Please input your phone number"
        }
      ]}
      >
        <Input 
        addonBefore={prefix} 
        style={{ 
          width: "100%" 
          }} 
        />
      </Form.Item>
      <div style={{ float: "left", width: "350px" }}>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) => 
              value 
              ?Promise.resolve()
              :Promise.reject("Should accept agreement"),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default RegisterForm;
