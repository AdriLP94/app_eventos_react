import React from 'react';
import Evento from "./Evento";

import {EventosConsumer} from "../context/EventosContext";

const ListaEventos = () => {
    return (
            <EventosConsumer>
                {(value)=>{
                    return (
                        value.eventos.length && Array.isArray (value.eventos)
                        ?
                        <div className="resultados">
                            <h1 className="uk-text-center"> Resultados</h1>
                            <div className="uk-child-width-1-3@m" uk-grid="true">
                                {value.eventos.map(evento => (
                                    <Evento
                                        key={evento.id}
                                        evento={evento}
                                    />
                                ))}
                            </div>
                        </div>
                        : null
                    )
                }}
            </EventosConsumer>
    );
};

export default ListaEventos;