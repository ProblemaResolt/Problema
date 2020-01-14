# Docker Phoenix 環境構築
バックエンドはElixir Phoenix 
フロントエンドはElm
WebサーバはNginxで生成されます。
## Docker Build
 'docker-compose -f "docker-compose.yml" up -d --build'

## Phoenix 構築
内部に入る
'docker-compose exec api sh'

### Phoenix 立ち上げ
option などは公式を参考にしてください。

https://hexdocs.pm/phoenix/Mix.Tasks.Phx.New.html#content

'mix phx.new . --option'
Local は以下のフォルダが生成されます。
/app.api.volume/



参考資料
公式
https://hexdocs.pm/phoenix/

Phoenix入門 （第14章 Mix Tasks その１）
https://www.tech-note.info/entry/phoenix-14-mix-tasks-1