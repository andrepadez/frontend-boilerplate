module.exports = {
    dev: {
        src: [
            'node_modules/chai/chai.js',
            'config/chai_shim.js',
            'tests/**/*.js'
        ],
        options: {
            framework: 'mocha',
            launch_in_ci: ['PhantomJS'],
            launch_in_dev: ['PhantomJS'/*, 'Chrome', 'Safari'*/],
            before_tests: 'echo before_tests',
            reporting: "spec"
        } 
    }
};