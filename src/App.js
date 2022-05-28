import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import QuizList from "./components/quiz"
import AddQuiz from "./components/addQuiz";
import EditQuiz from "./components/editQuiz";
import Home from "./components/Home";
import Score  from "./components/score";
import Category from "./components/category";

function App() {
  return (
    <Router>
          <Switch>
           <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/admin">
                <QuizList />
              </Route>
              <Route exact path="/scoreboard">
                <Score/>
              </Route>
              <Route exact path="/add">
                <AddQuiz />
              </Route>
              <Route exact path="/category">
                <Category />
              </Route>
              <Route exact path="/edit/:id">
                <EditQuiz />
              </Route>
           </Switch>
      
    </Router>
  );
}

export default App;
