import React from 'react';
import  {db} from './Firebase';
import {useState} from 'react';



const Fetch = () => {

 const [team, fetchTeam] = useState ({ name: [], leader: []})
 

const fetchRec = () => {
    db.collection('Teams')
    .get()
    .then( snapshot => {
        const teamLeader = snapshot.docs.map(doc => doc.data().Leader);
        fetchTeam({leader: teamLeader});

        const teamName = snapshot.docs.map(doc => doc.data().Team);
        fetchTeam({name: teamName});
    // fetchTeam({name : snapshot.docs.map(doc => doc.data().Team)});
    // fetchTeam({leader: snapshot.docs.map(doc => doc.data().Leader)});
})
}

console.log(team.name)
console.log(team.leader)



 return(
     <div>
         <button onClick = {fetchRec}> Click </button>
        <li key = {team.length}> {team.name}</li>
        <li key = {team.id}> {team.leader}</li>
     </div>
 )

};


export default Fetch;