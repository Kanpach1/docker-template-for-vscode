# Debian Node Mise

[mise](https://mise.jdx.dev) を使って Node.js をインストール

Node Features のようにデフォルトで yarn, pnpm はインストールはしていない

mise や node のコマンドは setup.sh に記述を追加可能

ESLint ではなく [Biome](https://biomejs.dev) でフォーマットとLintを行う

## Environment

2024/04/11 現在

| OS | Version |
|----|---------|
| Ubuntu | LTS |

| Tool | Version |
|--------|------|
| Node.js | LTS or latest or etc. |
setup.sh 内でバージョン指定

| Docker | SIZE |
|--------|------|
| Image Size | 871MB |

## Extensions

- [IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
- [Biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)
