import './moviecard.css';
import {Card} from '@material-ui/core';
import Description from '../../pages/description/description'
import {useHistory} from 'react-router-dom';

const Moviecard = (props)=>{
    const history = useHistory();
    const navigate = (path) => {
      history.push(path);
    };
    
    return(
        <Card style={{borderRadius:'2rem 5rem', backgroundColor:'rgba(187, 255, 0, 0.781)'}}
            className={'cardStyle'}
            onClick={()=>navigate("/description")} >
            <h1>Votre film</h1>
            <h3> Le titre : {props.title} </h3>
            <h3> Description : {props.description} </h3>
            <h3> Note : {props.rate} </h3>
            <h3>Lien :</h3> 
            <div className={'videoC'}>
            <iframe src={props.url}
                frameborder='0'
                allow='autoplay; encrypted-media;'
                allow='FullScreen'
                title='video'/>
            
            </div>

        </Card>
    )
}
export default Moviecard