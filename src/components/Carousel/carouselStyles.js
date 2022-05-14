import styled from 'styled-components';


const ItemsWrapper = styled.div`
  width: 100vw;
  p{
    margin: none;
  }
  .items{
    display: flex;
    overflow-x: auto;
    overflow: hidden;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    background-color: var(--fundo);
  }
  .item{
    width: 100%;
    height: auto;
    flex: none;
    scroll-snap-align: start;
    position: relative;
    margin-right: 20px;
  }
  .items img{
    width: 100%;
  }
  .filter{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    height: 60px;
    transform: scaleY(-1)
  }
  .description{
    background-color: red;
    height: 20px;
    margin: 0;
  }
  
`
export default ItemsWrapper