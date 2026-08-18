/* =====================================================
   NOVA FINANCIAL DASHBOARD
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   DASHBOARD CHART
===================================================== */

const chartElement = document.querySelector("#chart");

if (chartElement) {

    const chartOptions = {

        chart: {
            type: "area",
            height: 300,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },

        series: [
            {
                name: "Spending",
                data: [420, 650, 480, 720, 560, 830, 620]
            }
        ],

        xaxis: {
            categories: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ]
        },

        colors: [
            "#2563eb"
        ],

        stroke: {
            curve: "smooth",
            width: 4
        },

        fill: {
            type: "gradient",

            gradient: {
                opacityFrom: 0.25,
                opacityTo: 0.03
            }
        },

        dataLabels: {
            enabled: false
        },

        markers: {
            size: 0
        },

        grid: {
            borderColor: "#e5e7eb",
            strokeDashArray: 4
        },

        tooltip: {
            theme: "light"
        }

    };


    const dashboardChart =
        new ApexCharts(
            chartElement,
            chartOptions
        );


    dashboardChart.render();


    const weekButton =
        document.querySelector(".week-button");

    const monthButton =
        document.querySelector(".month-button");


    if (weekButton && monthButton) {


        weekButton.addEventListener(
            "click",
            function () {

                dashboardChart.updateOptions({

                    xaxis: {
                        categories: [
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thu",
                            "Fri",
                            "Sat",
                            "Sun"
                        ]
                    },

                    series: [
                        {
                            name: "Spending",
                            data: [
                                420,
                                650,
                                480,
                                720,
                                560,
                                830,
                                620
                            ]
                        }
                    ]

                });


                weekButton.classList.add(
                    "active-chart-button"
                );

                monthButton.classList.remove(
                    "active-chart-button"
                );

            }
        );


        monthButton.addEventListener(
            "click",
            function () {

                dashboardChart.updateOptions({

                    xaxis: {
                        categories: [
                            "Week 1",
                            "Week 2",
                            "Week 3",
                            "Week 4"
                        ]
                    },

                    series: [
                        {
                            name: "Spending",
                            data: [
                                3200,
                                4100,
                                3600,
                                4800
                            ]
                        }
                    ]

                });


                monthButton.classList.add(
                    "active-chart-button"
                );

                weekButton.classList.remove(
                    "active-chart-button"
                );

            }
        );

    }

}


/* =====================================================
   QUICK TRANSFER
===================================================== */

const sendTransfer =
    document.getElementById("sendTransfer");

const transferAmount =
    document.getElementById("transferAmount");

const transferMessage =
    document.getElementById("transferMessage");


if (sendTransfer) {

    sendTransfer.addEventListener(
        "click",
        function () {

            const amount =
                transferAmount.value.trim();


            if (amount === "") {

                transferMessage.textContent =
                    "Please enter an amount.";

                transferMessage.style.color =
                    "red";

                return;

            }


            if (Number(amount) <= 0) {

                transferMessage.textContent =
                    "Please enter a valid amount.";

                transferMessage.style.color =
                    "red";

                return;

            }


            transferMessage.textContent =
                "Transfer of $" +
                Number(amount).toFixed(2) +
                " sent successfully.";

            transferMessage.style.color =
                "green";


            transferAmount.value = "";

        }
    );

}


/* =====================================================
   TRANSACTIONS SEARCH + FILTER
===================================================== */
const transactionSearch = document.getElementById("transactionSearch");
const statusFilter = document.getElementById("statusFilter");
const categoryFilter = document.getElementById("categoryFilter");
const transactionRows = document.querySelectorAll(
    "#transactionsTable tbody tr"
);

function filterTransactions() {

    const searchValue = transactionSearch
        ? transactionSearch.value.toLowerCase().trim()
        : "";

    const statusValue = statusFilter
        ? statusFilter.value
        : "all";

    const categoryValue = categoryFilter
        ? categoryFilter.value
        : "all";

    transactionRows.forEach(function (row) {

        const text = row.textContent.toLowerCase();

        const rowStatus = row.dataset.status;
        const rowCategory = row.dataset.category;

        const matchesSearch =
            text.includes(searchValue);

        const matchesStatus =
            statusValue === "all" ||
            rowStatus === statusValue;

        const matchesCategory =
            categoryValue === "all" ||
            rowCategory === categoryValue;

        if (
            matchesSearch &&
            matchesStatus &&
            matchesCategory
        ) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });
}


