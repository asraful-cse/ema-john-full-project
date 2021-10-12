import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="form-style">
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your email" />
                    <br /><br />
                    <input type="password" name="" id="" placeholder="your password" />
                    <br /><br />
                    <input type="password" name="" id="" placeholder="re-enter  password" />
                    <br /><br />
                    <input type="submit" value="submit" />
                </form> 
                <p>Already have an account ? <Link to="/login" > 
                    Log In</Link></p>
                <div>-------------or------------</div>
                <button className="btn-regular"> Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;