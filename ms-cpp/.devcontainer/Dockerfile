# C++ - DevContiner公式イメージ
# * GitHub | devcontainer/cpp : https://github.com/devcontainers/images/tree/main/src/cpp
FROM mcr.microsoft.com/devcontainers/cpp:latest

# [オプション] 追加パッケージのインストール
#
# 使い方 :
#  * <install packages>の部分にパッケージを追加
#
# デフォルト指定パッケージ :
#  * clang-foramt : コードフォーマット
#  * clang-tidy : Lint
RUN apt-get update \
    && export DEBIAN_FRONTEND=noninteractive \
    && apt-get upgrade -y \
    && apt-get -y install --no-install-recommends \
    clang-tidy \
    clang-format \
    # <install packages> \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
