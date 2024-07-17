import { useEffect, useRef, useState } from "react";

export default function ControlledForm() {
    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        age: '',
        password: '',
        bio: '',
        occupation: 'it',
        gender: 'f',
    });

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles/fb352199-bcbc-4e1d-a1dc-ed346a6fb49a');
            const profile = await response.json();

            // setUsername(profile.username);
        })();
    }, []);

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log('Form Submitted');
    }

    const changeHandler = (e) => {
        setFormValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.type === 'checkbox'
            ? e.target.checked
            : e.target.value
        }));
    }

    return (
        <>
            <h1>Controlled Form</h1>

            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        ref={inputRef}
                        name="username"
                        id="username"
                        placeholder="johndoe"
                        value={formValues.username}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="ex.johndoe@gmail.com"
                        value={formValues.email}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        value={formValues.age}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="bio">Bio</label>
                    <textarea
                        name="bio"
                        id="bio"
                        value={formValues.bio}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="occupation">Occupation</label>
                    <select name="occupation" id="occupation"
                        value={formValues.occupation}
                        onChange={changeHandler}
                    >
                        <option value="it">IT</option>
                        <option value="bi">BI</option>
                        <option value="ai">AI</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="gender-f">Female</label>
                    <input
                        type="radio"
                        name="gender"
                        id="gender-m"
                        value="f"
                        checked={formValues.gender === 'f'}
                        onChange={changeHandler}
                    />

                    <label htmlFor="gender-m">Male</label>
                    <input
                        type="radio"
                        name="gender"
                        id="gender-m"
                        value="m"
                        checked={formValues.gender === 'm'}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="swimming">Swimming</label>
                    <input
                        type="checkbox"
                        name="swimming"
                        id="swimming"
                        value={formValues.swimming}
                        onChange={changeHandler}
                    />

                    <label htmlFor="fitness">Fitness</label>
                    <input
                        type="checkbox"
                        name="fitness"
                        id="fitness"
                        value={formValues.fitness}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="******"
                        value={formValues.password}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <input type="submit" value="Login"></input>
                </div>
            </form>

        </>
    );
}