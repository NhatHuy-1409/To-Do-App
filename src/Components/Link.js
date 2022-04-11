import styled from "styled-components";
import React from "react";

export const Link = (className, children, ...restProps) => (
    <a className={className} {...restProps}>
        {children}
    </a>
)

export const StyledLink = styled(Link)`
    background-color:red;
    font-weight:bold;
    color:#fff;
`