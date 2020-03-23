import React,{FC} from 'react';
import './Header.css';

type HeaderProps = {
    gameX: () => void,
    gameO: () => void,
    disable:boolean,
    startRetryGame:()=>void,
    retry:boolean,
    win:number,
    lose:number,
    draw:number,
    winName:string|null,
    exit:()=>void
}


const Header:FC<HeaderProps> =(props:HeaderProps) => {
    return (
        <div className="header">
            <header className="header-title">Tic - Tac - Toe</header>
                <button className="choice" onClick={props.gameX} disabled={props.disable}>X</button>
                <button className="choice" onClick={props.gameO} disabled={props.disable}>O</button>
                <br/>
                <button className="start"
                        onClick={props.startRetryGame}>{props.retry ? "Retry" : "Start"}</button>
                <section className="box-info">
                    <div className="user">
                        <p>User</p>
                        <div>
                            <p>Win - {props.win}</p>
                            <p>Lose - {props.lose}</p>
                            <p>Draw - {props.draw}</p>
                        </div>
                    </div>
                    <div className="comp">
                        <p>Comp</p>
                        <div>
                            <p>Win - {props.lose}</p>
                            <p>Lose - {props.win}</p>
                            <p>Draw - {props.draw}</p>
                        </div>
                    </div>
                </section>
                <section className="text-finish" id="finish">
                    <div>{props.winName}</div>
                </section>
                <button className="choice" onClick={props.exit} >Exit and Save</button>
        </div>
    )
};


export default Header