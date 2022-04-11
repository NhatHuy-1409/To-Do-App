import styled from "styled-components";

export const Table = styled.table`
    color:${props => props.theme.color};
    width:100%;
    margin-bottom:1rem;
    background-color:transparent;
    border-color:${props => props.theme.color};
`
export const Thead = styled.thead`
    display:table-header-group;
    border:1px solid ${props => props.theme.color};
    vertical-align:middle;
`
export const Tbody = styled.tbody`
    display:table-row-group;
    border-color:inherit;
    vertical-align:middle;
`
export const Tr = styled.tr`
    display:table-row;
    vertical-align:inherit;
    border:1px solid ${props => props.theme.color};
`
export const Td = styled.td`
    padding:.75rem;
    vertical-align:top;
    border:1px solid ${props => props.theme.color};
`
export const Th = styled.th`
    padding:.75rem;
    vertical-align:top;
    text-align:inherit;
    border-top:1px solid ${props => props.theme.color};
    border-bottom:1px solid ${props => props.theme.color};
    background-color:${props => props.theme.bgColor};

`