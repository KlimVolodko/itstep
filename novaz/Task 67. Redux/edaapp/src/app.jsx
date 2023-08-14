const React = require("react");
const ReactDOM = require("react-dom/client");
const AppView = require("./components/AppView.jsx");
const Provider = require("react-redux").Provider; // 4 строка равносильно подключению в 5 строке 
const {ConnectedRouter} = require("connected-react-router"); // 4 строка равносильно подключению в 5 строке 

const {store, history} = require("./store.jsx");
const {Route, Switch} = require("react-router");

ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <>
                <Switch>
                    <Route exact path="/" component={AppView}/>
                </Switch>            
            </>
        </ConnectedRouter>
    </Provider> 
);