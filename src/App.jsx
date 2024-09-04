import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingView from './views/LandingView';
import Footer from './components/Footer';
import NotFound from './views/NotFound';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path='/' element={<LandingView />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
