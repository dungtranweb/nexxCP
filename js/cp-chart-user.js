// User Charts
// ==============
    // User Role
var userRole = $("#user-role");
var userRoleData= {
    labels: [
        "Admin",
        "Super Mod",
        "Mod",
        "User"
    ],
    datasets: [
        {
            data: [1, 2, 1, 8],
            backgroundColor: [
                "#77C044",
                "#40c7f1",
                "#3c57a7",
                "#e75425"
            ]
        }
    ]
};
var userRoleChart= new Chart(userRole, {
    type: 'pie',
    data: userRoleData,
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

    // User System Status
var userSystemStatus = $("#user-system-status");
var userSystemStatusData= {
    labels: [
        "Active",
        "Deactive",
        "Block"
    ],
    datasets: [
        {
            data: [8, 2, 2],
            backgroundColor: [
                "#77C044",
                "#666666",
                "#ed1c24"
            ]
        }
    ]
};
var userSystemStatusChart= new Chart(userSystemStatus, {
    type: 'doughnut',
    data: userSystemStatusData,
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

    // New User
var userNewUser = $("#user-new-user");
var userNewUserData= {
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
            label: "New User",
            fill: false,
            lineTension: 0.1,
            borderWidth: 3,
            borderColor: "#40c7f1",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#eeeeee",
            pointBackgroundColor: "#40c7f1",
            pointBorderWidth: 2,
            pointBorderRadius: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#40aaf1",
            pointHoverBorderColor: "#87dcf6",
            pointHoverBorderWidth: 3,
            pointHitRadius: 10,
            spanGaps: false
        }
    ]
};
var userNewUserChart= new Chart(userNewUser, {
    type: 'line',
    data: userNewUserData,
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

