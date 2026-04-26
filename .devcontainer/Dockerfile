FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm

RUN mkdir -p /home/node/.codex /home/node/.vscode-server \
    && chown -R node:node /home/node/.codex /home/node/.vscode-server

RUN npm install --global @angular/cli
