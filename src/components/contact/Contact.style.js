import styled from "styled-components";

export const Wrapper = styled.div `
display: grid;
grid-template-columns: repeat(12,1fr);
grid-template-rows: repeat(8, minmax(100px, 150px));
color: ${({ theme }) => theme.colors.primary};
background-color: ${({theme}) => theme.colors.white};
padding: 200px 5vw 0;
height: max-content;
@media (max-width: 768px) {
    grid-template-rows: repeat(6, minmax(50px, 140px));
    padding: 30px 5vw 0;
}

.number{
    grid-column: 1/-1;
    font-size: 50px;
    margin:  auto 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.formBackground};
    width: max-content;
    @media (max-width: 1365px) {
        font-size: 38px;
    }
    @media (max-width: 768px) {
        font-size: 24px;
    }
}
.location{
    grid-column: 8/-1;
    grid-row: 2/3;
    text-transform: uppercase;
    @media (max-width: 768px) {
        grid-column: 1/-1;
        text-align: right;
    }
}
.chairImg{
    grid-column: 1/12;
    grid-row: 3/4;
    @media (max-width: 576px) {
        grid-row: 4/6;
    }
    img{
        margin-left: auto;
        display: flex;
        object-fit: cover;
        max-width: 360px;
        @media (max-width: 1365px) {
            max-width: 300px;
            margin-top: 30px;
        }
        @media (max-width: 768px) {
            max-width: 230px;
        }
        @media (max-width: 576px) {
            max-width: 150px;
        }
    }
}
.get-in, .touch{
    font-size: 260px;
    text-transform: uppercase;
    white-space: nowrap;
    letter-spacing: 10px;
    position: relative;
    @media (max-width: 1365px) {
        font-size: 180px;
    }
    @media (max-width: 768px) {
        font-size: 70px;
        letter-spacing: 0px;
    }
}
.get-in{
    grid-column: 1/6;
    grid-row: 3/4;
    top: -25%;
    position: relative;
    position: relative;
    display: flex;
    align-items: center;
    width: max-content;
    @media (max-width: 768px) {
        top: 0; 
        margin-top: auto;
    }
        svg{
            position: absolute;
            left: 105%;
            width:100px;
            height: 100px;
            @media (max-width: 1365px) {
                width:70px;
                height: 70px;
            }
            @media (max-width: 1365px) {
                width:36px;
                height: 36px;
            }
        }
    }     
.touch{
    grid-column: 1/13;
    grid-row: 4/5;
    text-align: right;
    top: 75%;    
    /* color: ${({ theme }) => theme.colors.secondary}; */
    @media (max-width: 768px) {
        top: 0; 
    }

}
.get-in, .touch {
  font-weight: 300;
}
.find-link{
    grid-column: 1/13;
    grid-row: 7/10;
    position: relative;
    display: flex;
    width: max-content;
    height: max-content;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.primary};
    font-style: italic;

    svg{
        cursor: pointer;
        width: 180px;
        height: 180px;
    }
    span{
        position: absolute;
        text-align: center;
        cursor: pointer;
    }
    /* form{
        width: 900px;
        height:140px;
        left: 0;
        background-color: transparent;
        border: 1px solid ${({theme}) => theme.colors.primary};
        div{
            color: ${({theme}) => theme.colors.primary};
        }
        button{
            background-color: ${({theme}) => theme.colors.primary};
            color: ${({theme}) => theme.colors.white};
        } */
        @media (max-width: 768px) {
        grid-row: 5/7;
            svg{
            width: 120px;
            height: 120px;
            }   
        }
    }
    .find{
        grid-column: 1/6;
        grid-row: 6/7;
        width: 180px;
        display: flex;
        align-items: center;
        text-align: center;
    }
        h3{
        width: 100%;
        font-size: ${({ theme }) => theme.fontSize.md};
        text-transform: uppercase;
        @media (max-width: 768px) {
            display: none;
        }
    }
`