import React, { useEffect, useState } from 'react'
import './RowPosters.css'
import { instance as axios } from '../../axios'
import { API_KEY, imageUrl } from '../../Constants/Constants'
import YouTube from 'react-youtube'
function RowPost(props) {
    const [movie, setMovie] = useState();
    const [UrlId, setUrlId] = useState('');

    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data.results);
            setMovie(response.data.results)
        })
    }, []);
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    const handleMovie = (id) => {
        console.log(id);
        const key = `movie/${id}/videos?api_key=${API_KEY}`;
        axios.get(key).then((response) => {
            if (response.data && response.data.results && response.data.results.length > 0) {
                console.log(response.data.results[0].key);
                setUrlId(response.data.results[0].key);
            } else {
                console.error("No video results found for this movie.");
                setUrlId('');
            }
        }).catch(error => {
            console.error("Error fetching movie videos:", error);
            setUrlId('');
        });
    }
    return (
        <div className='row'>
            <h2 className='title'>{props.title}</h2>
            <div className='posters'>
                {
                    movie ? movie.map((obj, index) => {
                        return (<img onClick={() => handleMovie(obj.id)} key={index} className={props.isSmall ? 'small_poster' : 'poster'} alt='poster' src={movie ? imageUrl + obj.backdrop_path : ""} />)
                    }) : ""
                }

            </div>
            {UrlId ? <YouTube videoId={UrlId} opts={opts} /> : "Error"}
        </div>
    )
}

export default RowPost