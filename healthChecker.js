import fetch from 'node-fetch';

const SITES_TO_CHECK = [
  { name: 'Google', url: 'https://www.google.com' },
  { name: 'GitHub', url: 'https://www.github.com' },
  { name: 'Example', url: 'https://example.com' }
];

const CHECK_INTERVAL = 60000; // 1 minute

async function checkSiteHealth(site) {
  try {
    const startTime = Date.now();
    const response = await fetch(site.url);
    const responseTime = Date.now() - startTime;

    const status = response.status;
    const isUp = status >= 200 && status < 400;

    return {
      name: site.name,
      url: site.url,
      status,
      responseTime,
      isUp,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    return {
      name: site.name,
      url: site.url,
      status: 'ERROR',
      responseTime: null,
      isUp: false,
      error: error.message,
      timestamp: new Date().toISOString()
    };
  }
}

async function checkAllSites() {
  console.log('\n=== Application Health Check Report ===');
  console.log(`Time: ${new Date().toISOString()}`);
  console.log('=====================================');

  for (const site of SITES_TO_CHECK) {
    const health = await checkSiteHealth(site);
    
    console.log(`\n${site.name}:`);
    console.log(`Status: ${health.isUp ? '✅ UP' : '❌ DOWN'}`);
    console.log(`Response Code: ${health.status}`);
    if (health.responseTime) {
      console.log(`Response Time: ${health.responseTime}ms`);
    }
    if (health.error) {
      console.log(`Error: ${health.error}`);
    }
  }

  console.log('\n=====================================\n');
}

// Run initial check
checkAllSites();

// Continue checking at specified interval
setInterval(checkAllSites, CHECK_INTERVAL);