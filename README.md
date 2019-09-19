# standard-project
> Standard project workflow.

## docs
- https://afeiship.github.io/standard-project/

## release
1. build your project
  ```shell
  npm run build
  git add --all
  git commit -m "add: for build"
  git push
  ```

2. make release
  ```shell
  rake stdapp:make
  ```

3. commit release
  ```shell
  rake stdapp:commit
  ```

4. release in remote
  ```shell
  ssh user@201.201.22.12
  cd /data/standard-project
  git pull
  ```

## todos
- [ ]一个 latest 的分支，保存最近一个 production 的 release
- [ ] 需要将最新的代码，合并到 master 分支上去
- [ ] rake-mail 支持静默发布 --quite