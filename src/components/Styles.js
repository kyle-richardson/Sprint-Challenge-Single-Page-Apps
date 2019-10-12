import styled from "styled-components"

export const Button = styled.div`
    border: 0;
    background: gray;
    &:hover {
        background: lightgray;
    }
    width: 100px;
    padding: 7px;
    cursor: pointer;
    text-align: center;
    border-radius: 8px;
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
    background-color: rgb(136, 136, 247);
`