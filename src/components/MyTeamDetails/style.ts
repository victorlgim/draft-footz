import styled from "styled-components";

export const MainStyled = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;
`

export const TeamHeaderStyled = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 20px;

    figure {
        width: 100%;
        max-width: 32px;
    }

    h2 {
        font-weight: 500;
        font-size: 24px;
    }

    button {
        background: none;
    	color: inherit;
    	border: none;
    	padding: 0;
    	outline: inherit;       
    }
    
`

export const TeamDetails = styled.section`
    width: 100%;
    max-width: 700px;
    background: rgba(7, 6, 6, 0.37);
    border-radius: 6px;
    display: flex;
    flex-direction: column;

    h3, div {
        padding: 20px 41px;
    }

    h4, h3 {
        font-weight: 700;
        font-size: 15px;
        color: var(--gray0);
    }

    span {
        font-weight: 700;
        font-size: 15px;
        color: #B6B6B6;
    }

    div {
        border-top: 2px solid rgba(255, 255, 255, 0.06);;
    }

    div:first-of-type {
        display: flex;
        gap: 22px;
        flex-wrap: wrap;
    }
`