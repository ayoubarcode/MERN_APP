import React , { useState, useContext, useEffect} from 'react'
import AuthContext from './../../context/auth/authContext'
import AlertContext from './../../context/alert/alertContext'

const Login = (props) => {

    const authContext = useContext(AuthContext)
    const alertContext = useContext(AlertContext)
    const { login,isAuthenticated,clearErrors,error} = authContext
    const { setAlert } = alertContext

    useEffect(() => {

        if(isAuthenticated) {
            props.history.push('/');
        }
        // if(error !== null) {
        //     setAlert(error, 'danger')
        //     clearErrors()
        // }
        //eslint-disable-next-line
    }, [error,isAuthenticated,props.history])
     

    const [user, SetUser] = useState({
        email: '',
        password: '',
    })

    const { email , password, } = user;

    const onChange = e =>  SetUser({...user, [e.target.name]: e.target.value});
    
    const onSubmit = e => {
        e.preventDefault();

       if(email === '' || password === '') {
        setAlert('Please fill in alll fields','danger');
       } else {
           login({
               email,
               password
           })
       }
    }
    return (
        <div className="form-container">
                <h1>
                Account <span className="text-primary"> Login</span>
                </h1>

                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="email"> Email </label>
                        <input type="email" name="email" value={email} onChange={onChange} />
                    
                    </div>

                    <div className="form-group">
                        <label htmlFor="password"> Password</label>
                        <input type="password" name="password" value={password} onChange={onChange} />
                    
                    
                    </div>
                        <input type="submit" value="login" className="btn btn-primary btn-block"/>
                    
                </form>
        </div>
    )
}


export default Login;
