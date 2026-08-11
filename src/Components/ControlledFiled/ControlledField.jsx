import { useState } from "react";

const ControlledField = () => {

    const [password,setPassword] = useState('');
    const [error, setError] = useState('')
    

    const handleSubmit = (event) =>{
        console.log('submit',event);
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

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="input your email" required  />
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