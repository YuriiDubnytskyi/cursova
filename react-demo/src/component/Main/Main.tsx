import React ,{Component}from 'react';
import '../../App.css';
import Header from './Header/Header'
import Boxes from './BoxBlock/Boxes'
import UserInfo from './UserInfo/UserInfo'
import * as API from '../../api/api'
import ScoreSection from './ScoreSection/ScoreSection'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {
    restart,
    addScore,
    exit,
    startGameForO,
    setPoint,
    startGameForX,
    winGame
} from "../../store/actions/actions"
import {getWinner,getBotStepPoints} from '../../service/service'
import './Main.css'
import {IUserState} from "../../interfaces/IUserState";
import {IReduserState} from "../../interfaces/IReduserState";

type MainProps = {
    state:IReduserState,
    userDate:IUserState,

    setPoint:(x:number|undefined,y:number|undefined,opponent:string|null,variable?:string)=>{}//redux typescript to do,
    startGameForO:()=>void,
    winGame:(result:string,resultName:string)=>void,
    exit:()=>void,
    restart:()=>void,
    history:any,
    addScore:(win:number,lose:number,draw:number)=>void,
    startGameForX:()=>void,
}




class  Main extends Component<MainProps>{

    firstBotStep = () : void => {
        this.props.setPoint(1, 1, "x")
    };

    gameO = () : void => {
        this.props.startGameForO();
        this.firstBotStep()
    };


    showWin = (whoWin:string) : boolean => {
        if(whoWin === "User"){
            this.props.winGame("win","User");
        }else if(whoWin === "Comp"){
            this.props.winGame("lose","Computer");
        }
        return true
    };

    save = () : void => {
        const newUser : { name:string, surname:string, score:number } = {
            name:this.props.userDate.userName,
            surname:this.props.userDate.userSurname,
            score:this.props.userDate.score+this.props.userDate.addScore
        };
        API.put(newUser)
            .then(res => console.log(res.data))
            .then(()=> this.props.exit())
            .then(()=> this.props.restart())
            .then(() => this.props.history.push("/"));
    };

    clickBox = (x:number,y:number):void => {
        const {game, userPoint, compPoint, user, comp}:IReduserState = this.props.state;
        if(!game[x][y] && user) {
            this.props.setPoint(x, y, user, "first");
            let getWinnerPlayer = getWinner(userPoint,"User");
            if(getWinnerPlayer){
                this.showWin(getWinnerPlayer);
                return
            }
            let points = getBotStepPoints(game, userPoint, compPoint);
            if(points.result) {
                this.props.setPoint(points.x, points.y, comp);
            }
            getWinnerPlayer = getWinner(compPoint,"Comp");
            if(getWinnerPlayer){
                this.showWin(getWinnerPlayer);
                return
            }
            if(userPoint.length+compPoint.length === 9){
                this.props.winGame("draw","Draw");
            }
        }
    };

    render(){
        const {win, lose, draw, retry, disable, winName, game}:IReduserState = this.props.state;
        return (
            <div className="App">
            <div className="row main-content">
                    <UserInfo/>
                    <Header
                            gameX={this.props.startGameForX}
                            gameO={this.gameO}
                            startRetryGame={()=> {
                                this.props.restart();
                                this.props.addScore(win,lose,draw);
                            }}
                            win={win}
                            lose={lose}
                            draw={draw}
                            retry={retry}
                            disable={disable}
                            winName={winName}
                            exit={this.save}
                    />
                    <ScoreSection/>
            </div>
                <Boxes clickBox={this.clickBox}
                       game={game}
                />
        </div>
        );
    }
}

const mapStateToProps = (state:{reduc:IReduserState,user:IUserState}) => {
    return {
        state: state.reduc,
        userDate:state.user
    }
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        dispatch,
        ...bindActionCreators({
            restart,
            addScore,
            exit,
            startGameForO,
            setPoint,
            startGameForX,
            winGame},
            dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);