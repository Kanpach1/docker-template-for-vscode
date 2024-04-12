# Ubuntu Node Mise

Dev Container Features を使った Node.js の環境構築

[mise](https://mise.jdx.dev) を使って Node.js をインストール

Node Features のようにデフォルトで yarn, pnpm はインストールはしていない

追加で欲しいものがあったら、setup.sh に記述を追加

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
| Image Size | 724MB |

## Extensions

- [IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
- [Biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)
