import React from 'react'

const Search = props => {
    const {onSearchChange, onSetChange, imgSets, friendsType} = props
    const setOptions = Object.entries(imgSets).map(([id, name]) => {
        return <option
            key={id}
            id={`set-${id}`}
            value={id}
        >{`${id}. ${name.charAt(0).toUpperCase() + name.slice(1)}`}</option>
    })
    return (
        <form>
            <select
                className="db center mb2 ba b--green bg-lightest-blue"
                onChange={onSetChange} name="set"
            >
                {setOptions}
            </select>
            <input
                onChange={onSearchChange}
                className="pa2 mb3 ba b--green bg-lightest-blue"
                type="text"
                name="q"
                id="q"
                placeholder={`Search ${friendsType.toLowerCase()}s`}
            />
        </form>
    )
}

export default Search