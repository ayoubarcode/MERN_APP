import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import AuthContext from './../../context/auth/authContext'


const Navbar = ({title, icon}) => {

    const authContext = useContext(AuthContext)

    const { isAuthenticated, logout ,user  } = authContext

    const onLogout = () => {
        logout()
    }
    const authLinks = (
        <Fragment>
        <li>hello {user && user.name}</li>
        <li>
            <a onClick={onLogout} href="#!" >
                <i className="fas fa-sign-out-alt"></i>
                <span className="hide-sm">Logout</span>
            </a>
        </li>
        </Fragment>
    )

    const geussLinks =  (
        <Fragment>
        <li> <Link to='/'> Home</Link></li>
                <li> <Link to='/about'> About</Link></li>
                <li> <Link to='/login'> Login</Link></li>
         <li> <Link to='/register'>Register</Link></li>
        </Fragment>
    )

    return (
        <div className="navbar bg-primary">
            <h1>
                <i className={icon} />
                {title}
            </h1>

            <ul>
                { isAuthenticated  ? authLinks : geussLinks}
            </ul>
        </div>
   
   )
}


Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: "Contact",
    icon :"fas  fa-id-card-alt"
}

const addStyle= {
    marginLeft: "10px",
}

export default Navbar;