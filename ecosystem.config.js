module.exports = {
  apps: [{
    name: 'Product-Description',
    script: './server/server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-13-59-78-47.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/FEC.pem',
      ref: 'origin/master',
      repo: 'https://github.com/axe-center/JL-product-description',
      path: '/home/ubuntu/Product-Description',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}