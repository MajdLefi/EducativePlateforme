import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {getAuthUser} from './js/actions/authActions'
import Home from './components/pages/Home/Home'
import DashboardStudent from './components/pages/Dashboard/DashboardStudent/DashboardStudent'
import Dashboard from './components/pages/Dashboard/Dashboard'
import AuthPage from "./components/pages/AuthPage/AuthPage";
import BootcampsHome from "./components/pages/Home/BootcampsHome";
import BootcampsStudent from "./components/pages/Dashboard/DashboardStudent/Bootcamps/BootcampsStudent"
import BootcampsAdmin from "./components/pages/Dashboard/DashboardAdmin/Bootcamps/BootcampsAdmin"
import UsersPage from "./components/pages/Dashboard/DashboardAdmin/Users/UsersPage"
import PrivateRoute from './routes/PrivateRoute'

function App() {
  const dispatch = useDispatch();
  const getUser = () => dispatch(getAuthUser())

  useEffect(()=>{
    getUser();
  },[])
  return (
    <BrowserRouter>
      <switch>
        <Route exact path="/" component={Home}/>
        <PrivateRoute path="/dashboard" component={Dashboard}/>
        <PrivateRoute path="/dashbaord" component={DashboardStudent}/>
        <PrivateRoute path="/dash/MyBootcamps" component={BootcampsStudent}/>
        <PrivateRoute path="/dash/bootcamps" component={BootcampsAdmin}/>
        <PrivateRoute path="/dash/users" component={UsersPage}/>
        <Route exact path="/auth" component={AuthPage} />
        <Route exact path="/Bootcamps" component={BootcampsHome} />
      </switch>
    </BrowserRouter>


  );
}

export default App;
