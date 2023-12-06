import React, { useState } from 'react'

const Login = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: ""


    });
    const handelInput = async (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value

        });

    }
    const handelonSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
            const response = await fetch("http://localhost:4000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),

            });
            console.log(response);
        } catch (e) {
            console.log(e);

        }
    }
    return (
        <div>
            <form method="POST" onSubmit={handelonSubmit}>
                <input type="text" placeholder="name"
                    value={user.username}
                    onChange={handelInput}
                    name="name" />
                <input type="text" placeholder="name"
                    value={user.email}
                    onChange={handelInput} name="email" />
                <input type="text" placeholder="name"
                    value={user.password}
                    onChange={handelInput} name="password" />
                <input type="text" placeholder="name"
                    value={user.confirmpassword}
                    onChange={handelInput} name="confirmpassword" />

                <input type="submit" placeholder="submit" />
            </form>
        </div>
    )
}

export default Login
