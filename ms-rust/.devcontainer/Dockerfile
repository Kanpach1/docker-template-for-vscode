# Rust - DevContiner公式イメージ
# * GitHub | devcontainer/rust : https://github.com/devcontainers/images/tree/main/src/rust
FROM mcr.microsoft.com/devcontainers/rust:latest

# [オプション] 追加パッケージのインストール
#
# 使い方 :
#  * 「&& apt-get -y install --no-install-recommends <install packages>\」
#    のコメントアウトを外し、<install packages>の部分にパッケージを追加
#
RUN apt-get update \
    && export DEBIAN_FRONTEND=noninteractive \
    && apt-get upgrade -y \
    # && apt-get -y install --no-install-recommends <install packages> \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
