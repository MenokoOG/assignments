import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute(props) {
    const {token, children} = props
    return token ? children : <Navigate to={redirectTo} />
}
export default ProtectedRoute


/* 
<ProtectedRoute>
<component /> // access through React.children
</ProtectedRoute>
*/