if (transactionSearch) {
    transactionSearch.addEventListener(
        "input",
        filterTransactions
    );
}

if (statusFilter) {
    statusFilter.value = "all";

    statusFilter.addEventListener(
        "change",
        filterTransactions
    );
}

if (categoryFilter) {
    categoryFilter.value = "all";

    categoryFilter.addEventListener(
        "change",
        filterTransactions
    );
}

filterTransactions();
 
/* =====================================================
   ANALYTICS CHARTS
===================================================== */

const incomeExpenseElement =
    document.querySelector(
        "#incomeExpenseChart"
    );


if (incomeExpenseElement) {


    const incomeExpenseOptions = {

        chart: {
            type: "bar",
            height: 300,
            toolbar: {
                show: false
            }
        },

        series: [

            {
                name: "Income",

                data: [
                    6200,
                    7100,
                    6800,
                    7600,
                    7900,
                    8249
                ]
            },

            {
                name: "Expenses",

                data: [
                    3200,
                    3500,
                    3100,
                    3800,
                    3600,
                    3842
                ]
            }

        ],

        xaxis: {

            categories: [
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug"
            ]

        },

        colors: [
            "#2563eb",
            "#ef4444"
        ],

        plotOptions: {

            bar: {

                borderRadius: 5,

                columnWidth: "55%"

            }

        },

        dataLabels: {
            enabled: false
        },

        grid: {

            borderColor: "#e5e7eb",

            strokeDashArray: 4

        }

    };


    const incomeExpenseChart =
        new ApexCharts(
            incomeExpenseElement,
            incomeExpenseOptions
        );


    incomeExpenseChart.render();

}


/* =====================================================
   CATEGORY CHART
===================================================== */

const categoryElement =
    document.querySelector(
        "#categoryChart"
    );


if (categoryElement) {


    const categoryOptions = {

        chart: {

            type: "donut",

            height: 300

        },

        series: [
            850,
            620,
            430,
            390,
            310
        ],

        labels: [
            "Shopping",
            "Food",
            "Entertainment",
            "Transport",
            "Others"
        ],

        colors: [
            "#2563eb",
            "#60a5fa",
            "#93c5fd",
            "#bfdbfe",
            "#dbeafe"
        ],

        legend: {
            position: "bottom"
        },

        dataLabels: {
            enabled: false
        }

    };


    const categoryChart =
        new ApexCharts(
            categoryElement,
            categoryOptions
        );


    categoryChart.render();

}


/* =====================================================
   CASH FLOW CHART
===================================================== */

const cashFlowElement =
    document.querySelector(
        "#cashFlowChart"
    );


if (cashFlowElement) {


    const cashFlowOptions = {

        chart: {

            type: "area",

            height: 280,

            toolbar: {
                show: false
            }

        },

        series: [

            {
                name: "Cash Flow",

                data: [
                    2800,
                    3600,
                    3300,
                    3900,
                    4300,
                    4406
                ]

            }

        ],

        xaxis: {

            categories: [
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug"
            ]

        },

        colors: [
            "#2563eb"
        ],

        stroke: {

            curve: "smooth",

            width: 3

        },

        fill: {

            type: "gradient",

            gradient: {

                opacityFrom: 0.3,

                opacityTo: 0.05

            }

        },

        dataLabels: {
            enabled: false
        },

        grid: {

            borderColor: "#e5e7eb",

            strokeDashArray: 4

        }

    };


    const cashFlowChart =
        new ApexCharts(
            cashFlowElement,
            cashFlowOptions
        );


    cashFlowChart.render();

}


/* =====================================================
   MY CARDS
===================================================== */

const lockCardButton =
    document.getElementById(
        "lockCardButton"
    );


if (lockCardButton) {


    let cardLocked = false;


    lockCardButton.addEventListener(
        "click",
        function () {


            if (!cardLocked) {

                cardLocked = true;


                lockCardButton.innerHTML =
                    '<i class="bi bi-unlock"></i> Unlock Card';


                lockCardButton.style.background =
                    "#f9d7db";


                lockCardButton.style.color =
                    "red";


            } else {


                cardLocked = false;


                lockCardButton.innerHTML =
                    '<i class="bi bi-lock"></i> Lock Card';


                lockCardButton.style.background =
                    "white";


                lockCardButton.style.color =
                    "#202124";

            }

        }
    );

}


/* =====================================================
   SET PRIMARY CARD
===================================================== */

