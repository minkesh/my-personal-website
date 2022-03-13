import { useNavigate } from "react-router-dom";

const Blog = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <h2>Blog page</h2>
            <div className="d-flex flex-row gap-3">
                <button onClick={() => navigate('/my-personal-website/user/1')} className="btn btn-primary">User 1</button>
                <button onClick={() => navigate('/my-personal-website/user/2')} className="btn btn-primary">User 2</button>
                <button onClick={() => navigate('/my-personal-website/user/3')} className="btn btn-primary">User 3</button>
            </div>
        </div>
    )
}

export default Blog;
