import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { config } from './config/config';
import Header from './components/Header';
import Footer from './components/Footer';
import UniversityWrapper from './container/UniversityWrapper';
import UniversityDetails from './container/UniversityDetails';
import PageNotFound from './container/PageNotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header title={config.title} />
        <div className="main">
          <Routes>
            <Route path="/" element={<UniversityWrapper />} />
            <Route path="university-details" element={<UniversityWrapper />} />
            <Route path="university-details/:universityId" element={<UniversityDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer title={config.title} />
      </BrowserRouter>
    </>
  );
}

export default App;