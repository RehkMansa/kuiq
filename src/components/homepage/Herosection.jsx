import styledComponents from 'styled-components';

const Section = styledComponents.section`
  width:100%;
  height: calc(100vh - 80px);
  overflow: hidden;
  display:flex;
  justify-content:center;
  align-items:center;
  background-image: url(images/hero-bg2.jpg);
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center center;
  position:relative;
`;

const SectionOverlay = styledComponents.div`
  position:absolute;  
  background-color: rgba(200, 200, 100, 0.35);
  background-image:repeating-linear-gradient(-66deg,  rgba(200, 200, 0, 0.45)30% ,  rgba(200, 200, 200, 0.1));
  width:100%;
  height:100%;
`;
const SectionInner = styledComponents.div`
 color: var(--default-color);
  z-index:1;
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  gap:24px;
  text-align:center;
  h1{
    font-size:75px;
    text-transform:uppercase;
    line-height: 60px;
  }

  p{
    font-size:24px;
    line-height:30px;
    max-width: 53ch;
  }
`;
const HeroSection = () => {
  return (
    <Section>
      <SectionOverlay />
      <SectionInner>
        <h1>Amazing Deals</h1>
        <p>
          With discounts and promo codes on every purchase you make, Shop More
          today
        </p>
        <button>All Products</button>
      </SectionInner>
    </Section>
  );
};

export default HeroSection;
