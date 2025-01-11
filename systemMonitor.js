import si from 'systeminformation';

const THRESHOLDS = {
  CPU_USAGE: 80, // percentage
  MEMORY_USAGE: 80, // percentage
  DISK_USAGE: 90, // percentage
};

async function checkSystemHealth() {
  try {
    // Get CPU usage
    const cpuLoad = await si.currentLoad();
    const cpuUsage = cpuLoad.currentLoad;

    // Get memory usage
    const memory = await si.mem();
    const memoryUsage = (memory.used / memory.total) * 100;

    // Get disk usage
    const fsSize = await si.fsSize();
    const diskUsage = fsSize[0].use; // Percentage used of first disk

    // Get running processes count
    const processes = await si.processes();
    const runningProcesses = processes.all;

    // Print results
    console.log('\n=== System Health Report ===');
    console.log(`CPU Usage: ${cpuUsage.toFixed(2)}%${cpuUsage > THRESHOLDS.CPU_USAGE ? ' ⚠️ HIGH' : ''}`);
    console.log(`Memory Usage: ${memoryUsage.toFixed(2)}%${memoryUsage > THRESHOLDS.MEMORY_USAGE ? ' ⚠️ HIGH' : ''}`);
    console.log(`Disk Usage: ${diskUsage.toFixed(2)}%${diskUsage > THRESHOLDS.DISK_USAGE ? ' ⚠️ HIGH' : ''}`);
    console.log(`Running Processes: ${runningProcesses}`);
    console.log('=========================\n');

    // Check for alerts
    const alerts = [];
    if (cpuUsage > THRESHOLDS.CPU_USAGE) alerts.push(`High CPU usage: ${cpuUsage.toFixed(2)}%`);
    if (memoryUsage > THRESHOLDS.MEMORY_USAGE) alerts.push(`High memory usage: ${memoryUsage.toFixed(2)}%`);
    if (diskUsage > THRESHOLDS.DISK_USAGE) alerts.push(`High disk usage: ${diskUsage.toFixed(2)}%`);

    if (alerts.length > 0) {
      console.log('⚠️ ALERTS:');
      alerts.forEach(alert => console.log(`- ${alert}`));
    }

  } catch (error) {
    console.error('Error monitoring system:', error);
  }
}

// Run initial check
checkSystemHealth();

// Continue monitoring every 5 seconds
setInterval(checkSystemHealth, 5000);