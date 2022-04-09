
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { users } from "../data/user-data";
import { BsHeart } from 'react-icons/bs';
import LikesContext from "../context/LikesContext";


const UserDetails = () => {
    // access user id from url params
    const params = useParams();
    const { userId } = params;
    const { incrementLike } = useContext(LikesContext);

    const getUserName = () => {
        const userData = users.find(({ id }) => id === userId);
        if (!userData) {
            return 'No User Found';
        }

        return userData.name;
    };

    return (
      <div className="p-5 mt-5 bg-light">
        <h4>User Details</h4>
        <div>Username: {getUserName()}</div>
        <button className="mt-3 btn btn-primary" onClick={incrementLike}>
          <BsHeart /> Like
        </button>
      </div>
    );
};

export default UserDetails;
