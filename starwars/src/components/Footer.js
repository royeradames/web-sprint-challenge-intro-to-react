import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    color: white;


`
// Write your Character component here
export default function Footer() {

    return (
        <Styles>
            <footer id='footer' className='Header'>
                <p>Royer Adames 2020</p>
                <p>❮API❯ by Axel Fuhrmann 2020</p>
            </footer>
        </Styles>
    )
}