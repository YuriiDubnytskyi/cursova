import React ,{Component}from 'react';
import './App.css';
import Main from './component/Main/Main'
import Login from "./component/Login/Login"
import { BrowserRouter ,Switch,Route} from 'react-router-dom';

class  App extends Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>

                        <Route path="/" exact component={Login} />
                        <Route path="/main/" exact component={Main} />

                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;