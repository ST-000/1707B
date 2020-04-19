import React from 'react';
import {IListItem} from '../type'

// interface IProps{
//     list:IListItem[],
//     changeState:(id:number)=>void
// }
interface IProps{
  list:IListItem[],
  removeList:(id:number)=>void
}
const List:React.FC<IProps> = props=>{
  return <>
    {
        props.list.map((item,index)=>{
            return <li key={item.id}  style={{background:index % 2?"red":"orange"}}>
                <span>{item.id}</span>
                <span>{item.name}</span>
                <span>{item.timestamp}</span>
                <button onClick={()=>props.removeList(item.id)}>删除</button>
            </li>
        })
    }
  </>
}
export default List
// {textDecoration:item.finish?'line-through':'none'}
// onClick={()=>props.changeState(item.id)}