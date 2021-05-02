import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (  
        <HeaderNav>
            <header>
                <h2>Registro de aspirantes</h2>
                <ul>
                    <li><a href="">Preba SEANI</a></li>
                    <li><a href="">Administrador</a></li>
                </ul>
            </header>
        </HeaderNav>
    );
}

const HeaderNav = styled.div`
    width: 100%;
    background: #008b2a;
    color: #fff;
    header{
        width: 100%;
        padding: 8px 0px 0px 0px;
        h2{
            text-align: center;
        }
        ul{
            display: flex;
            justify-content: space-between;
            background: #ff7b00;
            li{
                
                list-style: none;
                padding: 5px 15px;
                :hover{
                    background: teal;
                }
                a{
                    display: inline-block;
                    text-decoration: none;
                    color: #fff;
                    width: 100%;
                }
            }
        }
    }
`;

export default Header;