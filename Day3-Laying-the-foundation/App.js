import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = (<h1 className="heading">Namaste React using JSX</h1>)

const Title = ()=> {
    return <h1>This is Title React Component </h1>
}

const HeaderComponent = ()=>{
    return <div>
        <Title />
        <h1>Namaste React Header Component</h1>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<HeaderComponent />);