import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const cardBackgroundColor = '#fdf86c'

const Styles = styled.div`
    display: flex;
    justify-content: space-space-between;
    color: white;
    .chracter-container{
        width: 80%;
        /* background-color: ${cardBackgroundColor} */
    }


`

// Write your Character component here
export default function Onecharacter({ characterArr }) {

    return (
        <Styles>
            {characterArr.map((aCharacter) => {

                return (
                    <div className='chracter-container'>
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