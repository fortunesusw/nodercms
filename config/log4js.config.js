module.exports = {
    appenders: {
        console: {
            type: 'console'
        },
        system: {
            type: 'dateFile',
            filename: './logs/system',
            pattern: '-yyyy-MM-dd-hh.log',
            alwaysIncludePattern: true
        },
        database: {
            type: 'dateFile',
            filename: './logs/database',
            pattern: '-yyyy-MM-dd-hh.log',
            alwaysIncludePattern: true
        },
        info: {
            type: 'dateFile',
            filename: './logs/info',
            pattern: '-yyyy-MM-dd-hh.log',
            alwaysIncludePattern: true
        },
        warn: {
            type: 'dateFile',
            filename: './logs/warn',
            pattern: '-yyyy-MM-dd-hh.log',
            alwaysIncludePattern: true
        },
        error: {
            type: 'dateFile',
            filename: './logs/error',
            pattern: '-yyyy-MM-dd-hh.log',
            alwaysIncludePattern: true
        },
        access: {
            type: 'dateFile',
            filename: './logs/access',
            pattern: '-yyyy-MM-dd-hh.log',
            alwaysIncludePattern: true,
            layout: {
                type: 'pattern',
                pattern: '%d %p %h %m'
            }
        }
    },
    categories: {
        default: {
            appenders: [
                'console'
            ],
            level: 'debug'
        },
        info: {
            appenders: [
                'console', 'info'
            ],
            level: 'info'
        },
        warn: {
            appenders: [
                'console', 'warn'
            ],
            level: 'warn'
        },
        error: {
            appenders: [
                'console', 'error'
            ],
            level: 'error'
        },
        access: {
            appenders: [
                'access'
            ],
            level: 'info'
        },
        database: {
            appenders: [
                'console', 'database'
            ],
            level: 'info'
        },
        system: {
            appenders: [
                'console', 'system'
            ],
            level: 'info'
        }
    }
};