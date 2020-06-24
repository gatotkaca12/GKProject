import React, { Component } from 'react';

class Carousel extends Component {
    render() {
        return (
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="bd-placeholder-img" width="100%" height="100%" src="https://suara.ngawikab.go.id/wp-content/uploads/2020/04/CORONA-SERIES-001.png" focusable="false" role="img" alt=""/>
                            <div className="container">
                                <div className="carousel-caption text-left">
                                    <h1>Example headline.</h1>
                                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                        <img className="bd-placeholder-img" width="100%" height="100%" src="https://s3-ap-southeast-1.amazonaws.com/jurnal-blog-assets/wp-content/uploads/2019/04/05174643/Jurnal_Blog_Pentingnya-Mengetahui-Peran-Psikologi-Warna-dalam-Bisnis-Kuliner.jpg-.jpg" focusable="false" role="img" alt=""/>
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>Another example headline.</h1>
                                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                        <img className="bd-placeholder-img" width="100%" height="100%" src="https://img.okezone.com/content/2018/05/29/406/1904052/mitos-dan-fakta-di-balik-megahnya-candi-borobudur-percaya-atau-tidak-cVlmY2wE0b.jpg" focusable="false" role="img" alt=""/>
                            <div className="container">
                                <div className="carousel-caption text-right">
                                    <h1>One more for good measure.</h1>
                                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
        )
    }
}

export default Carousel