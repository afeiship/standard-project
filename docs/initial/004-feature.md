# feature
> 具体的功能开发分支，只与 develop 分支交互。

## description
只与 `develop` 交互，因为 `feature` 就是新版本开发为了升级和演进需要用的，里面的所有代码只能在发布新版本且经过测试的时候才合进去 `master` ，然后在 `master` 打 `tag` 表明所有新功能开发完毕，一次性合并。同时我们开发一般是不同的人开发不同的功能，因此各自都应该有自己的 `feature`，然后断断续续并进 `develop` 所以，保证 `develop` 是个新功能持续集成的版本。
