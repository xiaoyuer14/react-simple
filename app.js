import React from  "./react";
import ReactDom from "./react-dom"
const ele = (
    <div className='active' title='123'>
        hello,<span>react</span>
    </div>
);

console.log(ele);

ReactDom.render(ele, window.root);