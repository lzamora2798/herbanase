import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,PieSeries,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { year: '1950', population: 2.525 },
  { year: '1960', population: 3.018 },
  { year: '1970', population: 3.682 },
  { year: '1980', population: 4.440 },
  { year: '1990', population: 5.310 },
  { year: '2000', population: 6.127 },
  { year: '2010', population: 6.930 },
];
const data2 = [
  { country: 'Russia', area: 12 },
  { country: 'Canada', area: 7 },
  { country: 'USA', area: 7 },
  { country: 'China', area: 7 },
  { country: 'Brazil', area: 6 },
  { country: 'Australia', area: 5 },
  { country: 'India', area: 2 },
  { country: 'Others', area: 55 },
];

const useStyles = makeStyles({
    column: {
    float: 'left',
    width: '50%',
    padding: "80px",
    },
    column2: {
        float: 'left',
        width: '50%',
        padding: "10px",
        }
  });


  class Producto extends React.Component{
    constructor(props) {
      super(props);
  
      this.state = {
        data,data2,
      };
    }
    render(){
    const { data: chartData } = this.state;
    const { data2: chartData2 } = this.state;
    return (    
        <div className="container my-5">
            <div className="row my-5">
            <div className="col-lg-6 my-5">
              <div className="container">
              <img src="https://lh3.googleusercontent.com/proxy/fDHlPZ_ryc2FR8Gyexmd5dXg0vznb-X81_fY_UE2d4EqB-fIpQU93EvJ4JCo50Ha9d8ouJFHs9HErbn0eVj60ACrJOoQbmKtq_pUjTeTxS2vnk8bm1ZlnjObGu7fyiilQCp7irmTKbEXxF2bHfMNT0GQn2YHz_N_yf4AV00jrmHonw" 
              className="rounded-circle" alt="Cinque Terre"/>
              </div>
              
              </div>
            <div className="col-lg-6 mt-5">
                
                  <div className="container mt-5">
                    
                        <h1>Frutilla</h1>
                        <h2>$ 2.00</h2>
                        <p className="lead">La frutilla es una fruta que, según la región, 
                        también se conoce como fresón o fresa. Se trata del fruto comestible 
                        de las plantas del género Fragaria.Las frutillas integran el conjunto 
                        de las infrutescencias: .</p>
                      
                    
                  </div>
              

            </div>
        </div>
        <div className="row my-5">
        <div className="col-lg-6">
        <Paper>
        <Chart
          data={chartData}>
          <ArgumentAxis />
          <ValueAxis max={7} />
          <BarSeries
            valueField="population"
            argumentField="year"
          />
          <Title text="Info nutricional" />
          <Animation />
        </Chart>
      </Paper>
      </div>
      <div className="col-lg-6">
      <Paper>
        <Chart
          data={chartData2}
        >
          <PieSeries
            valueField="area"
            argumentField="country"
          />
          <Title
            text="Vitaminas"
          />
          <Animation />
        </Chart>
      </Paper>
      </div>
        </div>
        </div>
    );
  }
}

export default Producto;

