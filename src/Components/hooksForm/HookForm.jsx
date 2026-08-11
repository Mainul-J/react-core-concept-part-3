// rafce

import useInputField from "../../hooks/useInputField";

const HookForm = () => {
    const [name,nameOnChange] = useInputField('')
    const [email, emailOnChange] = useInputField('')

    const handleSubmit = e =>{
        e.preventDefault();
        console.log('submit',name,email);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input defaultValue={name} type="text" onChange={nameOnChange}  />
            <br />
            <input defaultValue={email} type="email" name="email" onChange={emailOnChange} />
            <br />
            <input type="submit" value="submit" />
        </form>
        
    </div>
  )
}

export default HookForm;