import { Outlet } from "react-router-dom";

const User = () => {
    return (
        <div className="container">
            <h2>User Page</h2>
            <Outlet />
        </div>
    );
}

export default User;
