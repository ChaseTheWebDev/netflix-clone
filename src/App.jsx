import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingView from './views/LandingView';

export default function App() {

  return (
   <div>
    <Router>
      <Routes>
        <Route path='/' element={<LandingView />} />
      </Routes>
    </Router>
   </div>
  );
}
