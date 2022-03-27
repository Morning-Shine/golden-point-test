import React from 'react'
import styled from "@emotion/styled";


export default function ContactDev() {
    return (
        <StyledA href='https://t.me/Marycona'>
            <Img src="https://telegram.org/img/t_logo.svg?1" alt="" />
            <P>
                связаться с разработчиком
            </P>
        </StyledA>
    )
}

const StyledA = styled.a`
padding-right: 2vw;
position: fixed;
right: 0;
bottom: 4vh;
font-size: large;
font-weight: 500;
text-transform: uppercase;
display: flex;
color: #7cbfde;
`;

const P = styled.p`
height: 4vh;
line-height: 4vh;
margin: 0;
`
const Img = styled.img`
height: 4vh;
padding-right: 0.5vw;
`