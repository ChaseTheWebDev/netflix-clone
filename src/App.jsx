import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingView from './views/LandingView';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/' element={<LandingView />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}
