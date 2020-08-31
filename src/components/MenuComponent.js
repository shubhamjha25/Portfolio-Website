import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Home from './Home/Home'
import About from './About/About'
import Education from './Education/Education'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Loading from './LoadingComponent';
import './Menu.css'
import 'font-awesome/css/font-awesome.min.css';
import { Switch, Route, Redirect } from "react-router-dom";

const Menu = () => {
    return(
        <>
            <Sidebar />
            <div className="main">
            <Switch>
                <Route exact path="/" component = {Home} />
                <Route exact path="/about" component = {About} />
                <Route exact path="/education" component= {Education} />
                <Route exact path="/skills" component = {Skills} />
                <Route exact path="/projects" component = {Projects} />
            </Switch>
            </div>
        
        </>
    );
}

class Main extends React.Component {

    state={ loadingTimeOver: false}
  
    callLoader() {
    return <Loading />;
    }
    loadingOver(){
      return <Menu />;
    }

    componentDidMount(){
      setTimeout(() =>{
        this.setState( {loadingTimeOver: true})
      },3000);
    }
    render(){
      return this.state.loadingTimeOver === false ? this.callLoader() : this.loadingOver();
    }
}

export default Main;