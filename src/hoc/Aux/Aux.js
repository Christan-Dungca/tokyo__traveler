// This component wraps whatever is passed into them, so that a new DOM node (like a div) doesn't have to be created 

const aux = (props) => props.children;

export default aux;
