import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes, useHistory} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsConteiner from "./components/Dialogs/DialogsConteiner";
import UsersConteiner from "./components/Users/UsersConteiner";
import ProfileUserContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import React from "react";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import {useNavigate} from "react-router";

export const withRouter = (Component) => {
    const Wrapper = (props) => {
        const history = useNavigate();

        return (
            <Component
                history={history}
                {...props}
            />
        );
    };

    return Wrapper;
};

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/:uid' element={<ProfileUserContainer store={this.props.store}/>}>
                            {/*<Route path=':uid' element={<ProfileUserContainer store={props.store}/>}/>*/}
                        </Route>
                        <Route path='/dialogs/' element={<DialogsConteiner store={this.props.store}/>}>
                            <Route path=':id' element={<DialogsConteiner store={this.props.store}/>}/>
                        </Route>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/users' element={<UsersConteiner/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                </div>

            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(withRouter,
    connect(mapStateToProps, {initializeApp})) (App);




