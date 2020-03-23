export interface IReduserState{
    game: boolean[][]|string[][],
    userPoint: number[][],
    compPoint: number[][],
    win: number,
    lose: number,
    draw: number,
    user: null|string,
    comp: null|string,
    retry: boolean,
    disable: boolean,
    winName: null|string
};