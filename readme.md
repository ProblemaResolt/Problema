# Docker Phoenix 環境構築
バックエンドはElixir Phoenix 
フロントエンドはElm
WebサーバはNginxで生成されます。
## Docker Build
 `docker-compose -f "docker-compose.yml" up -d --build`

## Phoenix 構築
内部に入る
`docker-compose exec api sh`

### Phoenix 立ち上げ
option などは公式を参考にしてください。

https://hexdocs.pm/phoenix/Mix.Tasks.Phx.New.html#content

`mix phx.new api --option `
Local は以下のフォルダが生成されます。
/api/

### ライブラリインストール
`mix deps.get`
dapter の{:plug_cowboy, "~> 1.0"},を追加　

config/mix.exs内へ追加
```
[中略]
  defp deps do
    [
      {:phoenix, "~> 1.3.4"},
      {:phoenix_pubsub, "~> 1.0"},
      {:phoenix_ecto, "~> 3.2"},
      {:postgresql, ">= 0.0.0"},
      {:phoenix_html, "~> 2.10"},
      {:phoenix_live_reload, "~> 1.0", only: :dev},
      {:gettext, "~> 0.11"},
      {:plug_cowboy, "~> 1.0"},　#ココ
      {:cowboy, "~> 1.0"}
    ]
  end

[中略]
```
### DB 接続
\config\dev.exs の書き換え
```
[中略]
config :api, Api.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "api_dev",
  hostname: "postgres",
  pool_size: 10
[中略]
```

### DB Migrate
DB情報を更新
`mix ecto.create`

### Env 設定
ちょっとまって...

## Elm 構築

`docker-compose exec app sh`
/opt/app/assets # elm reactor
すると
Go to http://localhost:8000 to see your project dashboard.
ダッシュボードが http://localhost:8000 に表示されます。


参考資料
公式
https://hexdocs.pm/phoenix/

Phoenix入門 （第14章 Mix Tasks その１）
https://www.tech-note.info/entry/phoenix-14-mix-tasks-1

ElixirでSI開発入門 #4 本番パスワードを環境変数に持たせる
https://qiita.com/tuchiro/items/4ccba7e210c596c383af#%E6%9C%AC%E7%95%AA%E7%92%B0%E5%A2%83%E8%A8%AD%E5%AE%9A%E3%81%A7%E5%8B%95%E3%81%8B%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B

Elm公式
https://guide.elm-lang.jp/