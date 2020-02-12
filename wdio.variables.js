module.exports = {
    baseUrl: process.env.BASE_URL || "https://lun.ua",
    reportFolder: "reports",
    jsonReportFolder: "reports/cucumberjs/",
    htmlReportFolder: "reports/html/",

    local: {
        capabilities: [
            {
                browserName: "chrome",
                'goog:chromeOptions': {
                    args: [
                        '--disable-infobars',
                        '--start-maximized'
                    ]
                },
            },
        ],
    }

    
};
