# docker-template-for-vscode

Visual Studio Code の Dev Container 用テンプレート集です。

プログラミング言語の学習などに役立ててください。

## ms-* ディレクトリ

「ms-」から始まるディレクトリのテンプレートは、公式が用意した特定のプログラミング言語用の Docker Image をベースに設定を加えています。

## ubuntu-* ディレクトリ

「ubuntu-」から始まるディレクトリのテンプレートは、ubuntuの最新LTSをベースに、Dev Container Features または Dockerfile で必要な機能だけをインストールしています。

## debian-* ディレクトリ

「debian-」から始まるディレクトリのテンプレートは、debianの最新LTSをベースに、Dev Container Features または Dockerfile で必要な機能だけをインストールしています。

## Requirements (必要なもの)

- Visual Studio Code
    - Dev Containers
- Docker
    - Docker Desktop (Windows) or Docker CE (WSL2)

## Reference

- [Dev Container metadata reference](https://containers.dev/implementors/json_reference/)
- [devcontainer.json Reference](https://containers.dev/implementors/json_reference/)
- [Docker extension for Visual Studio Code](https://code.visualstudio.com/docs/containers/overview)
- [ubuntu - Official Image | Docker Hub](https://hub.docker.com/_/ubuntu)