const setPrimaryButton =
    document.getElementById(
        "setPrimaryButton"
    );


if (setPrimaryButton) {


    setPrimaryButton.addEventListener(
        "click",
        function () {

            setPrimaryButton.textContent =
                "Primary";


            setPrimaryButton.style.background =
                "#d9f1df";


            setPrimaryButton.style.color =
                "green";


            setPrimaryButton.style.border =
                "none";

        }
    );

}


/* =====================================================
   ADD CARD
===================================================== */

const addCardButton =
    document.getElementById(
        "addCardButton"
    );


if (addCardButton) {

    addCardButton.addEventListener(
        "click",
        function () {

            alert(
                "Add Card feature is ready."
            );

        }
    );

}


/* =====================================================
   SETTINGS - SAVE
===================================================== */

const saveSettings =
    document.getElementById(
        "saveSettings"
    );


const saveMessage =
    document.getElementById(
        "saveMessage"
    );


if (saveSettings) {


    saveSettings.addEventListener(
        "click",
        function () {

            saveMessage.textContent =
                "Your changes have been saved successfully.";

            saveMessage.style.color =
                "green";

        }
    );

}


/* =====================================================
   SETTINGS - NOTIFICATIONS
===================================================== */

const notificationSwitches =
    document.querySelectorAll(
        ".switch input"
    );


const notificationMessage =
    document.getElementById(
        "notificationMessage"
    );


if (notificationSwitches.length > 0) {


    notificationSwitches.forEach(
        function (item) {

            item.addEventListener(
                "change",
                function () {

                    if (notificationMessage) {

                        if (item.checked) {

                            notificationMessage.textContent =
                                "Notification enabled.";

                        } else {

                            notificationMessage.textContent =
                                "Notification disabled.";

                        }

                        notificationMessage.style.color =
                            "#2563eb";

                    }

                }
            );

        }
    );

}


/* =====================================================
   SETTINGS - CURRENCY
===================================================== */

const currencySelect =
    document.getElementById(
        "currencySelect"
    );


if (currencySelect) {

    currencySelect.addEventListener(
        "change",
        function () {

            alert(
                "Currency changed to " +
                currencySelect.value
            );

        }
    );

}


/* =====================================================
   SETTINGS - LANGUAGE
===================================================== */

const languageSelect =
    document.getElementById(
        "languageSelect"
    );


if (languageSelect) {

    languageSelect.addEventListener(
        "change",
        function () {

            alert(
                "Language changed to " +
                languageSelect.value
            );

        }
    );

}


/* =====================================================
   PREMIUM BUTTON
===================================================== */

const upgradeButton =
    document.getElementById(
        "upgradeButton"
    );


if (upgradeButton) {

    upgradeButton.addEventListener(
        "click",
        function () {

            alert(
                "Premium upgrade feature is ready."
            );

        }
    );

}

const carouselCards = document.querySelectorAll(".carousel-card");
const carouselDots = document.querySelectorAll(".carousel-dot");

const cardPrev = document.getElementById("cardPrev");
const cardNext = document.getElementById("cardNext");

let currentCard = 0;

function showCard(index) {

    if (carouselCards.length === 0) {
        return;
    }

    if (index < 0) {
        currentCard = carouselCards.length - 1;
    } else if (index >= carouselCards.length) {
        currentCard = 0;
    } else {
        currentCard = index;
    }

    carouselCards.forEach((card, i) => {
        card.classList.toggle(
            "active-card",
            i === currentCard
        );
    });

    carouselDots.forEach((dot, i) => {
        dot.classList.toggle(
            "active",
            i === currentCard
        );
    });
}

if (cardPrev) {
    cardPrev.addEventListener("click", () => {
        showCard(currentCard - 1);
    });
}

if (cardNext) {
    cardNext.addEventListener("click", () => {
        showCard(currentCard + 1);
    });
}

carouselDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showCard(index);
    });
});
/* =========================================================
   MY CARDS CAROUSEL + FREEZE CARD
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       CARD CAROUSEL
    ===================================================== */

    const carouselCards =
        document.querySelectorAll(".carousel-card");

    const carouselDots =
        document.querySelectorAll(".carousel-dot");

    const cardPrev =
        document.getElementById("cardPrev");

    const cardNext =
        document.getElementById("cardNext");

    let currentCard = 0;


    function showCard(index) {

        if (carouselCards.length === 0) {
            return;
        }

        if (index < 0) {
            currentCard = carouselCards.length - 1;
        }
        else if (index >= carouselCards.length) {
            currentCard = 0;
        }
        else {
            currentCard = index;
        }


        carouselCards.forEach(function (card, i) {

            if (i === currentCard) {
                card.classList.add("active-card");
            }
            else {
                card.classList.remove("active-card");
            }

        });


        carouselDots.forEach(function (dot, i) {

            if (i === currentCard) {
                dot.classList.add("active");
            }
            else {
                dot.classList.remove("active");
            }

        });

    }


    if (cardPrev) {

        cardPrev.addEventListener("click", function () {

            showCard(currentCard - 1);

        });

    }


    if (cardNext) {

        cardNext.addEventListener("click", function () {

            showCard(currentCard + 1);

        });

    }


    carouselDots.forEach(function (dot, index) {

        dot.addEventListener("click", function () {

            showCard(index);

        });

    });


    /* =====================================================
       FREEZE / UNFREEZE CARD
    ===================================================== */

    const freezeToggle =
        document.getElementById("freezeToggle");

    const cardStatus =
        document.querySelector(".card-status");


    if (freezeToggle) {

        freezeToggle.addEventListener("click", function () {

            const currentlyFrozen =
                freezeToggle.classList.contains("frozen");


            if (currentlyFrozen) {

                /* =========================================
                   UNFREEZE
                ========================================= */

                freezeToggle.classList.remove("frozen");

                freezeToggle.classList.add("active");


                if (cardStatus) {

                    cardStatus.textContent = "Active";

                    cardStatus.classList.remove("frozen");

                    cardStatus.classList.add("active");

                }


                carouselCards.forEach(function (card) {

                    card.classList.remove("frozen-card");

                });

            }
            else {

                /* =========================================
                   FREEZE
                ========================================= */

                freezeToggle.classList.remove("active");

                freezeToggle.classList.add("frozen");


                if (cardStatus) {

                    cardStatus.textContent = "Frozen";

                    cardStatus.classList.remove("active");

                    cardStatus.classList.add("frozen");

                }


                carouselCards.forEach(function (card) {

                    card.classList.add("frozen-card");

                });

            }

        });

    }
    /* =====================================================
   ONLINE PAYMENTS TOGGLE
===================================================== */

const onlineToggle =
    document.getElementById("onlineToggle");

if (onlineToggle) {

    onlineToggle.addEventListener("click", function () {

        onlineToggle.classList.toggle("active");

    });

}


/* =====================================================
   CONTACTLESS PAYMENTS TOGGLE
===================================================== */

const contactlessToggle =
    document.getElementById("contactlessToggle");

if (contactlessToggle) {

    contactlessToggle.addEventListener("click", function () {

        contactlessToggle.classList.toggle("active");

    });

}


    /* =====================================================
       INITIAL CARD
    ===================================================== */

    showCard(0);

});


/* =========================================================
   MOBILE NAV ACTIVE PAGE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const currentPage =
        window.location.pathname.split("/").pop();

    const mobileNavItems =
        document.querySelectorAll(".mobile-nav-item");


    mobileNavItems.forEach(function (item) {

        const link =
            item.getAttribute("href");


        if (link === currentPage) {

            item.classList.add("active");

        }

    });

});


// ================= DARK MODE =================

const savedTheme = localStorage.getItem("novaTheme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

const darkModeToggle = document.getElementById("darkModeToggle");

if (darkModeToggle) {

    darkModeToggle.checked = savedTheme === "dark";

    darkModeToggle.addEventListener("change", function () {

        if (this.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("novaTheme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("novaTheme", "light");
        }

    });
}
/* =====================================================
   DARK MODE - SITE WIDE
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const darkModeToggle =
        document.getElementById("darkModeToggle");

    /* Apply saved theme */
    const savedTheme =
        localStorage.getItem("novaTheme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");

        if (darkModeToggle) {
            darkModeToggle.checked = true;
        }
    }

    /* Dark Mode Toggle */
    if (darkModeToggle) {

        darkModeToggle.addEventListener(
            "change",
            function () {

                if (darkModeToggle.checked) {

                    document.body.classList.add(
                        "dark-mode"
                    );

                    localStorage.setItem(
                        "novaTheme",
                        "dark"
                    );

                } else {

                    document.body.classList.remove(
                        "dark-mode"
                    );

                    localStorage.setItem(
                        "novaTheme",
                        "light"
                    );
                }

            }
        );
    }

});