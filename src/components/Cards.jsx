import React from 'react'
import Card from './Card'

const Cards = props => {
    const {robots, imgSet} = props
    const cards = robots.map(robot =>
        <Card key={robot.id} robot={robot} imgSet={imgSet} />
    )
    return (
        <article className="cards">
            {cards}
        </article>
    )
}

export default Cards