const lines:number[][][] = [
    [[0,0],[0,1],[0,2]],
    [[1,0],[1,1],[1,2]],
    [[2,0],[2,1],[2,2]],
    [[0,0],[1,0],[2,0]],
    [[0,1],[1,1],[2,1]],
    [[0,2],[1,2],[2,2]],
    [[0,0],[1,1],[2,2]],
    [[0,2],[1,1],[2,0]]
];
const freePoints:number[][] = [
  [0,2],[2,0],[2,2],[0,0],[1,0],[1,2],[0,1],[2,1]
];

const getBotStepPoints = (
    game:boolean[][]|string[][],
    userPoint:number[][],
    botPoint:number[][]
    ) : {x?:number, y?:number ,result:boolean} => {

    if(userPoint.length === 1 || userPoint.length === 0){
        const points = firstPoint(game);
        return {x:points.x,y:points.y,result:true}
    }else{
        let didBotCanWin = botStartSearchPoints(findPoints,game,botPoint);
        if(didBotCanWin.result){
            return {x: didBotCanWin.x, y: didBotCanWin.y,result:true}
        }
        let didUserCanWin = botStartSearchPoints(findPoints,game,userPoint);
        if(didUserCanWin.result) {
            return {x: didUserCanWin.x, y: didUserCanWin.y,result:true}
        }else{
            return getBotFreePoints(game,freePoints)
        }
    }
};

const firstPoint = (
    arr:boolean[][]|string[][]
    ) : {x:number,y:number} => {

    if(!arr[1][1]){
        return {x:1,y:1}
    }else if(!arr[0][2]){
        return {x:0,y:2}
    }else{
        return {x:2,y:2}
    }
};

const botStartSearchPoints = (
    nameFun:(
        arrayEl:number[][],
        array:number[][],
        game:boolean[][]|string[][]) =>
        {x?:number,y?:number,result?:boolean},

    game:boolean[][]|string[][],
    array:number[][]
    ) : {x?:number,y?:number,result?:boolean}=> {

    for(const element of lines){
        const check = nameFun(element, array, game);
        if (check.result === true) {
            return {x: check.x, y: check.y ,result:check.result}
        }
    }
    return {result:false}
};


const findPoints = (
    arr1:number[][],
    arr2:number[][],
    arrGame:boolean[][]|string[][]
    ) : {x?:number,y?:number,result?:boolean} => {

    let answerCheck:number = 0;
    let answer:{x?:number, y?:number, result:boolean} = {x:0, y:0, result:false};
    arr2.forEach( (el2:number[]) => {
        arr1.filter( (el1:number[]) => {
            if(arraysCompare(el2, el1)){
                answerCheck++; if( answerCheck === 2 ){
                    answer = getBotPoints(arr1,arrGame);
                }
            }
        })
    });

    if(answer !== undefined && answer.result) {
        return {x: answer.x, y: answer.y, result: true}
    }else{
        return {result:false}
    }
};

const arraysCompare = (
    arr1:number[],
    arr2:number[]
    ): boolean =>
    arr1.every((element:number,index:number) => element === arr2[index]);

const getBotPoints = (
    arr:number[][],
    arrGame:boolean[][]|string[][]
    ) : {x?:number,y?:number,result:boolean} => {

    const answer = arr.filter((el:number[])=>{ if(!arrGame[el[0]][el[1]]){ return {x:el[0],y:el[1],result:true} } });
    if(answer.length!==0) {
        return {x: answer[0][0], y: answer[0][1], result: true}
    }else{
        return {result:false}
    }
};

const getBotFreePoints = (
    arr:boolean[][]|string[][],
    freePoints:number[][]
    ) : {x?:number,y?:number,result:boolean} => {

    if(arr[0][0] === "x" && arr[2][1] === "x" && !arr[2][0]){
        return {x: 2, y: 0, result: true}
    }
    const answer = freePoints.filter((el:number[])=>{ if(!arr[el[0]][el[1]]){ return {x:el[0],y:el[1],result:true} } });
    if(answer.length!==0) {
        return {x: answer[0][0], y: answer[0][1], result: true}
    }else{
        return {result:false}
    }
};

const checkWinPlayer = (
    lines:number[][],
    arrPoint:number[][],
    name:string
    ) : string|undefined => {

    if(lines.every((lineElement:number[])=>arrPoint.some((arrElement:number[])=>arraysCompare(arrElement,lineElement))) ) {
        return name
    }
};

const getWinner = (
    arrPoint:number[][],
    name:string
    ) : string|undefined =>{

    for(const element of lines){
        let showWinPlayer=checkWinPlayer(element,arrPoint,name);
        if(showWinPlayer){
            return showWinPlayer
        }
    }
};



export {getWinner,getBotStepPoints}