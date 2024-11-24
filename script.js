const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");

const rotationValues = [
  { minDegree: 0, maxDegree: 60, value: "กระเพรา" },
  { minDegree: 61, maxDegree: 120, value: "ต้มยำ" },
  { minDegree: 121, maxDegree: 180, value: "ข้าวซอย" },
  { minDegree: 181, maxDegree: 240, value: "ลาบ" },
  { minDegree: 241, maxDegree: 300, value: "สปาเก็ตตี้" },
  { minDegree: 301, maxDegree: 360, value: "หมูกระทะ" },
];

const data = [16, 16, 16, 16, 16, 16];
var pieColors = ["#8b35bc", "#b163da", "#8b35bc", "#b163da", "#8b35bc", "#b163da"];

let myChart = new Chart(wheel, {
  plugins: [ChartDataLabels],
  type: "pie",
  data: {
    labels: ["กระเพรา", "ต้มยำ", "ข้าวซอย", "ลาบ", "สปาเก็ตตี้", "หมูกระทะ"],
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  },
  options: {
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      tooltip: false,
      legend: { display: false },
      datalabels: {
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 15 },
      },
    },
  },
});

const valueGenerator = (angleValue) => {
  const adjustedAngle = (angleValue + 360) % 360;
  for (let i of rotationValues) {
    if (adjustedAngle >= i.minDegree && adjustedAngle <= i.maxDegree) {
      finalValue.innerHTML = `<p>เย้ได้คำตอบแล้ว: ${i.value}</p>`;
      spinBtn.disabled = false;
      break;
    }
  }
};

let count = 0;
let resultValue = 101;
spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  finalValue.innerHTML = `<p>Let's Go!</p>`;
  let randomDegree = Math.floor(Math.random() * 360);
  let rotationInterval = window.setInterval(() => {
    myChart.options.rotation += resultValue;
    myChart.update();
    if (myChart.options.rotation >= 360) {
      count += 1;
      myChart.options.rotation %= 360;
    }
    if (count > 15 && Math.abs(myChart.options.rotation - randomDegree) < 5) {
      const arrowOffset = 90;
      const adjustedDegree = (randomDegree + arrowOffset) % 360;
      valueGenerator(adjustedDegree);
      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
    }
    if (count > 10) {
      resultValue = Math.max(resultValue - 1, 1);
    }
  }, 10);
});
