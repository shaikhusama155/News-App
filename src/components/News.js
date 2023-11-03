import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  articles = [
    {
    "source": {
    "id": null,
    "name": "Gizmodo.jp"
    },
    "author": "はらいさん",
    "title": "Apple Watch Ultraの新モデル、来年は発売されないかも",
    "description": "Apple Watch Ultra 3は来年ではなく2025年のリリースになりそう。",
    "url": "https://www.gizmodo.jp/2023/10/next-apple-watch-ultra-2025.html",
    "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/10/27/Apple-Watch-Ultra-2-side-button-Digital-Crown-230912.jpg?w=1280&h=630&f=jpg",
    "publishedAt": "2023-10-30T05:00:00Z",
    "content": "1Apple Watch Ultra 2Apple Watch Ultra2025\r\nAppleAppleApple Watch Ultra 312\r\nApple Watch Ultra 3LED\r\nApple Watch UltraUltra 2Ultra\r\nApple Watch10Apple Watch XApple\r\nSource: MacRumors"
    },
    {
    "source": {
    "id": null,
    "name": "Theregister.com"
    },
    "author": "Simon Sharwood",
    "title": "Fujitsu public cloud to be absorbed into main biz, then refreshed",
    "description": "PLUS: Hikvision accused of targeting minorities; Australia's 'cyber-shield'; Huawei's superchip source revealed?\nAsia In Brief Fujitsu has decided to conduct an \"absorption-type merger\" of its public cloud operation.…",
    "url": "https://www.theregister.com/2023/10/30/asia_tech_news_in_brief/",
    "urlToImage": "https://regmedia.co.uk/2023/06/19/shutterstock_asia_abstract_map.jpg",
    "publishedAt": "2023-10-30T00:18:19Z",
    "content": "Asia In Brief Fujitsu has decided to conduct an \"absorption-type merger\" of its public cloud operation.\r\nThe Japanese giant's cloud operates in its home nation, where it offers a modest array of IaaS… [+5358 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Small Business Trends"
    },
    "author": "Liane Lonergan",
    "title": "4K Projectors: Great Picks for Your Business Presentations",
    "description": "As a business, you can always spruce up your presentation using 4K projectors for good effect. Here are the best 4K projectors for your business.",
    "url": "https://smallbiztrends.com/2023/10/4k-projectors.html",
    "urlToImage": "https://media.smallbiztrends.com/2022/07/ViewSonic-M2-1080p-Portable-Projector-with-1200-LED-Lumens.png",
    "publishedAt": "2023-10-30T01:45:11Z",
    "content": "If you buy something through our links, we may earn money from our affiliate partners. Learn more.\r\nUsing 4K projectors can bring extra life to your business presentations. You can use projectors for… [+11318 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Caschys Blog"
    },
    "author": "caschy",
    "title": "Resident Evil Village startet auf dem iPhone und dem iPad",
    "description": "Capcom hat Resident Evil Village im Apple App Store freigeschaltet, was bedeutet, dass alle Interessierten das Spiel ab sofort auf dem iPhone und iPad spielen können. Die App ist kostenlos im App Store, aber nur ein Teil der Hauptgeschichte kann...Zum Beitrag…",
    "url": "https://stadt-bremerhaven.de/resident-evil-village-startet-auf-dem-iphone-und-dem-ipad/",
    "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2021/05/Resident-Evil-Village-2.jpg",
    "publishedAt": "2023-10-30T05:44:51Z",
    "content": "Capcom hat Resident Evil Village im Apple App Store freigeschaltet, was bedeutet, dass alle Interessierten das Spiel ab sofort auf dem iPhone und iPad spielen können. Die App ist kostenlos im App Sto… [+1725 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Wwwhatsnew.com"
    },
    "author": "Juan Diego Polo",
    "title": "Tecnología de reconocimiento de escritura, opciones y tendencias",
    "description": "El reconocimiento de escritura es una de las áreas más fascinantes y en rápido desarrollo dentro del campo de la inteligencia artificial y el procesamiento de datos. Esta tecnología tiene el potencial de transformar la forma en que interactuamos con las máqui…",
    "url": "https://wwwhatsnew.com/2023/10/30/tecnologia-de-reconocimiento-de-escritura-opciones-y-tendencias/",
    "urlToImage": "https://wwwhatsnew.com/wp-content/uploads/2023/10/reconocer-texto.jpg",
    "publishedAt": "2023-10-30T02:00:30Z",
    "content": "El reconocimiento de escritura es una de las áreas más fascinantes y en rápido desarrollo dentro del campo de la inteligencia artificial y el procesamiento de datos. Esta tecnología tiene el potencia… [+14985 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Slickdeals.net"
    },
    "author": "f12_26",
    "title": "ESR Apple iPhone Cases for iPhone 14/13/12/11 Series from $3",
    "description": "Solodream US Store via Amazon has select ESR Apple iPhone 14/13/12/11 Cases on sale when you apply the corresponding coupons (found on the product page) and promotion codes listed below at checkout. S ...",
    "url": "https://slickdeals.net/f/17020462-esr-apple-iphone-cases-for-iphone-14-13-12-11-series-from-3",
    "urlToImage": "https://static.slickdealscdn.com/attachment/3/4/2/9/3/0/8/14435773.attach",
    "publishedAt": "2023-10-30T00:55:00Z",
    "content": "Solodream US Store via Amazon has select ESR Apple iPhone 14/13/12/11 Cases on sale when you apply the corresponding coupons (found on the product page) and promotion codes listed below at checkout. … [+1250 chars]"
    },
   ]
  constructor(){
    super();
    this.state ={
      articles:this.articles,
      loading : false
    }
  }
  render() {
    return (
      <div className='container'>
        <h1 className='justify-align-center'>NewsMonkey - Headlines</h1>
        <div className='row'>
        {this.state.articles.map((element)=>{
          return<div className='col-md-4'key={element.url}>
             <NewsItems title={element.title} discription = {element.description} imgUrl ={element.urlToImage} />
            </div>
        })}
        </div>   
      </div>
    )
  }
}

export default News
