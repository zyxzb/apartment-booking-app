import styled from "styled-components";

export const FormWrapper = styled.form `
    width: 1105px;
    height:150px;
    background-color: ${({theme}) => theme.colors.formBackground};
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    
    button{
        height: 100%;
        width:370px;
        border: none;
        background-color: ${({theme}) => theme.colors.secondary};
        color: ${({theme}) => theme.colors.primary};
        font-size: ${({theme}) => theme.fontSize.md};
        font-weight: bold;
        cursor: pointer;
    }
    .check-wrapper{
        width: 100%;
        display: flex;
        align-items: center;
        backdrop-filter: blur(3px);
        div{
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${({theme}) => theme.colors.white};
            cursor: pointer;
            label{
                position: absolute;
                left: 47px;
            }
            
            svg{
                left: 85%;
            }
            &:nth-of-type(1)::after{
                content: '';
                background-color: ${({theme}) => theme.colors.white};
                opacity: 0.38;
                width: 1px;
                height: 64px;
                position: absolute;
                right: 0;
            }
        }
    }
`