import React from 'react';

const Evento = ({evento}) => {
    
    let { text } = evento.description;
    if (text) {
        if(text.length > 150) {
           text = text.substr(0,150);
           text = text.concat(" ...");
        } 
    }
    
    return (
        <div>
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                    {evento.logo
                        ? <img src={evento.logo.url} alt={evento.name.text}/>
                        : null 
                    }
                </div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">{evento.name.text}</h3>
                    {text}
                </div>
                <div className="uk-card-footer">
                    <a className="uk-button uk-button-secondary" href={evento.url} target="_blank" rel="noopener noreferrer">Más Información</a>
                </div>
            </div>
        </div>
    );
};

export default Evento;