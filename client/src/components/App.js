import { Routes, Route } from 'react-router-dom';
import Landing from './LandingFolder/Landing';
import Blank from './Projects/Blank';

function App() {

  return (
    <>
      <Routes>

        <Route path="/*" element={<Landing />}>

        <Route path=":project" element={<Blank />}/>


        </Route>



      </Routes>


    </>
  );
}

export default App;
