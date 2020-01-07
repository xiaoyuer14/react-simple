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
    const { tag } = vNode;
    const dom = document.createElement(tag);

    return container.appendChild(dom);
}

export default ReactDom;