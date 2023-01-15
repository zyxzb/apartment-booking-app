import styled from 'styled-components';

export const ModalWrapper = styled.div `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: 2;
    .modal{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 70%;
        height: 70%;
        display: flex;
        flex-direction: column;
        transform: translate(-50%, -50%);
        background-color: ${({theme}) => theme.colors.white};
        border: 2px solid ${({theme}) => theme.colors.secondary};
        z-index: 1;
        font-family: 'Miracle';
        
        @media (max-width: 1024px) {
            width: 90%;
            height: 90%;
        }
        @media (max-width: 476px) {
            width: 100%;
            height: 100%;
        }
        .modal-top{
            width: 100%;
            height: 20%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding:0 20px;
            @media (max-width: 980px) {
                height: 10%;
        }
            .close{
                margin-left: auto;
                svg{
                width: 30px;
                height: 30px;
                cursor: pointer;
                } 
            }
        }
        .modal-content{
            font-family: 'HelveticaNeue, sans-serif';
            font-weight: bold;
            height: max-content;
            margin-top: 20px;
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            @media (max-width: 980px) {
            flex-direction: column-reverse;
            }
            .calendar{
                box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
            }
            .details{
                min-width: 300px;
                display: flex;
                align-self: flex-start;
                flex-direction: column;
                @media (max-width: 980px) {
                margin: 0 auto 20px;
                }
                span{
                    font-size: 22px;
                }
                p{
                    font-size: 38px;
                    padding: 0;
                    margin: 0;
                }
                .date-range{
                    font-size: 18px;
                    margin-bottom: 30px;
                }
                .book-now{
                        position: absolute;
                        bottom: 30px;
                        right: 30px;
                        cursor: pointer; 
                        span{
                            font-size: 16px;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            font-style: italic;
                            text-align: center;
                            user-select: none;
                    }
                }
                .select{
                    color: #740000;
                }
            }
        }
    }
    .bgc-filter{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0,0,0,.4);
        backdrop-filter: blur(8px);
        width: 100%;
        height: 100%;
    }
    `