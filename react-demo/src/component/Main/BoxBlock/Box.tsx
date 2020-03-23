import React,{FC} from 'react';
import './Boxes.css';

type BoxProps = {
    element:boolean|string,
    clickBox:(x:number,y:number)=>void,
    xPoint:number,
    yPoint:number
}

const Box:FC<BoxProps> = (props:BoxProps) => {
    return (
        <div className='boxes-block__box' onClick={()=>props.clickBox(props.xPoint,props.yPoint)}>
            <div className={props.element? "animation" :"none"}>{props.element}</div>
        </div>
    )
};





export default Box