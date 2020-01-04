import React from 'react'
import './card.css'

//Importando os Icones
import iconUsername from '../../icons/user.svg'
import iconEmail from '../../icons/email.svg'
import iconAddress from '../../icons/address.svg'
import iconSite from '../../icons/internet.svg'
import iconPhone from '../../icons/phone.svg'

const Card = (props) => {

    const {card} = props;

    return(
        <div className="card">
            <div className="card__content">
                <div className="card__row">
                    <p className="card__texto--nome">Nome</p>
                </div>
                <div className="card__row">
                    <img src="" alt="Username" className="card__icon"/>
                    <p className="card__texto">UserName</p>
                </div>
                <div className="card__row">
                    <img src="" alt="email" className="card__icon"/>
                    <p className="card__texto">email</p>
                </div>
                <div className="card__row">
                    <img src="" alt="phone" className="card__icon"/>
                    <p className="card__texto">phone</p>
                </div>
                <div className="card__row">
                    <img src="" alt="website" className="card__icon"/>
                    <p className="card__texto">website</p>
                </div>
                <div className="card__row">
                    <img src="" alt="address" className="card__icon"/>
                    <p className="card__texto">address</p>
                </div>
            </div>
        </div>
    );
}

export default Card