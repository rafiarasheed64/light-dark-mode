import React, { useState } from 'react'
import Data from './Data'

const Darkmode = () => {
    const [info] =useState(Data)
    const [dark,setDark] = useState(false)
    function darker (){
        setDark(!dark)
    }
    const themestyle={
        background:dark?'black':'white',
        // color:dark?'white':'black',
        red:dark?'pink':'red',
        green:dark? 'darkolivegreen':'green',
        orange:dark? 'yellowgreen':'orange',
        blue:dark? 'skyblue':'blue',
        purple:dark? 'darkorchid':'purple'
    }


  return (
    <div style={{width:'50%',padding:'20px',...themestyle}}>
        <button style={{padding: '10px 20px',cursor:'pointer',fontSize:'18px'}} onClick={darker}>{dark?'light':'dark'}</button>
        {info.map((item)=>{
            return(
                <div>
                <img style={{height:'120px', width:'120px',borderRadius: '50%',marginTop:'30px'}} src={item.image} alt="" />
                <h2 style={{color:themestyle.red}}>{item.name}</h2>
                <h3 style={{color:themestyle.green}}>{item.age}</h3>
                <h3 style={{color:themestyle.orange}}>{item.ethnicity}</h3>
                <h3 style={{color:themestyle.blue}}>{item.phone}</h3>
                <h4 style={{color:themestyle.purple}}>{item.email}</h4>
                </div>
                )
        })}

    </div>
  )
}

export default Darkmode