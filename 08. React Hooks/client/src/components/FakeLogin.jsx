import { useContext } from 'react';

import UserContext from '../contexts/UserContext';
import { useForm } from '../hooks/useForm';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const initialValues = {
    username: '',
    password: '',
}

function FakeLogin() {
    const { login } = useContext(UserContext);
    const navigate = useNavigate();

    const loginSubmitHandler = ({ username, password }) => {
        login(username, password);
        navigate('/');
    }

    const { changeHandler, submitHandler, values } = useForm(initialValues, loginSubmitHandler);

    return (
        <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="username"
                    placeholder="pesho13"
                    name="username"
                    value={values.username}
                    onChange={changeHandler}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="******"
                    name="password"
                    value={values.password}
                    onChange={changeHandler}
                />
            </Form.Group>
            <Form.Group>
                <Button type="submit">Login</Button>
            </Form.Group>
        </Form>
    );
}

export default FakeLogin;