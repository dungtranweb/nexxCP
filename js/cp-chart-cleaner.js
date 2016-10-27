// Cleaner Charts
// ==============

    // Cleaner Status
var cleanerStatus = $("#cleaner-status");
var cleanerStatusData= {
    labels: [
        "Available",
        "Accepted",
        "In Progress"
    ],
    datasets: [
        {
            data: [20, 50, 105],
            backgroundColor: [
                "#3c57a7",
                "#77C044",
                "#e13370"
            ]
        }
    ]
};
var cleanerStatusChart= new Chart(cleanerStatus, {
    type: 'pie',
    data: cleanerStatusData,
    options: {
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 16,
                padding: 20
            }
        },
        tooltips: {
            bodyFontSize: 12,
            bodyFontStyle: 400,
            yPadding: 12
        }
    }
});

    // Cleaner System Status
var cleanerSystemStatus = $("#cleaner-system-status");
var cleanerSystemStatusData= {
    labels: [
        "Active",
        "Deactive",
        "Block"
    ],
    datasets: [
        {
            data: [70, 50, 20],
            backgroundColor: [
                "#77C044",
                "#666666",
                "#ed1c24"
            ]
        }
    ]
};
var cleanerSystemStatusChart= new Chart(cleanerSystemStatus, {
    type: 'doughnut',
    data: cleanerSystemStatusData,
    options: {
        legend: {
            display: false
        },
        tooltips: {
            bodyFontSize: 12,
            bodyFontStyle: 400,
            yPadding: 12
        },
        cutoutPercentage: 80
    }
});

    // New Cleaner
var cleanerNewCleaner = $("#cleaner-new-cleaner");
var cleanerNewCleanerData= {
    labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ],
    datasets: [
        {
            data: [5, 7, 12, 2, 3, 8, 5],
            label: "New Cleaner",
            fill: false,
            lineTension: 0.1,
            borderWidth: 3,
            borderColor: "#77C044",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#eeeeee",
            pointBackgroundColor: "#77C044",
            pointBorderWidth: 2,
            pointBorderRadius: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#217756",
            pointHoverBorderColor: "#b0d553",
            pointHoverBorderWidth: 3,
            pointHitRadius: 10,
            spanGaps: false
        }
    ]
};
var cleanerNewCleanerChart= new Chart(cleanerNewCleaner, {
    type: 'line',
    data: cleanerNewCleanerData,
    options: {
        legend: {
            display: false
        },
        tooltips: {
            bodyFontSize: 12,
            bodyFontStyle: 400,
            yPadding: 12
        }
    }
});

