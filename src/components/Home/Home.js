import React, { Component } from 'react'

import "./carousel.css"
import Carousel from "./components/carousel"
import Content from './components/content'
import Bodyhome from './components/home.body'


class Home extends Component {

    render() {
        return (
            <main role="main">
                <Carousel />

                <Content />

                <Bodyhome />
            </main>
        )
    }
}

export default Home