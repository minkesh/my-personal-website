import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LikesContextProvider } from './context/LikesContext';

import './index.css';

import App from './App';
import Home from './pages/home';
import Blog from './pages/blog';
import User from './pages/user';
import NotFound from './pages/not-found';
import UserDetails from './components/user-details';
import { LikesContextProvider } from './context/LikesContext';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <LikesContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/my-personal-website" element={<App />}>
            <Route path="blog" element={<Blog />} />
            <Route path="user" element={<User />}>
              <Route
                index
                element={
                  <div>
                    This is index path of user route
                  </div>
                }
              />
              <Route path=":userId" element={<UserDetails />} />
            </Route>
            <Route path="home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LikesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
