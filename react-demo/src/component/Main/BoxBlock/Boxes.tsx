import React,{ReactElement,FC} from 'react';
import './Boxes.css';
import BoxRow from './BoxRow'

type BoxesProps = {
    game:boolean[][]|string[][]|any,
    clickBox:(x:number,y:number)=>void
}

const Boxes:FC<BoxesProps> = (props:BoxesProps) => {
    return (
        <div>
            <div className='boxes-block'>
                {props.game.map((element:boolean[]|string[],index:number):ReactElement => <BoxRow array={element} rowIndex={index} key={index} clickBox={props.clickBox}/>)}
            </div>
        </div>
    )
};


export default Boxes