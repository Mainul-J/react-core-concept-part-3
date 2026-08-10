
const SimpleFrom = () => {

    const handelSubmit = (e) =>{
        e.preventDefault();
        console.log('form submitted',e.target.name.value);
        console.log('form submitted',e.target.email.value);

    }

    return (
        <div>
            <form onSubmit={handelSubmit }>
                <input type="text" name="name" placeholder="Your name" />
                <br />
                <input type="email" name="email" placeholder="Your mail" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleFrom;