# release

## build & commit in local
```shell
# empty release branch:
git checkout release
rm -rf dist
git add --all
git commit -m "remove: release empty"
git push

# build in your feature branch, will update version number.
git checkout feature/babel7#fei
npm run dll && npm run build:test
git add --all
git commit -m "add: release build"
git push

# swith to release branch & commit new release
git checkout -f
git checkout release
git add --all
git commit -m "add: new release"
git push

# switch to your branch
git checkout feature/babel7#fei
```

## pull & release in remote
```shell
ssh test@12.23.23.43
cd /data/standard-project
git pull
```

## optimize
1. 清空原来的，发布，合并成一个 `commit`
2. 提交的 `commit` 带一个 `version`
3. `webpack banner` 里带上，当前的 `git hash` 和上次的 `git hash` 方便 `rollback`
