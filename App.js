// Nested


const heading = React.createElement("div", { id: "ashokFromReact" }, React.createElement("div", { id: "child" },[React.createElement("h1", { id: "ashokFromReact" }, "this is h1"), React.createElement("h2", { id: "ashokFromReact" }, "this is H2")],))
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)