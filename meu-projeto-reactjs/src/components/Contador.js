import React from 'react';

class Contador extends React.Component {

    constructor(props) {
        super(props)

        this.state = { 
            contador: props.inicio
        }
    }

    componentDidMount() {
        this.iniciarContador();
    }

    componentWillUnmount() {
        clearInterval(this.contadorInterval);
    }

    iniciarContador = () => {
        setInterval(() => {
            this.setState({
                contador: this.state.contador + 1
            });
        }, 1000)
    }

    render() {
        return (
            <p>
                Contador: {this.state.contador}
            </p>
        );
    }
}

export default Contador;