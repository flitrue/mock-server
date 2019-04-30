module.exports = {
  apps: [{
    name: 'mock-server',
    script: 'bin/www',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 1,
    autorestart: true,
    watch: true,
    ignore_watch: ["node_modules"],
    watch_options: {
      "usePolling": true
    },
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy: {
    production: {
      user: 'root',
      host: '59.110.212.49',
      ref: 'origin/master',
      repo: 'https://github.com/flitrue/mock-server.git',
      path: '/var/www/html',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
