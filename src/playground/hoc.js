// Higher Order component (HOC) -> A component (HOC) that renders another component
// To Reuse Code
// Render Hijacking
// Prop manipulation
// Abstract State


import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p> This info is : {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p> This is private info. Please do no share this</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? <WrappedComponent {...props} /> : <p>Please login to view the info</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)


// ReactDOM.render(<AdminInfo isAdmin={true} info="This is priveledged information" />, document.getElementById("app"))
ReactDOM.render(<AuthInfo isAuth={false} info="This is priveledged information" />, document.getElementById("app"))