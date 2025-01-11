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

This project is licensed under the MIT License - see the LICENSE file for details.
- Node.js with Express
- Docker
- Kubernetes
- GitHub Actions
- cert-manager for TLS

## Local Development

```bash
# Install dependencies
npm install

# Start the application
npm start
```

The application will be available at `http://localhost:3000`

## Deployment

The application is automatically deployed through GitHub Actions when changes are pushed to the main branch. The pipeline:

1. Builds the Docker image
2. Pushes to GitHub Container Registry
3. Deploys to Kubernetes

### Manual Deployment

If needed, you can deploy manually:

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml
```

## Architecture

- **Deployment**: 3 replicas for high availability
- **Service**: LoadBalancer type for traffic distribution
- **Ingress**: TLS-enabled access through wisecow.example.com
- **Resources**: CPU and memory limits configured for optimal performance

## Configuration

The application uses the following environment variables:
- `PORT`: Server port (default: 3000)

## Infrastructure Requirements

- Kubernetes cluster with cert-manager
- DNS configuration for the domain
- GitHub Container Registry access

## License

Create README.md for System Monitoring Scripts

npm install
README.md
I've created a README.md file that:

Describes the two chosen monitoring tools (System Health Monitor and Application Health Checker)
Provides clear usage instructions
Lists requirements and installation steps
Includes configuration details
Adds standard sections for contributing and licensing

[MIT License](LICENSE)
