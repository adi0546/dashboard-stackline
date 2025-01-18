import { WidthFull } from "@mui/icons-material";
import { Box } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import { FC } from "react";
import { Line } from "react-chartjs-2";
import { sxWhiteBox } from "styles/productStyles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

function productGraph(props: any) {
  const { product } = props;
  const aggregatedSales = product?.sales.reduce((acc: any, sale: any) => {
    const monthYear = new Date(sale.weekEnding).toLocaleString('default', { month: 'short', year: 'numeric' });
    if (!acc[monthYear]) {
      acc[monthYear] = { retailSales: 0, wholesaleSales: 0 };
    }
    acc[monthYear].retailSales += sale.retailSales;
    acc[monthYear].wholesaleSales += sale.wholesaleSales;
    return acc;
  }, {});

  const labels = Object.keys(aggregatedSales);
  const retailSalesData = labels.map(label => aggregatedSales[label].retailSales);
  const wholesaleSalesData = labels.map(label => aggregatedSales[label].wholesaleSales);

  const data = {
    labels,
    datasets: [
      {
        label: "Retail Sales",
        data: retailSalesData,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)"
      },
      {
        label: "Wholesale Sales",
        data: wholesaleSalesData,
        fill: false,
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "rgba(54, 162, 235, 0.2)"
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Sales Data",
      },
      WidthFull,
    },
  };
  return (
    <Box sx={{ ...sxWhiteBox, height: "100%" }}>
      <Box sx={{ height: "100%", width: "100%" }}>
        <Line
          data={data}
          options={options}
          style={{ height: "100%" }}
        />
      </Box>
    </Box>
  );
}

export default productGraph;