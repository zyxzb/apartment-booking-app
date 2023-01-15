import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
   display: flex;
   justify-content: space-between;
   margin-top: 100px;
   color: ${({theme}) => theme.colors.white};
   text-transform: uppercase;
   p{
    margin: 0;
   }
    .left{
        text-decoration: underline;
        p:nth-of-type(1){
            color: ${({theme}) => theme.colors.secondary};
            text-decoration: underline;
        };
    }
    .right{
        text-align: right;
        span{
            font-style: italic;
        }
    }
`

const LabelsSection = () => {

    return (
        <Section>
            <div className='left'>
                <p> +38 032 297 50 20 </p><br />
                <p> 8 Lystopadovoho Chynu,Lviv </p>
            </div>
            <div className='right'>
                <p>Art & Congress<br /> <span>hall</span> </p>
            </div>
        </Section>
    );
}

export default LabelsSection;
