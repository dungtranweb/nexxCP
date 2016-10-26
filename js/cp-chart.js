// Global Setting
// ==============
    // Fonts
Chart.defaults.global.defaultFontFamily = "'Open Sans', Arial, sans-serif";
Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.defaultFontStyle = "300";

    // Arc (for pie and doughnut)
Chart.defaults.global.elements.arc = {
    borderWidth: 3,
    borderColor: '#fff'
}

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
            backgroundColor: [
                "#77C044",
                "#77C044",
                "#77C044",
                "#77C044",
                "#77C044",
                "#77C044",
                "#77C044"
            ]
        }
    ]
};
var cleanerNewCleanerChart= new Chart(cleanerNewCleaner, {
    type: 'bar',
    data: cleanerNewCleanerData,
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