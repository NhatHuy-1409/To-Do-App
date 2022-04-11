import styled from "styled-components";
export const Button = styled.button`
    background-color:${props => props.theme.bgColor};
    color:${props => props.theme.color};
    border:${props => props.theme.borderBtn};
    padding:.25em .5em;
    transition:all .5s;
    font-size:17px;
    &:disabled {
        background: #dddddd;
        cursor:no-drop;
        &:hover{
            background-color:#dddddd;
            color:${props => props.theme.color};
            border:${props => props.theme.borderBtn};
        }
      }
    &:hover{
        background-color:${props => props.theme.hoverTextColor};
        color:${props => props.theme.bgColor};
        border:${props => props.theme.borderBtn};
    }

`