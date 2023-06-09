import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import DefaultLogo from "../../Components/GiraLogo/Logos";
import { Button, Form, Input } from 'antd';
import {InitValues} from "./SignUp";

type PropsInitValues = {
    values: InitValues
    setValues: React.Dispatch<React.SetStateAction<InitValues>>
}
const SignUpForm = (props: PropsInitValues) => {
    const {values, setValues} = props
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `/projects`;
        navigate(path);
    }
    const submitHandler = () =>{
        console.log(values)
        routeChange()

    }
    const getData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target
        setValues({
            ...values,
            [id]: value,
        })
    }

    return (
        <div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <DefaultLogo width="w-32" margin="mt-10" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign up
                </h2>
            </div>
            <Form
                className="mt-10 text-start sm:mx-auto sm:w-full sm:px-4 sm:max-w-sm"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={submitHandler}
                onFinishFailed={() => console.log('xyeta')}
                autoComplete="off"
            >

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!', type: 'email'}]}
                >
                    <Input className="w-32 md:w-44 lg:w-56" onChange={getData} value={values.email} />
                </Form.Item>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input className="w-32 md:w-44 lg:w-56" onChange={getData} value={values.username}/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password className="w-32 md:w-44 lg:w-56" onChange={getData} value={values.password} />

                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button className="bg-blue-500 w-24" type="primary" htmlType="submit">
                        Sign up
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
};

export default SignUpForm;