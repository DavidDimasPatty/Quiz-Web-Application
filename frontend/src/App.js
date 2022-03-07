import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import QuizList from "./components/quiz"
import AddQuiz from "./components/addQuiz";
import EditQuiz from "./components/editQuiz";

function App() {
  return (
    <Router>
    <div className="containter">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
           <Switch>
              <Route exact path="/">
                <QuizList />
              </Route>
              <Route exact path="/add">
                <AddQuiz />
              </Route>
              <Route exact path="/edit/:id">
                <EditQuiz />
              </Route>
           </Switch>
        </div>
      </div> 
    </div>
    </Router>
  );
}

export default App;
