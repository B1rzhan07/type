import { Button, Form, Input } from 'antd';
import React, {FC} from 'react';
import { rules } from '../utils/rules';

const LoginForm:FC = () => {
    return (
        <Form>
            <Form.Item
            label="Name"
            name="username"
            rules={[rules.required("Please input your username!") ]}
            >
                <Input />
             </Form.Item>
             <Form.Item
            label="Password"
            name="password"
            rules={[ rules.required("Please input your password!") ]}
            >
                <Input />
             </Form.Item>
             <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Sign In
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;