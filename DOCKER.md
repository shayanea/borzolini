# Docker Setup for Borzolini

This document explains how to use Docker with the Borzolini project for both development and production environments.

## Prerequisites

- Docker Desktop installed and running
- Docker Compose (usually included with Docker Desktop)
- At least 4GB of available RAM for Docker

## Quick Start

### 1. Development Environment

```bash
# Build and run development container
./scripts/docker.sh build-dev
./scripts/docker.sh run-dev

# Or use Docker Compose
docker-compose --profile dev up -d
```

Access your app at: http://localhost:3000

### 2. Production Environment

```bash
# Build and run production container
./scripts/docker.sh build-prod
./scripts/docker.sh run-prod

# Or use Docker Compose
docker-compose --profile prod up -d
```

Access your app at: http://localhost:3000

### 3. Production with Nginx Reverse Proxy

```bash
# Run with nginx for production deployment
./scripts/docker.sh run-nginx

# Or use Docker Compose
docker-compose --profile prod-nginx up -d
```

Access your app at: http://localhost (nginx proxy)

## Docker Commands

### Using the Docker Script

```bash
# Show all available commands
./scripts/docker.sh help

# Build images
./scripts/docker.sh build-dev      # Development image
./scripts/docker.sh build-prod     # Production image

# Run containers
./scripts/docker.sh run-dev        # Development container
./scripts/docker.sh run-prod       # Production container
./scripts/docker.sh run-nginx      # Production with nginx

# Management
./scripts/docker.sh stop           # Stop all containers
./scripts/docker.sh clean          # Clean up all resources
./scripts/docker.sh logs           # View logs
./scripts/docker.sh shell          # Open shell in container
```

### Direct Docker Commands

```bash
# Build images
docker build -f Dockerfile.dev -t borzolini:dev .
docker build -f Dockerfile -t borzolini:prod .

# Run containers
docker run -d --name borzolini-dev -p 3000:3000 borzolini:dev
docker run -d --name borzolini-prod -p 3000:3000 borzolini:prod

# View logs
docker logs borzolini-dev
docker logs borzolini-prod

# Stop containers
docker stop borzolini-dev borzolini-prod

# Remove containers
docker rm borzolini-dev borzolini-prod

# Remove images
docker rmi borzolini:dev borzolini:prod
```

## Docker Compose Profiles

### Development Profile
```bash
docker-compose --profile dev up -d
```
- Hot reloading enabled
- Source code mounted as volume
- Development dependencies
- Accessible at http://localhost:3000

### Production Profile
```bash
docker-compose --profile prod up -d
```
- Production build
- Optimized for performance
- No source code mounting
- Accessible at http://localhost:3000

### Production with Nginx Profile
```bash
docker-compose --profile prod-nginx up -d
```
- Production build with nginx reverse proxy
- Load balancing and caching
- Security headers
- Rate limiting
- Accessible at http://localhost (nginx proxy)

## Environment Variables

### Development
- `NODE_ENV=development`
- `NEXT_TELEMETRY_DISABLED=1`

### Production
- `NODE_ENV=production`
- `NEXT_TELEMETRY_DISABLED=1`
- `PORT=3000`
- `HOSTNAME=0.0.0.0`

## File Structure

```
├── Dockerfile              # Production Dockerfile
├── Dockerfile.dev          # Development Dockerfile
├── docker-compose.yml      # Docker Compose configuration
├── .dockerignore          # Files to exclude from Docker build
├── nginx.conf             # Nginx configuration
└── scripts/
    └── docker.sh          # Docker management script
```

## Dockerfile Details

### Production Dockerfile (`Dockerfile`)
- Multi-stage build for optimization
- Uses Node.js 20 Alpine for smaller image size
- Standalone output for better performance
- Non-root user for security
- Optimized for production builds

### Development Dockerfile (`Dockerfile.dev`)
- Single-stage build for simplicity
- Volume mounting for hot reloading
- Development dependencies included
- Optimized for development workflow

## Nginx Configuration

The nginx configuration includes:
- Reverse proxy to Next.js app
- Gzip compression
- Static file caching
- Rate limiting
- Security headers
- Health check endpoint
- SSL support (commented out)

## Performance Optimizations

### Production Build
- Multi-stage Docker build
- Standalone output mode
- Alpine Linux base image
- Non-root user execution
- Optimized layer caching

### Development Build
- Volume mounting for fast file changes
- Development server with hot reloading
- Source maps enabled
- Fast refresh support

## Security Features

- Non-root user execution
- Security headers via nginx
- Rate limiting
- Input validation
- Environment variable isolation

## Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Check what's using port 3000
   lsof -i :3000
   
   # Stop existing containers
   ./scripts/docker.sh stop
   ```

2. **Permission denied**
   ```bash
   # Make script executable
   chmod +x scripts/docker.sh
   ```

3. **Build fails**
   ```bash
   # Clean up and rebuild
   ./scripts/docker.sh clean
   ./scripts/docker.sh build-dev
   ```

4. **Container won't start**
   ```bash
   # Check logs
   ./scripts/docker.sh logs
   
   # Check container status
   docker ps -a
   ```

### Debug Commands

```bash
# View container logs
docker logs <container-name>

# Execute commands in container
docker exec -it <container-name> /bin/sh

# Inspect container
docker inspect <container-name>

# View resource usage
docker stats
```

## Production Deployment

### Single Container
```bash
# Build and run production container
./scripts/docker.sh build-prod
./scripts/docker.sh run-prod
```

### With Nginx Reverse Proxy
```bash
# Run production with nginx
./scripts/docker.sh run-nginx
```

### Environment Variables
Create a `.env` file for production:
```env
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
# Add other production environment variables
```

## Monitoring and Logs

### View Logs
```bash
# All containers
./scripts/docker.sh logs

# Specific container
docker logs <container-name>

# Follow logs in real-time
docker logs -f <container-name>
```

### Health Checks
- Nginx health endpoint: http://localhost/health
- Container health status: `docker ps`

## Best Practices

1. **Always use the latest stable Node.js version**
2. **Use multi-stage builds for production**
3. **Implement proper health checks**
4. **Use non-root users**
5. **Optimize layer caching**
6. **Monitor resource usage**
7. **Regular security updates**
8. **Backup important data**

## Support

For Docker-related issues:
1. Check the troubleshooting section
2. Review Docker logs
3. Verify Docker is running
4. Check port availability
5. Ensure sufficient system resources
