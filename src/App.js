import {HashRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import ProjectsPage from './Components/GridPages/ProjectsPage';
import ExperiencePage from './Components/GridPages/ExperiencePage';
import ActivitiesPage from './Components/GridPages/ActivitiesPage';

function App() {
  return (
    <div className='App'>
        <HashRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/projects' element={<ProjectsPage/>}/>
                <Route path='/experience' element={<ExperiencePage/>}/>
                <Route path='/activities' element={<ActivitiesPage/>}/>
            </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
