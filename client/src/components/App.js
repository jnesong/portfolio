import { Routes, Route } from 'react-router-dom';
import Landing from './LandingFolder/Landing';


function App() {

  return (
    <>
    <Routes>
      
      <Route path= "/*" element={<Landing />} />



    </Routes>

    
    </>
  );
}

export default App;
