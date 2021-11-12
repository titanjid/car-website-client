import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from './../Hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { user,loding,isAdmin } = useAuth();
    if(loding){
        return <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user?.email && isAdmin? children : <Redirect
                to={{
                    pathname: "/home",
                    state: { from: location }
                }}
            ></Redirect>

            }
        >

        </Route>
    );
};

export default AdminRoute;