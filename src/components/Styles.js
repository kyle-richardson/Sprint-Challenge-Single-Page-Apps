import styled from "styled-components"

export const Button = styled.div`
    border: 0;
    background: lightgray;
    &:hover {
        background: gray;
    }
    width: 100px;
    padding: 7px;
    cursor: pointer;
    text-align: center;
    margin: 10px;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Name = styled.div`
    font-style: italic;
    border: 1px solid black;
    width: 150px;
    margin: 3px;
    padding: 5px;
    background-color: rgb(136, 166, 247);
    &:hover {
        background-color: rgb(86, 125, 231);
    }
`

export const Div = styled.div`
    font-style: italic;
    border: 1px solid black;
    width: 75px;
    margin: 3px;
    padding: 5px;
    background-color: rgb(240, 186, 37);
    &:hover {
        background-color: rgb(194, 153, 41);
    }
    cursor: pointer;
`