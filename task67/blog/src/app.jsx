const React = require("react");
const ReactDOM = require("react-dom/client");
const store = require("./store.jsx");

const Provider = require("react-redux").Provider;

ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <Provider store={store}>
        <AppView/>
    </Provider>    
);