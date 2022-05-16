import styled from "styled-components"
import axios from "axios"
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/userContext";
import { Link } from "react-router-dom";

export default function MyOrders() {
    const { user } = useContext(UserContext);
    const [myOrders, setMyOrders] = useState([]);
    console.log(myOrders);
    useEffect(() => {
        (async () => {
            try {
                const request = await axios.get("https://git.heroku.com/flexstore-back.git/cart", {
                    headers: {
                        "Authorization": `Bearer ${user.token}`
                    }
                }
                );
                setMyOrders(request.data);

            } catch (error) {
                alert("Ops! Infelizmente aconteceu um erro! Tente novamente!");
                console.log(error);
            }
        })();
    }, []);

    return (
        <Container>
            {myOrders.length > 0 ? (
                myOrders.map((order, index) => {
                    console.log(order);
                    return (<div>
                        {/* NUMERO DO PEDIDO BASEADO NO MAP */}
                        <h4>Pedido {index + 1}</h4>
                        {/* CADA PEDIDO POSSUI UMA PARTE CHAMACA cartItem QUE POSSUI 
                        TODAS AS INFORMAÇOES DOS PRODUTOS COMPRADOS */}
                        <h4>Quantidade de produtos: {order.cartItems.length}</h4>
                        {/* VALOR TOTAL DO PEDIDO */}
                        <h4>Valor do pedido: {order.totalPrice}</h4>
                    </div>)
                }
                )
            ) : (
                <h1>Não foi feito nenhum pedido</h1>
            )}
            <Link to={'/'}>
                <div className='link-text'>
                    <p>Retornar ao Site</p>
                </div>
            </Link>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  h1{
    font-family: var(--primaryFont);
  }
  
  .link-text{
    margin-bottom: 10px;
  }
  .link-text p{
    font-family: var(--primaryFont);
    color: var(--highlightColorDarker);
  }
  h4{
      font-size: 15px;
  }
`