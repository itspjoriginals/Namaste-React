import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement('div', { "id": "div1" }, [React.createElement('div', { "id": "div2" }, [React.createElement('h1', { "id": "heading1" }, "This is Tag1" ),
    React.createElement('h2', { "id": "heading2" }, "This is Tag2" )
    
] ),

React.createElement('div', { "id": "div2" }, [React.createElement('h1', { "id": "heading1" }, "This is Tag1" ),
    React.createElement('h2', { "id": "heading2" }, "This is Tag2" )
    
] )]);


// const heading = React.createElement('h1', {"id":"heading"}, "This is Tag1");

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);