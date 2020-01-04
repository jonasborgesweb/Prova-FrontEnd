import React from 'react'
import './card.css'

import iconUsername from '../../icons/user.svg'
import iconEmail from '../../icons/email.svg'
import iconAddress from '../../icons/address.svg'
import iconSite from '../../icons/internet.svg'
import iconPhone from '../../icons/phone.svg'

const Card = (props) => {

    const { card } = props;

    return (
        <div className="card">
            <div className="card__content">
                <div className="card__row">
                    <p className="card__texto--nome">{card.name}</p>
                </div>
                <div className="card__row">
                    <img className="card__icon" src={iconUsername} alt="Username" title="Username"/>
                    <p className="card__texto" title="Username">{card.username}</p>
                </div>
                <div className="card__row">
                    <img className="card__icon" src={iconEmail} alt="E-mail" title="E-mail"/>
                    <p className="card__texto" title="E-mail">{card.email}</p>
                </div>
                <div className="card__row">
                    <img className="card__icon" src={iconPhone} alt="Phone" title="Phone"/>
                    <p className="card__texto" title="Phone">{card.phone}</p>
                </div>
                <div className="card__row">
                    <img className="card__icon" src={iconSite} alt="Website" title="Website"/>
                    <p className="card__texto" title="Website">{card.website}</p>
                </div>
                <div className="card__row">
                    <img className="card__icon" src={iconAddress} alt="Address" title="Address"/>
                    <p className="card__texto" title="Address">
                        {card.address.street + ', ' + card.address.suite + ', ' + card.address.city}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card