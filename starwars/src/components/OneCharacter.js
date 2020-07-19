import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    display: flex;
    justify-content: center;
    color: white;
    flex-wrap: wrap;
    width: 100%;

    .placeholder-image{
        min-width: 33rem;
        min-height: 30rem;
    }
    
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
            {
                characterArr.map((aCharacter) => {
                    return (
                        <div className='character-container' key={aCharacter.id}>
                            <img src={aCharacter.image} alt={aCharacter.name}></img>
                            <div className='character-container-text Header'>
                                <h2>{aCharacter.name}</h2>
                            </div>
                        </div>
                    )
                })
            }
        </Styles>

    )
}