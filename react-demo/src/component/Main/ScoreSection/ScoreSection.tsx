import React,{Component} from 'react';
import * as API from '../../../api/api'

type ScoreSectionState = {
    users:{name:string,score:number}[],
    empty:boolean
}

class ScoreSection extends Component<{},ScoreSectionState>{
    constructor(props:any){
        super(props);
        this.state={
            users:[],
            empty:true
        }
    }
    componentDidMount(){
        API.getALL()
            .then(res => this.setState({users:res.data.slice(0,10),empty:false}))
    }
    render() {
        console.log(this.state.users&&this.state.users.length);
        return (
            <div>
                {!this.state.empty ?
                    this.state.users.map((el:{name:string,score:number})=> <div>Name user is : <p>{el.name}</p><p>Score is : {el.score}</p><hr/></div>)
                :<p>here</p>
                }
            </div>
        )
    }
}



export default ScoreSection