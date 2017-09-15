import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';


const HomePageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100vh;
width: 100vw;
background-image: url("https://i.imgur.com/qgDxzSY.jpg");
background-size: stretch;
background-position: center;
background-filter: blur(2px);
h1{
    font-family: 'Barrio', cursive;
    text-align:center;
    font-size:85px;
}
h3,h2{
    font-size: 45px;
    text-align:center;
    font-family: 'Caveat Brush', cursive;
}`

class SplashPage extends Component {
    render() {
        return (
                <div>
                <HomePageContainer>
                <h1>YEARBOOK_ON_RAILS</h1>

                <br />
                <br />
                <h3> Take your <strong>Glory Days</strong> with you anywhere!</h3>
                <br />
                <h2>SAVE THE TREES.</h2>
                </HomePageContainer>
                </div>
        );
    }
}
export default SplashPage;