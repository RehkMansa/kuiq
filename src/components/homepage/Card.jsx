import styledComponents from 'styled-components';

const CardWrapper = styledComponents.div`
  background-image: url(images/${(props) => props.bgImage});
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center center;
  height: 30vh;
  display: flex;
  padding:10px 5%;
  width:100%;
  justify-content:${(props) => props.position || 'space-between'};
  align-items:center;
  h3{
    font-size:34px;
    font-weight:700;
    line-height:1.5;
    text-transform:capitalize;
  }
  p{
    color:#757575;
    line-height:1.5;
  }
`;

const Card = ({ bgImage, title, desc, contentPosition }) => {
  return (
    <CardWrapper bgImage={bgImage} position={contentPosition}>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </CardWrapper>
  );
};

export default Card;
