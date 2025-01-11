# Wisecow 🐮

A fun Kubernetes-deployed web service that displays ASCII cow art with messages.

## Overview

Wisecow is a simple Node.js application that serves ASCII cow art through a web interface. It's containerized using Docker and deployed on Kubernetes with automated CI/CD through GitHub Actions.

## Features

- 🐄 ASCII cow art display
- 🔒 Secure TLS communication
- ⚡ Load balanced deployment
- 🚀 Automated CI/CD pipeline
- 🎯 High availability with multiple replicas

## Tech Stack


# System Monitoring Tools

This repository contains two system monitoring scripts implemented in Python:

1. System Health Monitor
2. Application Health Checker

## System Health Monitor

A Python script that monitors various system metrics including CPU usage, memory usage, and running processes. The script alerts when system resources exceed predefined thresholds.

### Features:
- CPU usage monitoring
- Memory usage tracking
- Process monitoring
- Configurable alert thresholds
- Console-based alerts

### Usage:
```bash
python system_monitor.py
```

## Application Health Checker

A script that monitors application uptime and health by checking HTTP status codes. It determines if an application is functioning correctly by making HTTP requests to specified endpoints.

### Features:
- HTTP status code checking
- Uptime monitoring
- Response time tracking
- Support for multiple endpoints
- Simple status reporting (UP/DOWN)

### Usage:
```bash
python app_health_checker.py
```

## Requirements

- Python 3.x
- Required Python packages:
  - psutil (for system monitoring)
  - requests (for HTTP requests)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install required packages:
```bash
pip install psutil requests
```

## Configuration

Both scripts can be configured by modifying their respective configuration sections:

### System Monitor Thresholds:
- CPU Usage: 80%
- Memory Usage: 90%
- Alert Interval: 60 seconds

### Health Checker Settings:
- Request Timeout: 30 seconds
- Check Interval: 5 minutes
- Retry Attempts: 3

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License
