import styled from "styled-components";
export const Dropdown = styled.select`
    width:100%;
    height:50px;
    font-size:100%;
    font-weight:bold;
    background-color:${props => props.theme.bgColor};
    color:${props => props.theme.color};
    border:${props => props.theme.borderBtn};
    padding:10px;
    border-radius:5px;
    transition:all .3s;
    &:hover{
        background-color:${props => props.theme.hoverTextColor};
        color:${props => props.theme.bgColor};
        border:${props => props.theme.borderBtn};
        border-bottom-color:#DCDCDC;
    }

`