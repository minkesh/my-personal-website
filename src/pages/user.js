import { Outlet } from "react-router-dom";

const User = () => {
    return (
        <div className="container text-center mb-5">
            <h1>User Page</h1>
            <div className="mt-5">
                <Outlet />
            </div>
        </div>
    );
}

export default User;
