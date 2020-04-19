import React from 'react'

const getRoboHashImgUrl = (email, username, id, imgSet) => {
    return `https://robohash.org/${email.slice(1)}${username}${id}.png?size=200x200&set=set${imgSet}`
}

const Card = props => {
    const {email, id, name, username} = props.robot
    const imgSet = props.imgSet
    return (
        <article id={`robot-${id}`} className={`tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-2 card robot robot-${id}`}>
            <img src={getRoboHashImgUrl(email, username, id, imgSet)} alt={`${name} (${username})`} className=""/>
            <h2>{name}</h2>
            <p>{email.toLowerCase()}</p>
        </article>
    )
}

export default Card