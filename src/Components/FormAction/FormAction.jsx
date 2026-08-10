

const FormAction = () => {

    const handelFormAction = (formData) =>{
        console.log(formData.get('name'));
        console.log(formData.get('email'));
    }

    return (
        <div>
            <form action={handelFormAction}>
                <input type="text" name="name" placeholder="Your name" />
                <br />
                <input type="email" name="email" placeholder="Your mail" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default FormAction;