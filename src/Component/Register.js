import './Register.css'
import './Form.css'

const Register = () => {
    return(
        <> 
        <div className='main-bg-regis'>
            <div className='wrapper '>
             <form action="">
                 <h1>Sign Up</h1>
                   <div className='input-box'>
                       <input type="text" placeholder = 'Username' required />
                    </div>
                    <div className='input-box'>
                       <input type="text" placeholder = 'Email' required />
                    </div>
                    <div className='input-box'>
                       <input type="password" placeholder = 'Password' required />

                   </div>
                   <div className='input-box'>
                       <input type="password" placeholder = 'Confirm password' required />
                   </div>
                   <button type='submit'>Sign Up</button>

            </form>
            </div>
        </div>
        </>
       
         

    )

    };

    export default Register;