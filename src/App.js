import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'; 
import Authpage from './pages/auth.component';
import RecordData from './studentdetails/studentdetails.compon';
import JobsComponent from './Components/JobsListComponent/JobsListComponent';
 

function App(){
  return(
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Authpage/>}/>
    <Route path='/studentdetails' element={<RecordData/>}/>
    <Route path='/jobs' element={<JobsComponent/>}/>
    </Routes>
    </BrowserRouter>
  )
}

 
export default App;