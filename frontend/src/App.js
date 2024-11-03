import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './screens/HomeScreen';
import ListingScreen from './screens/ListingScreen';
import ViewListingScreen from './screens/ViewListingScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/listings" element={<ListingScreen />} />
        <Route path="/listing/:id" element={<ViewListingScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
