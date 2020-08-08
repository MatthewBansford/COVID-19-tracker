const data=[
    {id:1, country:"Italy", confirmed:3474, deaths: 472, recovered: 2812, active: 190},
    {id:2, country:"Russia", confirmed: 8764, deaths: 2254, recovered: 655, active: 300},
    {id:3, country:"Mexico", confirmed: 465, deaths:7565 , recovered: 98, active: 64},
    {id:4, country:"Germany", confirmed: 864, deaths: 23, recovered: 567, active:146 }, 
    {id:5, country:"Spain", confirmed: 16618, deaths: 1438, recovered: 10671, active:4509},
    {id:6, country:"India", confirmed: 1222, deaths: 19, recovered: 425, active:778},
    {id:7, country:"Jamaica", confirmed: 206960, deaths: 1842, recovered: 120464, active:84654},
    {id:8, country:"United Kingdom", confirmed: 3, deaths: 0, recovered: 3, active:0},
    {id:9, country: "China", confirmed: 991, deaths: 6, recovered: 985, active: 0},
    {id:10, country: "Colombia", confirmed: 46834, deaths: 788, recovered: 18389, active: 27657}


];

function Apps(props){
        console.log(props)
        return(
                    <tr>
                        <td>{props.country}</td>
                        <td>{props.confirmed}</td>
                        <td>{props.deaths}</td>
                        <td>{props.recovered}</td>
                        <td>{props.active}</td>
                    </tr>
        );
}

let appList=data.map(i => <Apps country={i.country} confirmed={i.confirmed} deaths={i.deaths} recovered={i.recovered} active={i.active} />);

ReactDOM.render(
  <React.StrictMode>
  {appList}
  </React.StrictMode> , document.getElementById('root'));