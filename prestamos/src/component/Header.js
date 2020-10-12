import React, {Fragment} from 'react';
function Header({titulo}){

    //Todo lo que esta dentro del return es lo que se va a mostrar
    return(
        <Fragment>
            <h1>{titulo}</h1>
        </Fragment>
    )

}

export default Header;