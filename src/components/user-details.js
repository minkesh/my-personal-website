import { useParams } from "react-router-dom";
import { users } from "../data/user-data";


const UserDetails = () => {
    // access user id from url params
    const params = useParams();
    const { userId } = params;

    const getUserName = () => {
        const userData = users.find(({ id }) => id === userId);
        if (!userData) {
            return 'No User Found';
        }

        return userData.name;
    };

    return (
        <div>Username: {getUserName()}</div>
    );
};

export default UserDetails;
