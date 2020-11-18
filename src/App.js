import React, {Component} from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Dashboard from "./components/dashboard/Dasboard"
import ProjectDetails from "./components/projects/ProjectDetails"
import RoutineDetails from "./components/routine/RoutineDetails"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import CreateProjects from "./components/projects/CreateProjects"
import Home from "./components/home/Home"
import User from "./components/user/User"
import ResultDetails from "./components/result/ResultDetails"
import Ayon from "./components/user/Ayon"
import Porag from "./components/user/Porag"
import CreateRoutine from "./components/routine/CreateRoutine"
import CreateResult from "./components/result/CreateResult"
import Hasan from "./components/user/Hasan"
import Akib from "./components/user/Akib"
import Robin from "./components/user/Robin"
import Rubab from "./components/user/Rubab"
import Jim from "./components/user/Jim"
import Monir from "./components/user/Monir"
import Turzo from "./components/user/Turzo"
import AyonResultDetails from './components/result/Ayon'
import PoragResultDetails from './components/result/Porag'
import HasanResultDetails from './components/result/Hasan'
import AkibResultDetails from './components/result/Akib'
import RobinResultDetails from './components/result/Robin'
import RubabResultDetails from './components/result/Rubab'
import JimResultDetails from './components/result/Jim'
import MonirResultDetails from './components/result/Monir'
import TurzoResultDetails from './components/result/Turzo'


class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/dash' component={Dashboard}></Route>
          <Route path='/project/:id' component={ProjectDetails}></Route>
          <Route path='/routine/:id' component={RoutineDetails}></Route>
          <Route path='/result/:id' component={ResultDetails}></Route>
          <Route exact path='/result' component={User}></Route>

          <Route exact path='/ayon' component={Ayon}></Route>
          <Route exact path='/ayon/:id' component={AyonResultDetails}></Route>

          <Route exact path='/porag' component={Porag}></Route>
          <Route exact path='/porag/:id' component={PoragResultDetails}></Route>

          <Route exact path='/hasan' component={Hasan}></Route>
          <Route exact path='/hasan/:id' component={HasanResultDetails}></Route>

          <Route exact path='/akib' component={Akib}></Route>
          <Route exact path='/akib/:id' component={AkibResultDetails}></Route>

          <Route exact path='/robin' component={Robin}></Route>
          <Route exact path='/robin/:id' component={RobinResultDetails}></Route>

          <Route exact path='/rubab' component={Rubab}></Route>
          <Route exact path='/rubab/:id' component={RubabResultDetails}></Route>

          <Route exact path='/jim' component={Jim}></Route>
          <Route exact path='/jim/:id' component={JimResultDetails}></Route>

          <Route exact path='/monir' component={Monir}></Route>
          <Route exact path='/monir/:id' component={MonirResultDetails}></Route>

          <Route exact path='/turzo' component={Turzo}></Route>
          <Route exact path='/turzo/:id' component={TurzoResultDetails}></Route>


          <Route path='/signin' component={SignIn}></Route>
          <Route path='/signup' component={SignUp}></Route>
          <Route path='/create' component={CreateProjects}></Route>
          <Route path='/admin/routine' component={CreateRoutine}></Route>
          <Route path='/admin/result' component={CreateResult}></Route>


        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
