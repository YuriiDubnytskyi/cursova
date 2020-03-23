import React ,{Component}from 'react';
import "./Login.css";
import * as API from '../../api/api'
import * as actionCreators from "../../store/actions/actions";
import {connect} from "react-redux";
import {IUserState} from "../../interfaces/IUserState";

type LoginProps = {
    history:any
    addUser:(name:string,surname:string,score:number)=>{result:boolean}
}

type LoginState = {
    name:string,
    surname:string
}

class Login extends Component<LoginProps, LoginState>{
    constructor(props:LoginProps) {
        super(props);
        this.state = {
            name:"",
            surname:""
        }
    }
    onChangeName = (e:any) => {
        this.setState({
            name: e.target.value
        });
    };
    onChangeSurname= (e:any) => {
        this.setState({
            surname: e.target.value
        });
    };
    sing = () => {
        const newUser = {
            name: this.state.name,
            surname: this.state.surname,
        };
        if(newUser.name === '' || newUser.surname === '' ){
            alert('The information is blank')
        }else{
            API.post(newUser)
                .then((res:any) => console.log(res.data))
                .then(() => this.props.history.push("/main/"))
            this.props.addUser(this.state.name,this.state.surname,0);
            this.setState({
                name: '',
                surname:""
            });
        }
    };
    login = () => {
        const newUser = {
            name: this.state.name,
            surname: this.state.surname,
        };
        if(newUser.name === '' || newUser.surname === '' ){
            alert('The information is blank')
        }else{
            API.getOne(newUser.surname,newUser.name)
                .then(res => !!res.data ? this.props.addUser(res.data.name,res.data.surname,res.data.score): {result:false})
                .then(res => res.result !== false ? this.props.history.push("/main/"): console.log("error"))
                .then(() => {
                    this.setState({
                        name: '',
                        surname:""
                    })
                });

            alert('Sucsses')
        }
    };

    render() {
        return (
            <div className="Login">
                <div className="AppLogin">
                    <div className="input-container">
                        <input type="text" placeholder="Name" onChange={this.onChangeName}/>
                    </div>
                    <div className="input-container">
                        <input type="text" placeholder="Surname" onChange={this.onChangeSurname}/>
                    </div>
                    <button type="submit" onClick={this.login}>Log In</button>
                    <button type="submit" onClick={this.sing}>Sing In</button>
                </div>
            </div>
        )
    }

}

const mapStateToProps = ( state:{ user:IUserState } ) => {
    return {
        state: state.user
    }
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        addUser: (name:string, surname:string, score:number) => dispatch(actionCreators.addUser(name, surname, score)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

