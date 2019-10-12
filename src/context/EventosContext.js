import React, { Component } from 'react';
import axios from "axios";

const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component {

    idioma = "es_ES";

    state = {
        eventos : []
    }

    obtenerEventos = async (busqueda) => {

        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${busqueda.ordenar}&token=${process.env.REACT_APP_APIKEY}&locale=${this.idioma}`;
        const eventos = await axios(url);

        this.setState({
            eventos : eventos.data.events
        })
    }

    render() {
            return (
                <EventosContext.Provider
                    value={{
                        eventos : this.state.eventos,
                        obtenerEventos : this.obtenerEventos,
                    }}
                >
                    {this.props.children}
                </EventosContext.Provider>

            );
    }
}

export default EventosProvider;