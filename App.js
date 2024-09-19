// we have created 2 div they are sibling to each other 
// We have 1 parent only

const parent = React.createElement(
    "div",
    { id:"Parent"},
    [
        React.createElement("div",{id:"child"}, [
            React.createElement("h1",{id:"h1"},"I am h1 tag"),
            React.createElement("h2",{id:"h2"}, "I am h2 tag")
        ]),
        React.createElement("div",{id:"child2"}, [
            React.createElement("h1",{id:"h1"},"I am sibling h1 tag"),
            React.createElement("h2",{id:"h2"},"I am sibling H2 tag")
        ])
    ]
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);