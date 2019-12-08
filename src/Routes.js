import React from 'react'
import {Route} from 'react-router-dom'
import Schedule from './Schedule'
import NavBar from './Navigation'
import AddTeam from './Team'
import TeamList from './Teamlist'



const Routes = () => {
        return(
            <div>
                <Route exact path = "/Nav" component = {NavBar} />
                <Route path = "/Schedule" component = {Schedule} />
                <Route path = "/Team" component = {AddTeam} />
                <Route path = "/List" component = {TeamList} />
            </div>
        )
}


export default Routes;