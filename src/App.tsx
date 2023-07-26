import { useState, useEffect } from 'react';
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import Header from './components/header/Header';
import Footer from './components/common/Footer';
import Loading from './components/common/Loading';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Settings from './pages/Settings';
import Article from './pages/Article';
import Profile from './pages/Profile';
import EditArticle from './pages/EditArticle';
import NewArticle from './pages/NewArticle';
import DisplayFrame from './pages/DisplayFrame';
import DisplayCarouselImg from './pages/DisplayCarouselImg';
import DisplayCarouselVideo from './pages/DisplayCarouselVideo';

import { getUser } from './api/user';
import { isLoggedInAtom, userAtom } from './atom';
import DisplayGalleryImg from './pages/DisplayGalleryImg';
import DisplayCustomGallery from './pages/DisplayCustomGallery';
import FileUpload from './pages/FileUpload';

const App = () => {
  const [loading, setLoading] = useState(true);
  const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);
  const setUser = useSetRecoilState(userAtom);

  useEffect(() => {
    const initApp = async () => {
      const hasToken = !!localStorage.getItem('jwtToken');
      if (!hasToken) return;
      try {
        const data = await getUser();
        const { email, username, bio, image } = data.user;
        setIsLoggedIn(true);
        setUser({
          email: email,
          username: username,
          bio: bio,
          image: image,
        });
      } catch (e: any) {
        localStorage.removeItem('jwtToken');
        setIsLoggedIn(false);
        setUser({
          email: '',
          username: '',
          bio: '',
          image: '',
        });
      }
    };

    initApp().then(() => setLoading(false));
  }, [setIsLoggedIn, setUser]);

  if (loading) return <Loading height={75} />;

  const onFileChange = (files: any) => {
    console.log(files);
  };

  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DisplayCustomGallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/article/:URLSlug" element={<Article />} />
          <Route path="/editor" element={<NewArticle />} />
          <Route path="/editor/:URLSlug" element={<EditArticle />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile/:userId/*" element={<Profile />} />
          <Route path="/displaybyframe" element={<DisplayFrame />} />
          <Route
            path="/displaybyCarouselImg"
            element={<DisplayCarouselImg />}
          />
          <Route
            path="/displaybyCarouselVideo"
            element={<DisplayCarouselVideo />}
          />
          <Route path="/displayGalleryImg" element={<DisplayGalleryImg />} />
          <Route
            path="/displayGalleryCustom"
            element={<DisplayCustomGallery />}
          />
          <Route path="/fileUpload" element={<FileUpload />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
};

export default App;
