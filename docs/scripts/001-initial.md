# intial

## create some branches
```shell
# feature
git branch feature/topic#fei

# release
git branch release/v2.0.1

# hotfix
git branch hotfix/v2.0.1
```

## 删除对应的分支
```shell
git branch -d hotfix/v2.0.1
```

## 切换/merge
```shell
git checkout develop
git merge feature/topic#fei
git add --all
git commit -m "merge: feature to develop"
git push
```
