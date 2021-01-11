import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import {BrowserRouter} from "react-router-dom";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Header/>
                <Nav/>
                <Main   />
            </div>
        </BrowserRouter>
    );
}

export default App;
