import React, { useEffect, useState }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { Button,Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './League.css';



const League = (props) => {
    const { strLeague, strSport, idLeague} = props.league;

    const [league, setLeague] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
        .then(res => res.json())
        .then(data => setLeague(data.leagues[0]));


    }, [idLeague])
    const history = useHistory();
    const showLeagueDetail = idLeague => {
        const url = `league/${idLeague}`;
        history.push(url);
    }
    return (
        <div className=" mt-4 mb-4">
            <div className="card container" style={{ width: '20rem' }}>
               <img src={league.strBadge} className="card-img-top img-size p-5" alt="..." />
               <div class="card-body">
                  <h5 className="card-title">{strLeague}</h5>
                   <p>Sports Type: {strSport}</p>
                <button className="btn btn-success  " onClick={() =>showLeagueDetail (idLeague)}> Explore <FontAwesomeIcon icon={faArrowRight} /></button>
               </div>
                
            </div >
              
        

        </div>
       
        
    );
};


export default League;