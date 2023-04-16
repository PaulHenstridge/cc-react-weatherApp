import React from "react";
// import Chart from "react-google-charts";

const WatchList = ({ list, viewFromList }) => {
    console.log({ list })
    const chartData = []
    return (<>
        <div className="watchlist-container">
            {list.length > 0 && <h2>WATCHLIST</h2>}
            {list.map(city => <h3 onClick={() => viewFromList(city)}>{city.name}</h3>)}
            {/* <Chart
            chartType="BarChart"
            data={chartData}
            options={{
                title: "Temperature Chart",
                hAxis: { title: "Location" },
                vAxis: { title: "Temperature" },
                legend: "none",
            }} */}
            {/* /> */}



        </div>


    </>);
}

export default WatchList;