import React, { Component }  from 'react';

import Titulo from '../components/Titulo';
import Contador from '../components/Contador';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Titulo textColor="red">
                    #13 e confirma!!
                </Titulo>

                <Contador inicio={13}/>
                <Contador inicio={130}/>
            </div>
        );
    }
}