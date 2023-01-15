import styled from "styled-components";

export const Wrapper = styled.div `
    width: 100%;
    height: max-content;
    margin-top: 82px;
    display: grid;
    grid-template-columns: repeat(12, fr);
    grid-template-rows: repeat(2, 140px);
    color: ${({ theme }) => theme.colors.white};
    .main-info{
        width: 100%;
        grid-column: 1/12;
        grid-row: 1/2;
        @media (max-width: 768px) {
                display: flex;
                flex-direction: column;
                align-items: center;
                border-bottom: 1px solid #FFFCF612;
                border-bottom-width: 70%;
            }
        .h1{
            margin: 0;
            font-size: 140px;
            color: ${({ theme }) => theme.colors.white};
            @media (max-width: 1550px) {
                font-size: 110px;
            }
            @media (max-width: 1400px) {
                font-size: 100px;
            }
            @media (max-width: 1280px) {
                font-size: 80px;
            }
            @media (max-width: 768px) {
                font-size: 50px;
            }
            span{
                color: ${({ theme }) => theme.colors.secondary};
            }
        }
        p{
            margin: 0;
            color: ${({ theme }) => theme.colors.secondary};
            font-size: ${({ theme }) => theme.fontSize.lg};
            @media (max-width: 1550px) {
                font-size: ${({ theme }) => theme.fontSize.md};
            }
            @media (max-width: 768px) {
                font-size: ${({ theme }) => theme.fontSize.xs};
                text-align: center;
                margin-top: 30px;
            }
        }
    }
    .since-section{
        grid-column: 10/11;
        grid-row: 1/3;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        @media (max-width: 1280px) {
            grid-column: 10/12;
            margin: auto;
            }
        @media (max-width: 768px) {
            grid-column: 1/12;
            }
        div{
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid ${({ theme }) => theme.colors.whiteBorder};
            width: 249px;
            height: 70px;
            border-radius: 99px;
            @media (max-width: 1550px) {
                width: 200px;
            }
            @media (max-width: 1024px) {
                display: none;
            }
            span{
            font-size: 22px;
            margin-left: 23px;
            @media (max-width: 1550px) {
                font-size: 18px;
            }
        } 
        }
        p{
            width: 350px;
            margin: 0;
            margin-top: auto;
            font-size: ${({ theme }) => theme.fontSize.md};
            text-align: left;
            opacity: 0.8;
            line-height: 28px;
            vertical-align: top;
            @media (max-width: 1400px) {
                font-size: ${({ theme }) => theme.fontSize.sm};
            }
            @media (max-width: 768px) {
                width: 100%;
                text-align: center;
            }
        }
    }
    .button-wrapper{
        grid-column: 11/12;
        grid-row:1/2;
        position: relative;
        height: max-content;
        display: flex;
        justify-content: center;
        @media (max-width: 768px) {
                display: none;
            }
    }

`