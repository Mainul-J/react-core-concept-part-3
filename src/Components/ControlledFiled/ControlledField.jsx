import { useState } from "react";

const ControlledField = () => {
    const [name,setName] = useState('')
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error, setError] = useState('')
    

    const handleSubmit = (event) =>{
        console.log('submit',email, password);
        event.preventDefault();
        if (password.length < 6) {
            setError('password is length is 6')
        }
        else{
            setError('')
        }
    }

    const handlePasswordOnChange = (e) =>{
        console.log(e.target.value);
        setPassword(e.target.value);

        if (password.length < 6) {
            setError('password is length low of 6')
        }
        else{
            setError('')
        }
    }

    const handleEmailOnchange=e=>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handleName = e =>{
        console.log(e.target.value);
        setName(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                
                <input type="text" onChange={handleName} defaultValue={name} />
                <br />

                <input type="email" onChange={handleEmailOnchange} name="email" placeholder="input your email" required  />
                <br />
                <input type="password" name="password" placeholder="input your password" onChange={handlePasswordOnChange} value={password} id="" required  />
                <br />
                <input type="submit" value="submit" />
            </form>
            <p><small style={{color:"Red",}}>{error}</small></p>
        </div>
    );
};

export default ControlledField; 