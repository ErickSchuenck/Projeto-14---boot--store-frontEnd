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
                const request = await axios.get("https://flexstore-back.herokuapp.com/cart", {
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
    }, [user]);

    return (
        <Container>
            <OrderList>
                {myOrders.length > 0 ? (
                    myOrders.map((order, index) => {
                        console.log(order);
                        return (
                            <Order>
                                {/* NUMERO DO PEDIDO BASEADO NO MAP */}
                                <h1>Pedido {index + 1}</h1>
                                {/* CADA PEDIDO POSSUI UMA PARTE CHAMACA cartItem QUE POSSUI 
                        TODAS AS INFORMAÇOES DOS PRODUTOS COMPRADOS */}
                                <h3>Quantidade de produtos: {order.cartItems.length}</h3>

                                {/* VALOR TOTAL DO PEDIDO */}
                                <h2>Valor do pedido: {order.totalPrice}</h2>
                            </Order>)
                    }
                    )
                ) : (
                    <h1>Não foi feito nenhum pedido</h1>
                )}
            </OrderList>
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
      margin-top: 20px;
    margin-bottom: 10px;
    font-size: 20px;
  }
  .link-text p{
    font-family: var(--primaryFont);
    color: var(--highlightColorDarker);
  }
  h4{
      font-size: 15px;
  }
`

const Order = styled.div`
    min-height: 100px;
    text-align: center;
    margin-bottom: 30px;
    h1{
    margin: 0;
    padding: 3px;
    font-family: var(--primaryFont);
    font-size: 25px;
    border-bottom: 1px solid gray;
    }
    h2{
    font-family: var(--primaryFont);
    padding: 3px;
    margin: 0;
    font-size: 14px;
    color: var(--highlightColorDarker);
    }
    h3{
    font-family: var(--primaryFont);
    padding: 3px;
    margin: 0;
    font-size: 14px;
    }
`

const OrderList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 650px;
    width: 400px;
    overflow: scroll;
`