import React from "react";
import ScrollUpButton from "react-scroll-up-button";
import styled from 'styled-components';


const StyledDiv = styled.div`
  position: relative;
`;

export default class Layout extends React.Component {
    render() {
        return (
            <StyledDiv>
                {this.props.children}
                <ScrollUpButton/>
            </StyledDiv>
        );
    }
}
