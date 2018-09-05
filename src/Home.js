import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import * as data from './data';

import './style.css';

// const data = require('json!./data');
console.log(data);

// Initial Pie Chart
const coffeePieChart = {
    title: "Coffee Pie Chart",
    pieHole: 0.5,
    slices: [
        {
            color: "#2BB673"
        },
        {
            color: "#d91e48"
        },
        {
            color: "#007fad"
        },
        {
            color: "#e9a227"
        }
    ],
    legend: {
        position: "bottom",
        alignment: "left",
        textStyle: {
            color: "233238",
            fontSize: 14
        }
    },
    tooltip: {
        showColorCode: true
    },
    chartArea: {
        left: 0,
        top: 0,
        width: "100%",
        height: "80%"
    },
    fontName: "Roboto"
};

class Home extends Component {

    constructor(props) {
        super(props);

        super(props);

        this.state = {
            espresso: 3,
            water: 3,
            milk: 3,
            hotChocolate: 1
        };
    }

    checkRatio = (value) => {
        // console.log(data);
        if (value === 'Americano') {
            let temp = data[1].ingredient;

            this.setState({
                water: temp[0].ratio,
                espresso: temp[1].ratio,
                milk: 0,
                hotChocolate: 0
            });
            // console.log(initialPie);
            // return initialPie;
        } else if (value === 'Latte') {
            let temp = data[1].ingredient;

            this.setState({
                milk: temp[0].ratio,
                espresso: temp[1].ratio,
                water: 0,
                hotChocolate: 0
            });
        } else if (value === 'Mocha') {
            let temp = data[2].ingredient;

            this.setState({
                milk: 0,
                espresso: temp[1].ratio,
                hotChocolate: temp[0].ratio,
                water: 0
            });
        } else {
            document.getElementById('result').innerHTML = "Hello!";
        }
        // let temp = data;
        // console.log(temp[0].ingredient[0].type);
        //return null;
    };

    render() {

        //const checkRatio = _.debounce((value) => { this.checkRatio(value) }, 300);

        // if (this.checkRatio() == 'test') {
        //     console.log('lala');
        // }



        let milk = ["Milk", this.state.milk];
        let espresso = ["Espresso", this.state.espresso];
        let water = ["Water", this.state.water];
        let hotChocolate = ["Hot Chocolate", this.state.hotChocolate];

        return(
            <section className="mb-0">
              <div className="container">
                  <h2 className="text-center text-uppercase">Coffee Ratio</h2>
                  <hr className="star-light mb-5" />
                  <div className="row">
                      <div className="left col-lg-6 mr-auto">
                          <h2 className="text-center subtitle">Select Your Coffee</h2>
                          <button onClick={()=>this.checkRatio('Americano')}>Americano</button>
                          <button onClick={()=>this.checkRatio('Latte')}>Latte</button>
                          <button onClick={()=>this.checkRatio('Mocha')}>Mocha</button>
                      </div>
                      <div className="right col-lg-6 mr-auto">
                          <h2 className="text-center subtitle">Your Result</h2>
                          <p id="result">Yoyoyo</p>
                          <div>
                              <Chart
                                  chartType="PieChart"
                                  data={[["Age", "Weight"], milk, espresso, water, hotChocolate]}
                                  options={coffeePieChart}
                                  graph_id="PieChart"
                                  width={"100%"}
                                  height={"400px"}
                                  legend_toggle
                              />
                          </div>
                      </div>
                  </div>
              </div>
            </section>
        );
    }
}

export default Home;