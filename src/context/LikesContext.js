import { createContext, useState } from 'react';

const LikesContext = createContext({
    likesCount: 0,
    incrementLikesCount: () => {}
});

const LikesContextProvider = ({ children }) => {
    const [likesCount, setLikesCount] = useState(0);

    const incrementLikesCount = () => setLikesCount((likes) => likes + 1);

    return (
        <LikesContext.Provider
            value={{
                likesCount,
                incrementLikesCount
            }}
        >
            {children}
        </LikesContext.Provider >
    )
}

export default LikesContext;
export { LikesContextProvider };
