import { createContext, useState } from "react";

const LikesContext = createContext({
    likeCount: 0,
    incrementLike: () => {}
});

const LikesContextProvider = (props) => {
    const { children } = props;
    const [likeCount, setLikeCount] = useState(0);

    const incrementLike = () => {
        setLikeCount((count) => count + 1);
    }

    return (
        <LikesContext.Provider value={{
            likeCount,
            incrementLike
        }}>
            { children }
        </LikesContext.Provider>
    )
};

export default LikesContext;
export { LikesContextProvider };
