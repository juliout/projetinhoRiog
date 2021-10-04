import {BrowserRouter, Route , Switch} from 'react-router-dom'
import Home from './pages/home'
import Invalid from './pages/invalid'
import Perfil from './pages/Perfil'

export default function Routes(){
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/perfil/br/:id' component={Perfil}/>
            <Route exact path='*' component={Invalid}/>
            
        </Switch>
        </BrowserRouter>
    )
}