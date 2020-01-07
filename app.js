import React from  "./react";
import ReactDom from "./react-dom"
const type = "react";
const ele = (
    <div className='active' title={type} style={{width: '90%', color: 'red', fontSize: 14}}>
        hello,<span>{type}</span>
    </div>
);

console.log(ele);

ReactDom.render(ele, window.root);