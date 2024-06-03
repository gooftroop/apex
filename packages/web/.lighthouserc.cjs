module.exports = {
    ci: {
        assert: {
            //budgetsFile: TODO budgets file,
            preset: 'lighthouse:recommended',
        },
        collect: {
            headful: false,
            settings: {
                // chromeFlags: '--no-sandbox',
                maxWaitForLoad: 10000,
            },
            url: '',
        },
        upload: {
            outputDir: './lhci',
            target: 'filesystem',
        },
    },
};
