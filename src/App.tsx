import { Route, Routes } from 'react-router-dom';
import Styled from 'styled-components';
// import * as Sentry from '@sentry/react';

import NavBar from 'components/misc/NavBar'; 
import Home from 'pages/Home';
import Results from 'pages/Results';
import About from 'pages/About';
import NotFound from 'pages/NotFound';
import Footer from 'components/misc/Footer';

const Container = Styled.main`
  margin: 0 auto;
  font-weight: normal;
`;

// Sentry.init({
//   dsn: 'https://30eb6135d37643fb95c7da4e77a46142@glitch.as93.net/1',
//   beforeSend(event) { // Check if error logging is disabled
//     const ignoredHosts = ['localhost', '127.0.0.1'];
//     const disableErrors = process.env.REACT_APP_DISABLE_ERROR_LOGGING;
//     if (disableErrors || ignoredHosts.includes(window.location.hostname)) {
//         return null;
//     }
//     return event;
//   }
// });

function App() {
  return (
    <Container className='container-fluid'>
      <NavBar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/results/:address" element={<Results />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
