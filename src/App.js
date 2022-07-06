import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
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
import {Navigate} from "react-router";
import {withRouter} from "./hoc/WithRouter";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/Social-Network" element={<Navigate to={`/profile/${this.props.authorizedUserId}`}/>}/>
                        <Route path='/profile/:uid' element={<ProfileUserContainer store={this.props.store}/>}/>
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
    initialized: state.app.initialized,
    authorizedUserId: state.auth.userId
})

export default compose(withRouter,
    connect(mapStateToProps, {initializeApp}))(App);




