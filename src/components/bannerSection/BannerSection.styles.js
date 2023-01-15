import styled from "styled-components";

export const BannerWrapper = styled.div `
    width: 100%;
    height: 781px;
    margin-top: 100px;
    position: relative;

    @media (max-width: 1440px) {
        height: 588px;
    }
    @media (max-width: 768px) {
        height: 425px;
    }
    img{    
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
        .book-apartments{
        position: absolute;
        top: 50px;
        right: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 768px) {
            top: auto;
            bottom: 20px;
            right: 20px;
            }
        svg{
            cursor: pointer;
            width: 180px;
            height: 180px;
            @media (max-width: 768px) {
                width: 120px;
                height: 120px;
            }
        }
        span{
            position: absolute;
            color: ${({theme}) => theme.colors.primary};
            font-style: italic;
            text-align: center;
        }
    }
`