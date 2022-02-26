//libraries
import { Routes, Route } from 'react-router-dom';
//components
import Landing from './landing/Landing';
import LandingIndex from './landing/LandingIndex';
import Hi from './landing/Hi';
import Dog from './landing/Dog';
import Projects from './landing/Projects'

function App() {

  return (
    <>
      <Routes>

        <Route path="/*" element={<Landing />}>
          <Route index element={<LandingIndex />} />

          <Route path="hi" element={<Hi />} />
          <Route path="dog" element={<Dog />} />
          <Route path="projects" element={<Projects />} />

        </Route>



      </Routes>


    </>
  );
}

export default App;
