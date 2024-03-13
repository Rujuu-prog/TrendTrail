# TrendTrail

今一番売れている商品がわかるECサイト

## Command

### 開発

開発サーバー起動

```bash
yarn run dev
```

Storybook起動

```bash
yarn run storybook
```

### Prisma

フォーマット

```bash
npx prisma format
```

- schema変更後

  DBへ軽く反映させる(prisma studioを再起動すること)

  ```bash
  npx prisma db push
  ```

  完成系が見えたら、以下実行(gitのlogに残る)

  ```bash
  npx prisma migrate dev
  ```
