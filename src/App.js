import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from './components/Header';
import Footer from './components/Footer';
import SEO from './components/SEO';
import Home from './pages/Home.js';
import About from './pages/About.js';
import OurTeam from './pages/OurTeam.js';
import Tech from './pages/Tech.js';
import Blog from './pages/Blog.js';
import BlogSingle from './pages/BlogSingle.js';
import ContactUs from './pages/ContactUs.js';
import ThankYou from './pages/ThankYou';
import Careers from './pages/Careers.js';
import CareerCategory from './pages/CareerCategory.js';
import { withTranslation } from 'react-i18next';
import i18n from './i18nextConf';

function App({ t, i18n }) {
  const currentLanguage = i18n.language;

  const seoData = t('SEO', { returnObjects: true});

  return (
    <div className="App" lang="he" dir="auto">
        <Header/>
        { seoData && <SEO data={ seoData } /> }
        <Routes>
          <Route exact={ true } path="/"                            element={ <Home/> } />
          <Route exact={ true } path="/Home"                        element={ <Home/> } />
          <Route exact={ true } path="/About"                       element={ <About/> } />
          <Route exact={ true } path="/OurTeam"                     element={ <OurTeam/> } />
          <Route exact={ true } path="/Tech"                        element={ <Tech/> } />
          <Route exact={ true } path="/Blog"                        element={ <Blog data={ t('BLOG', { returnObjects: true}) } /> } />
          <Route exact={ true } path="/BlogSingle/:page/:id"        element={ <BlogSingle /> } />
{/*           <Route exact={ true } path="/Careers"                     element={ <Careers data={ t('CAREERS', { returnObjects: true}) }/> } />
          <Route exact={ true } path="/CareersCategory/:category"   element={ <CareerCategory data={ t('CAREERS', { returnObjects: true}) }/> } />
          <Route exact={ true } path="/careers/:category/:id"       element={ <Careers /> } /> */}
          <Route exact={ true } path="/Contact-Us"                  element={ <ContactUs/> } />
          <Route exact={ true } path="/thank-you"                   element={ <ThankYou/> } />
        </Routes>
        <Footer/>
    </div>
  );
}

export default withTranslation('main')(App);
