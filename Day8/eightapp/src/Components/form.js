import { useRef, useState } from 'react'
const NavBar = () => {
    const [visible, setVisible] = useState(false);
    const toggle = () => {
        setVisible(!visible)
    }
    const username = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const confirmpassword = useRef(null)
    const [errors,setErrors]=useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''
    })
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const Login = (e) => {
        e.preventDefault();
        const data ={
            username:username.current.value,
            email:email.current.value,
            password:password.current.value,
            confirmpassword:confirmpassword.current.value,
        }
        console.log(data.username.length)
        if(data.username.length===0){
            setErrors({ ...errors,uername:'username is empty!'});
        }
        else if(data.username.length < 6){
            setErrors({...errors,username: 'min 6 chars'});
        }
        else{
            setErrors({...errors,username:''});
        }
        if(data.email.length===0){
            setErrors({ ...errors,email:'email is empty!'});
        }
        else if(!emailRegex.test(data.email)){
            setErrors({...errors,email: 'Invalid '});
        }
        else{
            setErrors({...errors,username:''});
        }

        if(data.password.length===0){
            setErrors({ ...errors,password:'enter the password!'});
        }
        else if(data.password.length < 6){
            setErrors({...errors,password: 'min 6 chars'});
        }
        else{
            setErrors({...errors,password:''});
        }
            username.current.value=''
            email.current.value=''
            password.current.value=''
            confirmpassword.current.value=''

    }
    return (
        <>
            <div>
                <div className="navbar">
                    <div className="navtitle">
                        Hello world
                    </div>
                    <ul className="navlinks">

                        <li>
                            Home
                        </li>

                        <li>
                            About
                        </li>
                        <li>
                            Contact
                        </li>
                        <li onClick={toggle}>
                            Login
                        </li>
                    </ul>
                </div>
                {visible ? (
                    <div className='card-wrapper'>
                        <div className="">
                            <h2 className="auth-title">Login</h2>
                            <form className="auth-container h-30v shadow" onSubmit={Login}>
                                <input type="text" name="" id="username" placeholder="Username" className="auth-input" ref={username} />
                                {
                                    errors.username ===''?
                                    ''
                                    :
                                    <span className='error-comp'>
                                        {errors.username}
                                    </span>
                                }
                                <input type="email" name="" id="email" placeholder="email" className="auth-input" ref={email} />
                                <input type="password" name="" id="password" placeholder="Password" className="auth-input" ref={password} />
                                {
                                    errors.password == ''?
                                    ''
                                    :
                                    <span className='error-comp'>
                                        {errors.password}
                                    </span>
                                }
                                <input type="password" name="" id="confirmpassword" placeholder="ConfirmPassword" className="auth-input" ref={password} />
                                <span className='btn-container'>
                                    <input type="submit" value="Login" className="auth-btn w-50" />
                                    <button className='cancel-btn w-50' onClick={toggle}>Cancel</button>
                                </span>
                            </form>
                        </div>
                    </div>
                ) : ('')
                }
            </div>
        </>
    )
}

export default NavBar