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
                const request = await axios.get("http://localhost:5000/cart", {
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
`