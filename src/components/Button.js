import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent
border: 0.02rem solid var(--lightBlue);
color:var(--lightBlue);
border-radius: 3px;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
trasition:all 0.0s ease-in-out;
&:hover{
       background:var(--lightBlue);
         color: var(--mainBlue);
        outline-color: var(--mainWhite);
}
&:focus{
	outline: none;
}
`;