const ReactDom = {
    render
};

function render(vNode, container) {

    if (vNode === undefined) {
        return;
    }
    if(typeof vNode === "string") {
        const textNode = document.createTextNode(vNode);
        return container.appendChild(textNode);
    }
    const { tag, attrs } = vNode;
    const dom = document.createElement(tag);

    if(attrs) {
        Object.keys(attrs).forEach(key => {
            const value = attrs[key];
            setAttribute(dom, key, value);
        })
    }

    return container.appendChild(dom);
}

// 设置属性
function setAttribute(dom, key, value) {
    // 属性名需要做判断转换
    switch(key) {
        case "className":
            key = "class"
        break;
        case "style":
            if(!value || typeof value === "string") {
                dom.style.cssText = value || "";
            }else if(value && typeof value === "object") {
                for(let k in value) {
                    dom.style[k] = typeof value[k] === "number" ? value[k] + "px" : value[k];
                }
            }
        break;
        default:
            // 是否时on开头的事件
            if(/on\w+/.test(key)) {
                key = key.toLowerCase();
                dom[key] = value || "";
            }else {
                // 其他属性
                if(key in dom) {
                    dom[key] = value || "";
                }
                if(value) {
                    dom.setAttribute(key, value);
                }else{
                    dom.removeAttribute(key);
                }
            }
        
        break;
    }

}

export default ReactDom;