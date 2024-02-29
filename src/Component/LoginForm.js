import './Form.css'
import './LoginForm.css';
import { FaUser , FaLock} from "react-icons/fa";

const LoginForm = () => {
return(
    <>
        <div className='main-bg-login'>
            <div className='wrapper'>
                <form action="">
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type="text" placeholder = 'Email or Username' required />
                        <FaUser className='icon'/>
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder = 'Password' required />
                        <FaLock className='icon'/>
                    </div>
                    <div className='remember-forgot'>
                        <label><input type="checkbox" />Remember me</label>
                        <a href='#sadsa'>Forgot Password</a>
                    </div>

                    <button type='submit'>Login</button>

                    <div className='register-link'>
                            <p>Don't have an account? <a href="/Register">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    </>

);


};

export default LoginForm;