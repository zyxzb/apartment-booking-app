import React from 'react';
import styled from 'styled-components';
import BannerSection from '../bannerSection/BannerSection';
import LabelsSection from '../labelsSection/LabelsSection';
import TextArea from '../textArea/TextArea';

const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  padding-top: 100px;
`;

const Header = () => {
  return (
    <Wrapper className='section-center'>
      <TextArea />
      <BannerSection />
      <LabelsSection />
    </Wrapper>
  );
};

export default Header;
