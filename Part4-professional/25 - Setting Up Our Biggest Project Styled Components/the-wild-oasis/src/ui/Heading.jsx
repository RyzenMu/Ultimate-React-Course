import styled from "styled-components";

const test = css`text-align: center;
${10 > 5 && "background-color:yellow"};
`;

const Heading = styled.h1`
  ${props => props.as === 'h1' && css`
    font-size: ${10 > 5 ? '30px' : '5px'};
  font-weight: 600;`}
  
  color: red;
  background-color: yellowgreen;
  ${test};
  line-height: 1.4;

  ${props => props.as === 'h2' && css`
    font-size: ${10 > 5 ? '20px' : '5px'};
  font-weight: 400;`}
  
  color: red;
  background-color: yellowgreen;
  ${test};
  line-height: 1.4;

  ${props => props.as === 'h3' && css`
    font-size: ${10 > 5 ? '10px' : '5px'};
  font-weight: 200;`}
  
  color: red;
  background-color: yellowgreen;
  ${test};
  line-height: 1.4;
  `;

  export default Heading;