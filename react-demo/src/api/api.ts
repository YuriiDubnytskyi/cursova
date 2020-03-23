import axios from 'axios';

export const put = (data:{name:string,surname:string,score:number}) => axios.put("/update",data);

export const getALL = () => axios.get("/users");

export const post = (data:{name:string,surname:string}) => axios.post('/add', data);

export const getOne = (surname:string, name:string) => axios.get("/find/"+surname+"/"+name);