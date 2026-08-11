import { useRef } from "react";


const UnControlledField = () => {
    const emailRef = useRef('');
    const passwordlRef = useRef('');
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(emailRef.current.value);
        const email = emailRef.current.value;
        const password = passwordlRef.current.value;
        console.log(email,password);
    }

    return (
        <div>
            <div>
                <h1>uncontrolled field 46.3 modules 8th mint</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input ref={emailRef} type="email" name="email" placeholder="@email"  />
                    <br />
                    <input ref={passwordlRef} type="password" name="password" placeholder="password"  />
                    <br />
                    <input type="submit" value="submit" />
                </form>
            </div>
        </div>
    );
};

export default UnControlledField;