import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Male from '../../Image/Rectangle 28.png';
import Female from '../../Image/female.png';
import './LeagueDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'



const LeagueDetail = () => {
    const { idLeague } = useParams();
    const [league, setLeague] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    }, [idLeague])

    const { strLogo, strLeague, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strBanner, strTwitter, strFacebook, strYoutube } = league;

    let leagueImage;
    if ("Male" === strGender) {
        leagueImage = <img className="w-100" src={Male} alt="/"></img>
    }
    else if ("Female" === strGender) {
        leagueImage = <img className="w-100" src={Female} alt="/"></img>
    }
    else if ("Mixed" === strGender) {
        leagueImage = <img className="w-100" src={Female} alt="/"></img>
    }

    const leagueBanner = {
        width: "100vw",
        height: "60vh",
        backgroundRepeat: "noRepeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${strBanner})`
    }
    return (


        <div>
            <div className="  row m-0" style={leagueBanner}>
                <div className=" text-center logo" >

                    <img className="w- img-fluid mt-5 detailsLogo" src={strLogo} alt="" />

                </div>
            </div>
            <div className="container text-white mb-3 card-font">
                <div style={{ width: '100%' }}>
                    <div className="row  row-detail margin ml-5">
                        <div className="col-md-8 col-sm-12 card-gap ">
                            <div className="card-body">
                                <h5 className="card-title">{strLeague}</h5>
                                <p className="card-text"><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {intFormedYear}</p>
                                <p className="card-text"><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                                <p className="card-text"><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                                <p class="card-text"><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12 league-image mt-3 p-2 ">
                            <div>
                                {leagueImage}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    


            <div className="description-design">{strDescriptionEN}</div>
            <br />
            <div className="social-icon">
                <a href={`https://${strTwitter}`} target="_blank/"><FontAwesomeIcon className="icons fa-2x text-info bg-white rounded-circle p-2" icon={faTwitter} /></a>
                <a href={`https://${strFacebook}`} target="_blank/"><FontAwesomeIcon className="icons fa-2x text-primary bg-white rounded-circle p-2" icon={faFacebook} /></a>
                <a href={`https://${strYoutube}`} target="_blank/"><FontAwesomeIcon className="icons fa-2x text-danger bg-white rounded-circle p-2" icon={faYoutube} /></a>
            </div>
        </div>
    );
};

export default LeagueDetail;