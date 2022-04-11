import styled from 'styled-components';
export const Container = styled.div`
    padding:15px;
    margin-left:auto;
    margin-right:auto;
    border: 5px solid ${props => props.theme.borderColor};
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.bgColor};
    width:50%;
`
export const ContainerFluid = styled.div`
    padding:15px;
    margin-left:auto;
    margin-right:auto;
    border: 5px solid ${props => props.theme.borderColor};
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.bgColor};
`