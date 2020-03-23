import React,{ReactElement,FC} from 'react';
import './Boxes.css';
import Box from "./Box"

type BoxRow = {
    array:boolean[]|string[]|any,
    clickBox:(x:number,y:number)=>void,
    rowIndex:number
}

const BoxRow:FC<BoxRow> = (props:BoxRow) => {
    return (
        <div>
            <div className='boxes-block__row'>
                {props.array.map((element:boolean|string,index:number):ReactElement => <Box element={element} xPoint={props.rowIndex} yPoint={index} key={index} clickBox={props.clickBox}/>)}
            </div>
        </div>
    )
};



export default BoxRow