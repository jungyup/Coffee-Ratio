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

        this.state = {
            espresso: 3,
            water: 3,
            milk: 3,
            hotChocolate: 1
        };
    }

    checkRatio = (value) => {
        // console.log(data);
        let temp;

        if (value === 'Americano') {
            temp = data[1].ingredient;

            this.setState({
                water: temp[0].ratio,
                espresso: temp[1].ratio,
                milk: 0,
                hotChocolate: 0
            });
        } else if (value === 'Latte') {
            temp = data[1].ingredient;

            this.setState({
                milk: temp[0].ratio,
                espresso: temp[1].ratio,
                water: 0,
                hotChocolate: 0
            });
        } else if (value === 'Mocha') {
            temp = data[3].ingredient;
            console.log(temp);
            this.setState({
                milk: 0,
                espresso: temp[1].ratio,
                hotChocolate: temp[0].ratio,
                water: 0
            });
        } else if (value === 'Favourite') {
            temp = data[2].ingredient;

            this.setState({
                milk: temp[0].ratio,
                espresso: temp[1].ratio,
                hotChocolate: temp[2].ratio,
                water: 0
            });
        }
        else {
            document.getElementById('result').innerHTML = "Please check your button name";
        }
    };

    render() {

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
                          <button onClick={()=>this.checkRatio('Americano')}>
                              <img src="http://www.yourcoffeeguru.com/wp-content/uploads/2014/07/a031dc26-f463-4d7e-8d36-6b11ac27a1c7-500x545.jpg" alt="Americano" />
                              <figcaption>Americano</figcaption>
                          </button>
                          <button onClick={()=>this.checkRatio('Latte')}>
                              <img src="https://www.caffesociety.co.uk/assets/recipe-images/latte-small.jpg" alt="Latte" />
                              <figcaption>Latte</figcaption>
                          </button>
                          <button onClick={()=>this.checkRatio('Mocha')}>
                              <img src="https://www.panerabread.com/content/dam/panerabread/menu/grid/caffe-mocha-large.jpg" alt="Mocha" />
                              <figcaption>Mocha</figcaption>
                          </button>
                          <button onClick={()=>this.checkRatio('Favourite')}>
                              <img src="https://www.nespresso.com/ncp/res/resized/w720/uploads/recipes/28578e5a6c40dbb0c9b02f046f670e82b2b9ddd8.jpg" alt="My Favourite" />
                              <figcaption>My Favourite</figcaption>
                          </button>
                      </div>
                      <div className="right col-lg-6 mr-auto">
                          <h2 className="text-center subtitle">Your Result</h2>
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