# docker-template-for-vscode

Visual Studio Code の Dev Container 用テンプレート集です。

プログラミング言語の学習などに役立ててください。

## ubuntu-* ディレクトリ

「ubuntu-」から始まるディレクトリのテンプレートは、ubuntuの最新LTSをベースに、Dev Container Features で必要な機能だけをインストールしています。

ベースのDocker Imageを使い回すことで、できるだけ容量の削減を目指せます。

## ms-* ディレクトリ

「ms-」から始まるディレクトリのテンプレートは、公式が用意した特定のプログラミング言語用の Docker Image をベースに設定を加えています。

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
