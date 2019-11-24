import React from 'react'
import {Route} from 'react-router-dom'
import Schedule from './Schedule'
import NavBar from './Navigation'
import AddTeam from './Team'



const Routes = () => {
        return(
            <div>
                <Route exact path = "/Nav" component = {NavBar} />
                <Route path = "/Schedule" component = {Schedule} />
                <Route path = "/Team" component = {AddTeam} />
            </div>
        )
}


export default Routes;