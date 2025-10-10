# Docker Setup

Quick reference for containerized deployment. Using Alpine base images to keep things lightweight.

## Quick Start

Development:

```bash
./scripts/docker.sh build-dev
./scripts/docker.sh run-dev
# or: docker-compose --profile dev up -d
```

Production:

```bash
./scripts/docker.sh build-prod
./scripts/docker.sh run-prod
# or: docker-compose --profile prod up -d
```

Production with nginx:

```bash
./scripts/docker.sh run-nginx
# or: docker-compose --profile prod-nginx up -d
```

App runs on http://localhost:3000 (or http://localhost with nginx)

## Available Commands

Helper script commands:

```bash
./scripts/docker.sh help        # show all options
./scripts/docker.sh build-dev   # build dev image
./scripts/docker.sh build-prod  # build prod image
./scripts/docker.sh run-dev     # run dev container
./scripts/docker.sh run-prod    # run prod container
./scripts/docker.sh run-nginx   # run prod with nginx
./scripts/docker.sh stop        # stop containers
./scripts/docker.sh clean       # clean everything
./scripts/docker.sh logs        # view logs
./scripts/docker.sh shell       # open shell in container
```

Direct docker commands if you prefer:

```bash
docker build -f Dockerfile.dev -t borzolini:dev .
docker build -f Dockerfile -t borzolini:prod .
docker run -d --name borzolini-dev -p 3000:3000 borzolini:dev
docker run -d --name borzolini-prod -p 3000:3000 borzolini:prod
```

## Profiles

**dev**: Hot reloading, source mounted as volume
**prod**: Optimized build, no source mounting
**prod-nginx**: Production with nginx reverse proxy (caching, rate limiting, security headers)

## Environment Variables

Dev: `NODE_ENV=development`, `NEXT_TELEMETRY_DISABLED=1`
Prod: `NODE_ENV=production`, `NEXT_TELEMETRY_DISABLED=1`, `PORT=3000`, `HOSTNAME=0.0.0.0`

## Files

- `Dockerfile` - Multi-stage production build (Node 20 Alpine)
- `Dockerfile.dev` - Single-stage dev build with volume mounting
- `docker-compose.yml` - Compose config with profiles
- `nginx.conf` - Reverse proxy config (gzip, caching, rate limiting)
- `scripts/docker.sh` - Helper script for common commands

## Notes

Production Dockerfile uses standalone output mode for better performance. Running as non-root user for security.

Nginx config includes health check endpoint at `/health` and security headers. SSL support is commented out but ready to enable.

## Common Issues

Port 3000 in use:

```bash
lsof -i :3000
./scripts/docker.sh stop
```

Script not executable:

```bash
chmod +x scripts/docker.sh
```

Build fails:

```bash
./scripts/docker.sh clean
./scripts/docker.sh build-dev
```

Container won't start - check logs:

```bash
./scripts/docker.sh logs
docker ps -a
```

## Debug

```bash
docker logs <container-name>           # view logs
docker logs -f <container-name>        # follow logs
docker exec -it <container-name> /bin/sh  # open shell
docker stats                           # resource usage
```

Health check endpoint: http://localhost/health (nginx only)
