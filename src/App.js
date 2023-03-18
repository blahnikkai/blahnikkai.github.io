import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import ProjectsPage from './Components/ProjectsPage';
import ExperiencePage from './Components/ExperiencePage';

function App() {
  return (
    <div className='App'>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/projects' element={<ProjectsPage/>}/>
                <Route path='/experience' element={<ExperiencePage/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
