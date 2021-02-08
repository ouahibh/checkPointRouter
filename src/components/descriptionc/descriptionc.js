import './descriptionc.css';


import React from 'react'

const DescriptionC = (props) => {
    return (
        <div className={'contenairDescription'}>
            <h2>Descritpion:{props.Description} </h2>
            <h2>Le film:</h2>
            <div className={'filmC'}>
            <iframe src={props.url}
                frameborder='0'
                allow='autoplay; encrypted-media;'
                allow='FullScreen'
                title='video'/>
            
            </div>
        </div>
    )
}

export default DescriptionC;
