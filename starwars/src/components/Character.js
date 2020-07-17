import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Onecharacter from './OneCharacter'
const Styles = styled.div`

`

// Write your Character component here
export default function characters({ characterArr }) {

    return (
        <Onecharacter characterArr={characterArr}/>
    )
}