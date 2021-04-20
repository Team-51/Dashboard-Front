var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/Team-51/Dashboard-Front.git', // Update to point to your repository  
        user: {
            name: 'sksum', // update to use your name
            email: 'sakshammrigdgr8@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)