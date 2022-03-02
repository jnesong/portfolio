//libraries
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
//landing components
import Landing from './landing/Landing';
import LandingIndex from './landing/LandingIndex';
import Hi from './landing/Hi';
import Dog from './landing/Dog';
import Projects from './landing/Projects'
//enneadrink components
import EnneaHome from "./enneadrink/EnneaHome";
import EnneadrinkInfo from "./enneadrink/EnneadrinkInfo";
import UserHome from "./enneadrink/user/UserHome";
import Journal from "./enneadrink/user/journal/Journal";
import Quiz from "./enneadrink/user/quiz/Quiz";
import Result from "./enneadrink/user/quiz/EnneadrinkResult";
import Description from "./enneadrink/Description";
import HealthDescription from "./enneadrink/HealthDescription";
import PracticesDescription from "./enneadrink/PracticesDescription";
import EnneadrinkIndex from "./enneadrink/EnneadrinkIndex";
import EnneaHomeIndex from "./enneadrink/EnneaHomeIndex";
import NewEntry from "./enneadrink/user/journal/NewEntry";
import History from "./enneadrink/user/journal/History";

function App() {

  const [displayedContent, setDisplayedContent] = useState("")

  function holdDisplay(content) {
    setDisplayedContent(content)
  }

  return (
    <>
      <Routes>

        <Route path="/*" element={<Landing />}>
          <Route index element={<LandingIndex />} />
          <Route path="hi" element={<Hi />} />
          <Route path="dog" element={<Dog />} />
          <Route path="projects" element={<Projects />} />
        </Route>

        <Route path="enneadrink/*" element={<EnneaHome />}>
          <Route index element={<EnneaHomeIndex />} />
          <Route path=":enneadrinkID" element={<EnneadrinkInfo holdDisplay={holdDisplay} />}>
            <Route index element={<EnneadrinkIndex />} />
            <Route path="about" element={<Description content={displayedContent} />} />
            <Route path="strengths" element={<Description content={displayedContent} />} />
            <Route path="weaknesses" element={<Description content={displayedContent} />} />
            <Route path="practices" element={<PracticesDescription content={displayedContent} />} />
            <Route path="health" element={<HealthDescription content={displayedContent} />} />
          </Route>
        </Route>

        <Route path="enneadrink/home" element={<UserHome />}>
          <Route path="enneadrink/quiz" element={<Quiz />} />
        </Route>

        <Route path="enneadrink/result/:enneadrinkID" element={<Result holdDisplay={holdDisplay} />} >
          <Route path="enneadrink/about" element={<Description content={displayedContent} />} />
          <Route path="enneadrink/strengths" element={<Description content={displayedContent} />} />
          <Route path="enneadrink/weaknesses" element={<Description content={displayedContent} />} />
          <Route path="enneadrink/practices" element={<PracticesDescription content={displayedContent} />} />
          <Route path="enneadrink/health" element={<HealthDescription content={displayedContent} />} />
        </Route>

        <Route path="enneadrink/journal" element={<Journal />}>
          <Route path="enneadrink/new" element={<NewEntry />} />
          <Route path="enneadrink/history" element={<History />} />
        </Route>

      </Routes>

    </>
  );
}

export default App;
