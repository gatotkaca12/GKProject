import React, { Component } from 'react';

class NewsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }
  componentDidMount() {
    fetch('http://newsapi.org/v2/top-headlines?country=id&apiKey=ac44b0eed0b34c69be08e5980e82536e')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        //  console.log(myJson);
        this.setState({
          articles: myJson.articles
        })
      })
  }

  render() {
    //  console.log(this.state);
    return (
      <div className="card container ">
        <h1>Berita Terbaru</h1>
        <br/>
        {this.state.articles.map((item, index) => {
          return (
            <div className="border border-danger-10 ">
              <img className="card-img-top" src={item.urlToImage} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.content}</p>
                <a href={item.url} className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}
export default NewsApp;
