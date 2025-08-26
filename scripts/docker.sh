#!/bin/bash

# Docker management script for Borzolini project

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to show usage
show_usage() {
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  build-dev     Build development Docker image"
    echo "  build-prod    Build production Docker image"
    echo "  run-dev       Run development container"
    echo "  run-prod      Run production container"
    echo "  run-nginx     Run production with nginx reverse proxy"
    echo "  stop          Stop all running containers"
    echo "  clean         Remove all containers and images"
    echo "  logs          Show container logs"
    echo "  shell         Open shell in running container"
    echo "  help          Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 build-dev"
    echo "  $0 run-dev"
    echo "  $0 run-nginx"
}

# Function to check if Docker is running
check_docker() {
    if ! docker info > /dev/null 2>&1; then
        print_error "Docker is not running. Please start Docker and try again."
        exit 1
    fi
}

# Function to build development image
build_dev() {
    print_status "Building development Docker image..."
    docker build -f Dockerfile.dev -t borzolini:dev .
    print_success "Development image built successfully!"
}

# Function to build production image
build_prod() {
    print_status "Building production Docker image..."
    docker build -f Dockerfile -t borzolini:prod .
    print_success "Production image built successfully!"
}

# Function to run development container
run_dev() {
    print_status "Starting development container..."
    docker run -d \
        --name borzolini-dev \
        -p 3000:3000 \
        -v "$(pwd):/app" \
        -v /app/node_modules \
        -v /app/.next \
        -e NODE_ENV=development \
        -e NEXT_TELEMETRY_DISABLED=1 \
        borzolini:dev

    print_success "Development container started! Access at http://localhost:3000"
    print_status "Use 'docker logs borzolini-dev' to view logs"
}

# Function to run production container
run_prod() {
    print_status "Starting production container..."
    docker run -d \
        --name borzolini-prod \
        -p 3000:3000 \
        -e NODE_ENV=production \
        -e NEXT_TELEMETRY_DISABLED=1 \
        --restart unless-stopped \
        borzolini:prod

    print_success "Production container started! Access at http://localhost:3000"
    print_status "Use 'docker logs borzolini-prod' to view logs"
}

# Function to run with nginx
run_nginx() {
    print_status "Starting production with nginx reverse proxy..."
    docker compose --profile prod-nginx up -d

    print_success "Production with nginx started!"
    print_status "Access at http://localhost (nginx proxy)"
    print_status "Use 'docker compose logs' to view logs"
}

# Function to stop containers
stop_containers() {
    print_status "Stopping all containers..."
    docker compose down
    docker stop borzolini-dev borzolini-prod 2>/dev/null || true
    print_success "All containers stopped!"
}

# Function to clean up
clean_up() {
    print_warning "This will remove all containers and images. Are you sure? (y/N)"
    read -r response
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        print_status "Cleaning up Docker resources..."
        docker compose down --rmi all --volumes --remove-orphans
        docker stop borzolini-dev borzolini-prod 2>/dev/null || true
        docker rm borzolini-dev borzolini-prod 2>/dev/null || true
        docker rmi borzolini:dev borzolini:prod 2>/dev/null || true
        docker system prune -f
        print_success "Cleanup completed!"
    else
        print_status "Cleanup cancelled."
    fi
}

# Function to show logs
show_logs() {
    if docker ps --format "{{.Names}}" | grep -q "borzolini"; then
        print_status "Showing logs for running containers..."
        docker compose logs -f
    else
        print_error "No running containers found."
        exit 1
    fi
}

# Function to open shell
open_shell() {
    local container_name=""

    if docker ps --format "{{.Names}}" | grep -q "borzolini-dev"; then
        container_name="borzolini-dev"
    elif docker ps --format "{{.Names}}" | grep -q "borzolini-prod"; then
        container_name="borzolini-prod"
    else
        print_error "No running containers found."
        exit 1
    fi

    print_status "Opening shell in container: $container_name"
    docker exec -it "$container_name" /bin/sh
}

# Main script logic
main() {
    check_docker

    case "${1:-help}" in
        "build-dev")
            build_dev
            ;;
        "build-prod")
            build_prod
            ;;
        "run-dev")
            run_dev
            ;;
        "run-prod")
            run_prod
            ;;
        "run-nginx")
            run_nginx
            ;;
        "stop")
            stop_containers
            ;;
        "clean")
            clean_up
            ;;
        "logs")
            show_logs
            ;;
        "shell")
            open_shell
            ;;
        "help"|*)
            show_usage
            ;;
    esac
}

# Run main function with all arguments
main "$@"
