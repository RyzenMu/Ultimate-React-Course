import styled, { css } from "styled-components";

const Heading = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 1.4;
  color: var(--color-grey-900);
  margin-bottom: 1.6rem;

  ${props => props.as === 'h1' && css`
    font-size: 3.2rem;
    font-weight: 700;
  `}
  
  ${props => props.as === 'h2' && css`
    font-size: 2.4rem;
    font-weight: 600;
  `}
  
  ${props => props.as === 'h3' && css`
    font-size: 2rem;
    font-weight: 500;
  `}
`;

Heading.defaultProps = {
  as: "h1"
};

export default Heading;