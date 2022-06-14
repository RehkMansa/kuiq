import styled from 'styled-components';

const FooterSection = styled.footer`
  background-color: #4f4f4f;
  color: #fff;
  display: flex;
  justify-content: space-between;
`;
const Footer = () => {
  return (
    <FooterSection>
      <p>Kuiq &copy; 2022</p>
      <div>
        <p>Built By Swizel</p>
      </div>
    </FooterSection>
  );
};

export default Footer;
