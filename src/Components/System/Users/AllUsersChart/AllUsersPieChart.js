import React from "react";
import ReactApexChart from "react-apexcharts";
import "./index.css"

class AllUsersPieChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [70, 30],

            options: {
                chart: {

                    
                    type: 'donut',

                },
                labels:[  `السعودية 30% `,   `مصر        70%  `],


                colors: ["#03795D", "#F1416C"],
                stroke: {
                    show: false // Set this to false to remove the border of the donut segments
                },
                dataLabels: {
                    enabled: false
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 300,
                            height: 300
                        },
                        legend: {
                            show: false
                        }
                    }
                }],
                legend: {
                    position: 'left',
                    offsetY: 0,
                    height: 1000,
                }
            },


        };
    }






    render() {
        return (



            <div class="chart-wrap h-100">
           
                <div id="chart"  className="h-100 overflow-x-hidden">
                
                    <ReactApexChart options={this.state.options} series={this.state.series} type="donut"  width={"450px"}  >
                    <h2>Chart Header</h2> {/* Add your header here */} 
                        </ReactApexChart>
                </div>



            </div>)





    }
}
export default AllUsersPieChart