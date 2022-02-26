import { Routes, Route } from 'react-router-dom';
import Landing from './landing/Landing';
import Hi from './landing/Hi';
import Dog from './landing/Dog';
import Projects from './landing/Projects'

function App() {

  return (
    <>
      <Routes>

        <Route path="/*" element={<Landing />}>

          <Route path="hi" element={<Hi />} />
          <Route path="dog" element={<Dog />} />
          <Route path="projects" element={<Projects />} />

        </Route>



      </Routes>


    </>
  );
}

export default App;
