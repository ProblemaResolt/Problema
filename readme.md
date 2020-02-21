# Docker Phoenix 開発環境構築
- バックエンドはElixir Phoenix 
- フロントエンドはElm
- WebサーバはNginxで生成されます。

ものすごくざっくり説明なのでご容赦を

## Docker Build
 `docker-compose -f "docker-compose.yml" up -d --build`

## Phoenix 構築
内部に入る
`docker-compose exec api sh`

### Phoenix 立ち上げ
option などは公式を参考にしてください。

https://hexdocs.pm/phoenix/Mix.Tasks.Phx.New.html#content

`mix phx.new web --option `

 Local は以下のフォルダが生成されます。

 /web/

 色々聞かれるのですが基本Yesで大丈夫です。

### ライブラリインストール
`mix deps.get`

dapter の{:plug_cowboy, "~> 1.0"},を追加　

config/mix.exs内へ追加
```
[中略]
  defp deps do
    [
      ~
      {:plug_cowboy, "~> 1.0"},　#追加
      ~
    ]
  end

[中略]
```
### DevDB 接続
\config\dev.exs の書き換え

```
[中略]
config :api, Api.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "web_dev",
  hostname: "db
  ",
  pool_size: 10
[中略]
```

### DB Migrate
DB情報を更新

`mix ecto.create`

### Phoenix 起動
Phoenix server を起動します。
`mix phx.server`

※ docker-compose.yml command に仕込んでおけば `dockr-compose up -d` の際に起動してくれるようになります。

### Env 設定
ちょっとまって...

## Elm 構築
`docker-compose exec assets sh`

elm project 作成します　聞かれたらYで応答してあげてください。

```
/opt/app/assets #　elm init
Hello! Elm projects always start with an elm.json file. I can create them!

Now you may be wondering, what will be in this file? How do I add Elm files to
my project? How do I see it in the browser? How will my code grow? Do I need
more directories? What about tests? Etc.

Check out <https://elm-lang.org/0.19.1/init> for all the answers!

Knowing all that, would you like me to create an elm.json file now? [Y/n]: y
Okay, I created it. Now read that link!
```


```
/opt/app/assets # elm reactor
Go to <http://localhost:8000> to see your project dashboard.
```

するとブラウザに表示されます！

/assets/src に elm file を作成して設置すると表示してくれます。

# 参考資料
API
- Phoenix 公式
  https://hexdocs.pm/phoenix/

  - Phoenix入門 （第14章 Mix Tasks その１）
    https://www.tech-note.info/entry/phoenix-14-mix-tasks-1

  - ElixirでSI開発入門 #4 本番パスワードを環境変数に持たせる
    https://qiita.com/tuchiro/items/4ccba7e210c596c383af#%E6%9C%AC%E7%95%AA%E7%92%B0%E5%A2%83%E8%A8%AD%E5%AE%9A%E3%81%A7%E5%8B%95%E3%81%8B%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B

  - Redis関連参考
    PhoenixでRedisを使った簡単ランキングの実装
    https://qiita.com/koyo-miyamura/items/b5c123fa40685b9f8073#ランキングロジックを作る

Assets
- Elm 公式
   https://guide.elm-lang.jp/


# Docker 関連
  - docker-compose コマンド概要
    http://docs.docker.jp/compose/reference/overview.html

  - コマンド一覧（Docker Compose編）
    https://www.wakuwakubank.com/posts/354-docker-command-compose/

  - Compose ファイル・リファレンス
    http://docs.docker.jp/compose/compose-file.html