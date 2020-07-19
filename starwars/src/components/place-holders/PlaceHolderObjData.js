import React from 'react'
import { Placeholder } from 'semantic-ui-react'
import styled from 'styled-components';

const Styles = styled.div`
    display: flex;
    justify-content: center;
    color: white;
    flex-wrap: wrap;
    width: 100%;
    min-width: 330px;
    min-height: 300px;
    
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

export default function PlaceHolderCharacters({amount}) {
    // function placeHolderCaracterGenerator(amount){
    //     const charactersHolder = []
    
    //     for(let i = 0; 0 < amount; i++){
    //         charactersHolder[i] = (
    //         <div className='character-container' >
    //             <Placeholder>
    //                 <Placeholder.Image rectangular className='placeholder-image' />
    //             </Placeholder>
    //         </div>
    //         )
    //     }
    
    //     return charactersHolder
    // }
    return (
        <Styles>
            <div className='character-container' >
                <Placeholder>
                    <Placeholder.Image rectangular className='placeholder-image' />
                </Placeholder>
            </div>
            <div className='character-container' >
                <Placeholder>
                    <Placeholder.Image rectangular className='placeholder-image' />
                </Placeholder>
            </div>
            <div className='character-container' >
                <Placeholder>
                    <Placeholder.Image rectangular className='placeholder-image' />
                </Placeholder>
            </div>
            <div className='character-container' >
                <Placeholder>
                    <Placeholder.Image rectangular className='placeholder-image' />
                </Placeholder>
            </div>
            <div className='character-container' >
                <Placeholder>
                    <Placeholder.Image rectangular className='placeholder-image' />
                </Placeholder>
            </div>
            <div className='character-container' >
                <Placeholder>
                    <Placeholder.Image rectangular className='placeholder-image' />
                </Placeholder>
            </div>
        </Styles>
    )
}

