/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, { useState, useEffect } from 'react';
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
import ImageUpload from './pages/ImageUpload';
import StartUpForm from './pages/StartUpForm';
import Horizontal1Frame from './pages/Horizontal1Frame';
import Horizontal4Frame from './pages/Horizontal4Frame';
import HorizontalMultiFrame from './pages/HorizontalMultiFrame';
import HorizontalWidget from './pages/HorizontalWidget';
import Vertical1Frame from './pages/Vertical1Frame';
import Vertical3Frame from './pages/Vertical3Frame';
import Vertical4Frame from './pages/Vertical4Frame';
import { Button, FormText } from 'react-bootstrap';
import useFirestore from './pages/hooks/useFirestore';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

const App = () => {
  const [loading, setLoading] = useState(true);
  const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);
  const setUser = useSetRecoilState(userAtom);
  const [fullScreenTrigger, setfullScreenTrigger] = useState(false);
  const [isFirstTrigger, setIsFirstTrigger] = useState(false);
  // const [toggle, setToggle] = useState(false);

  const handleChangeKeypress = event => {
    event.preventDefault();
    if (event.key === 'f11') setfullScreenTrigger(true);
    else setfullScreenTrigger(false);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLElement>) => {
    event.stopPropagation();
    if (event.key === 'F11' && isFirstTrigger) {
      setIsFirstTrigger(false);
      setfullScreenTrigger(false);
      return;
    }
    // eslint-disable-next-line no-restricted-globals
    else if (event.key === 'F11' && !isFirstTrigger) {
      setfullScreenTrigger(true);
      setIsFirstTrigger(true);
      // if(toggle) setfullScreenTrigger(false);
      console.log(event.key);
      return;
    }
  };

  const handlefullScreen = useFullScreenHandle();

  useEffect(() => {
    if (fullScreenTrigger) setIsFirstTrigger(!isFirstTrigger);
  }, []);

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

  // useEffect(() => {
  //   // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  //   handleChangeKeypress;
  // }, [fullScreenTrigger]);

  if (loading) return <Loading height={75} />;

  const onFileChange = (files: any) => {
    console.log(files);
  };

  return (
    <>
      <HashRouter>
        {!fullScreenTrigger && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
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
          <Route path="/imageUpload" element={<ImageUpload />} />
          <Route path="/horizontal1Frame" element={<Horizontal1Frame />} />
          <Route path="/horizontal4Frame" element={<Horizontal4Frame />} />
          <Route
            path="/horizontalMultiFrame"
            element={<HorizontalMultiFrame />}
          />
          <Route path="/horizontalWidget" element={<HorizontalWidget />} />
          <Route path="/vertical1Frame" element={<Vertical1Frame />} />
          <Route path="/vertical3Frame" element={<Vertical3Frame />} />
          <Route path="/vertical4Frame" element={<Vertical4Frame />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
        {!fullScreenTrigger && <Footer />}
        <input type="text" defaultValue={''} onKeyDown={handleKeyPress} />
      </HashRouter>
    </>
  );
};

export default App;
