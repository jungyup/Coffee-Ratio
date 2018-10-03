import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import * as data from './data';

import './style.css';

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
            water: 3,
            milk: 3,
            espresso: 3,
            hotChocolate: 3
        };
    }

    checkRatio = (value) => {
        let temp;

        const rates = {
            water: 0,
            milk: 0,
            espresso: 0,
            hotChocolate: 0
        };


        for (let i = 0; i < data.length; i++) {
            if (value === data[i].name) {
                temp = data[i].ingredient;
                console.log(temp);
                for (let j = 0; j < temp.length; j++) {
                    rates[temp[j].type] = temp[j].ratio;
                }
            }
        }

        this.setState(rates);
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
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe0rhQA7RKBFZZdx_di_9KI-D48R1TPHNDKmrtPzQh-IWpsukH" alt="My Favourite" />
                              <figcaption>My Favourite</figcaption>
                          </button>
                      </div>
                      <div className="right col-lg-6 mr-auto">
                          <h2 className="text-center subtitle">Your Result</h2>
                          <div>
                              <Chart
                                  chartType="PieChart"
                                  data={[["Ingredient", "Type"], milk, espresso, water, hotChocolate]}
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
