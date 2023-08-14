const React = require("react");
const UserInfo = require("./UserInfo.jsx");
const FormAdd = require("./FormAdd.jsx");
const List = require("./List.jsx");
const {Route, Switch} = require("react-router-dom");


const AppView = () => {

    return <div>
        <Switch>
            <Route exact path="/" component={UserInfo}/>
            <Route path="/product/" component={List}/>
            <Route path="/product/add" component={FormAdd}/>
        </Switch>
    </div>;

}


module.exports = AppView;