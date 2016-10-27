// Customer Charts
// ==============

// Customer Status
var customerStatus = $("#customer-status");
var customerStatusData= {
    labels: [
        "Booking",
        "In Progress",
        "No Booking"
    ],
    datasets: [
        {
            data: [245, 102, 1118],
            backgroundColor: [
                "#77C044",
                "#40c7f1",
                "#e75425"
            ]
        }
    ]
};
var customerStatusChart= new Chart(customerStatus, {
    type: 'pie',
    data: customerStatusData,
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

// Customer System Status
var customerSystemStatus = $("#customer-system-status");
var customerSystemStatusData= {
    labels: [
        "Active",
        "Deactive",
        "Block"
    ],
    datasets: [
        {
            data: [987, 330, 148],
            backgroundColor: [
                "#77C044",
                "#666666",
                "#ed1c24"
            ]
        }
    ]
};
var customerSystemStatusChart= new Chart(customerSystemStatus, {
    type: 'doughnut',
    data: customerSystemStatusData,
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

// New Customer
var customerNewCustomer = $("#customer-new-customer");
var customerNewCustomerData= {
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
            data: [75, 47, 63, 102, 32, 28, 15],
            label: "New Customer",
            fill: false,
            lineTension: 0.1,
            borderWidth: 3,
            borderColor: "#e75425",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#eeeeee",
            pointBackgroundColor: "#e75425",
            pointBorderWidth: 2,
            pointBorderRadius: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#e72527",
            pointHoverBorderColor: "#ef8a6a",
            pointHoverBorderWidth: 3,
            pointHitRadius: 10,
            spanGaps: false
        }
    ]
};
var customerNewCustomerChart= new Chart(customerNewCustomer, {
    type: 'line',
    data: customerNewCustomerData,
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

