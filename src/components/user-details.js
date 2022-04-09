
import { useContext } from 'react';
import { BsHeart } from 'react-icons/bs';
import { useParams } from "react-router-dom";
import { users } from "../data/user-data";
import LikesContext from '../context/LikesContext';

const UserDetails = () => {
    // access user id from url params
    const params = useParams();
    const { userId } = params;
    const { incrementLikesCount } = useContext(LikesContext);

    const getUserName = () => {
        const userData = users.find(({ id }) => id === userId);
        if (!userData) {
            return 'No User Found';
        }

        return userData.name;
    };

    return (
        <div className='pt-5 bg-light p-5'>
          <h3>User Details</h3>
          <div>Username: {getUserName()}</div>
          <button type="primary" className="mt-3 btn btn-primary" onClick={incrementLikesCount}>
            <BsHeart className='me-2' /> Like
          </button>
        </div>
    );
};

export default UserDetails;
