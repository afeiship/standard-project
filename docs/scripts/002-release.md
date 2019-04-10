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
