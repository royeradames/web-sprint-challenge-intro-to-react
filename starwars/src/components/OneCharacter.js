import React from 'react';
import styled from 'styled-components';

const cardBackgroundColor = '#fdf86c'

const Styles = styled.div`
    display: flex;
    justify-content: center;
    color: white;
    flex-wrap: wrap;
    width: 100%;
    .character-container{
        padding: 1rem;
        margin: 2rem;
        border: .1rem solid white;
    }


`

// Write your Character component here
export default function Onecharacter({ characterArr }) {

    return (
        <Styles>
            {characterArr.map((aCharacter) => {

                return (
                    <div className='character-container' key={aCharacter.id}>
                        <img src={aCharacter.image} alt={aCharacter.name}></img>
                        <div className='character-container-text Header'>
                            <h2>{aCharacter.name}</h2>
                            {/* extra information */}
                            {/* <p>{}</p>
                            <h3>{}</h3>
                            <p>{}</p>
                            <h3>{}</h3>
                            <p>{}</p> */}
                        </div>
                    </div>
                )
            })}
        </Styles>
        
    )
}