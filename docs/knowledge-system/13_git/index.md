# git
下载Git官方地址：https://git-scm.com/download/win
Git 分布式版本控制系统

## 一、git命令大全
### 1、环境配置

```bash
# 设置用户信息
$ git config --global user.name 用户名称
$ git config --global user.email 邮箱

# 查看配置信息
$ git config --list
$ git config user.name
$ git config user.email

# 验证邮箱
$ git config --global --list
```

### 2、创建新的git仓库

```bash
# 当前目录创建一个git代码库
$ git init
# 当前目录创建一个git代码裸仓库，该仓库可被克隆，但不能进行文件的检出和提交
# 在裸仓库中，只能进行push和fetch操作，不能进行直接的commit或merge操作
# 这是因为裸仓库没有工作目录，无法进行文件编辑和合并。通常情况下，裸仓库是用来实现 Git服务器的
# 开发者可以使用它来共享代码库，管理代码版本，保持团队协作等
$ git init -bare
# 新建一个目录，将其初始化为Git代码库
$ git init [project-name]

# 下载一个项目和它的整个代码历史
$ git clone [url]
```

### 3、增加、删除文件

```bash
# 添加指定文件到暂存区
$ git add [file1] [file2] ...
# 添加指定目录到暂存区，包括子目录
$ git add [dir]
# 添加当前目录的所有文件到暂存区
$ git add .
# 添加每个变化前，都会要求确认
# 对于同一个文件的多处变化，可以实现分次提交
$ git add -p

# 删除工作区文件，并且将这次删除放入暂存区
$ git rm [file1] [file2] ...
# 强制删除已放到暂存区的文件
$ git rm -f [file1] [file2] ...
# 停止追踪指定文件，但该文件会保留在工作区
$ git rm --cached [file]

# 改名文件，并且将这个改名放入暂存区
$ git mv [file-original] [file-renamed]
```

### 4、代码提交

```bash
# 提交暂存区到仓库区
$ git commit -m [message]
# 提交暂存区的指定文件到仓库区
$ git commit [file1] [file2] ... -m [message]

# 提交工作区自上次commit之后的变化，直接到仓库区
# 省一步git add，但也只是对修改和删除文件有效，新文件还是要 git add不，然就是untracked状态
$ git commit -a -m [message]

# 提交时显示所有diff信息
$ git commit -v -m [message]

# 使用一次新的commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次commit的提交信息
$ git commit --amend -m [message]
# 重做上一次commit，并包括指定文件的新变化
$ git commit --amend [file1] [file2] ...
```

### 5、分支管理

```bash
# 列出所有本地分支
$ git branch
# 列出所有远程分支
$ git branch -r
# 列出所有本地分支和远程分支
$ git branch -a
# 显示包含提交50089的分支
$ git branch --contains 50089
# 显示所有已合并到当前分支的分支
$ git branch --merged  
# 显示所有未合并到当前分支的分支
$ git branch --no-merged                                    

# 新建一个分支，但依然停留在当前分支（从当前分支创建一个新本地分支）
$ git branch [branch-name]
# 新建一个分支，并切换到该分支（从当前分支创建一个新本地分支并检出）
$ git checkout -b [branch]
# 从远程分支remote-branch，创建新本地分支branch并检出
git checkout -b [branch] [remote-branch]                     
# 新建一个分支，指向指定commit
$ git branch [branch] [commit]
# 新建一个分支，与指定的远程分支建立追踪关系（检出远程分支remote-branch并创建本地跟踪分支branch）
$ git branch --track [branch] [remote-branch]

# 重命名分支
# git branch -m <旧名称> <新名称>
$ git branch -m [branch-name] [new-branch-name]

# 切换到指定分支，并更新工作区
$ git checkout [branch-name]
# 切换到上一个分支
$ git checkout -

# 建立追踪关系，在现有分支与指定的远程分支之间
$ git branch --set-upstream-to=[remote]/[branch] [branch]
$ git branch --set-upstream [branch] [remote]/[branch]

# 合并指定分支到当前分支
$ git merge [branch]
# 选择一个commit，合并进当前分支
$ git cherry-pick [commit]

# 删除分支（本分支已合并到其他分支）
$ git branch -d [branch-name]
# 强制删除分支
$ git branch -D [branch-name]

# 删除远程分支
$ git push origin --delete [branch-name]
$ git branch -dr [remote/branch]
```

### 6、标签

```bash
# 列出所有tag
$ git tag

# 新建一个tag在当前commit
$ git tag [tag]
# 新建一个tag在指定commit
$ git tag [tag] [commit]

# 删除本地tag
$ git tag -d [tag]
# 删除远程tag
$ git push origin :refs/tags/[tagName]

# 查看tag信息
$ git show [tag]

# 提交指定tag
$ git push [remote] [tag]
# 提交所有tag
$ git push [remote] --tags

# 新建一个分支，指向某个tag
$ git checkout -b [branch] [tag]
```

### 7、查看信息

```bash
# 显示有变更的文件，在git add和git commit之间查看状态
$ git status
# 简短输出
git status -s

# 显示当前分支的版本历史
$ git log
# 显示commit历史，以及每次commit发生变更的文件
$ git log --stat
# 搜索提交历史，根据关键词
$ git log -S [keyword]
# 显示某个commit之后的所有变动，每个commit占据一行
$ git log [tag] HEAD --pretty=format:%s
# 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件
$ git log [tag] HEAD --grep feature
# 显示某个文件的版本历史，包括文件改名
$ git log --follow [file]
$ git whatchanged [file]
# 显示指定文件相关的每一次diff
$ git log -p [file]
# 显示过去5次提交
$ git log -5 --pretty --oneline

# 显示所有提交过的用户，按提交次数排序
$ git shortlog -sn

# 显示指定文件是什么人在什么时间修改过
$ git blame [file]

# 显示暂存区和工作区的差异
$ git diff
# 显示暂存区和上一个commit的差异
$ git diff --cached [file]
# 显示工作区与当前分支最新commit之间的差异
$ git diff HEAD
# 显示工作区与当前分支的上一次commit之间的差异
$ git diff HEAD^
# 显示两次提交之间的差异
$ git diff [first-branch]...[second-branch]
# 显示今天你写了多少行代码
$ git diff --shortstat "@{0 day ago}"

# 显示某次提交的元数据和内容变化
$ git show [commit]
# 显示某次提交发生变化的文件
$ git show --name-only [commit]
# 显示某次提交时，某个文件的内容
$ git show [commit]:[filename]
# 显示当前分支的最近几次提交
$ git reflog
```

### 8、远程同步

```bash
# 以下的[shortname]、[remote]，是远程仓库的主机名，通常为origin

# 下载远程仓库的所有变动
$ git fetch [remote]

# 显示所有远程仓库的信息
$ git remote -v

# 显示某个远程仓库的信息
$ git remote show [remote]

# 增加一个新的远程仓库，并命名shortname(通常是origin)
$ git remote add [shortname] [url]

# 取回远程仓库的变化，并与本地分支合并
$ git pull [remote] [branch]:[remote-branch]

# 上传本地指定分支到远程仓库
$ git push [remote] [branch]:[remote-branch]
# 上传本地指定分支到远程仓库（第一次提交）
$ git push -u [remote] [branch]
$ git push --set-upstream [remote] [branch]
# 上传本地指定分支到远程仓库，强制覆盖远程分支
$ git push -uf [remote] [branch]
# 强行推送当前分支到远程仓库，即使有冲突
$ git push --force [remote] [branch]
$ git push -f [remote] [branch]
# 推送所有分支到远程仓库
$ git push --all [remote]

# 删除远程分支
$ git push [remote] --delete [branch]

# 重命名远程分支名称
# 修改本地分支名称，再删除远程分支，上传本地分支到远程分支
$ git branch -m [branch-name] [new-branch-name]
$ git push [remote] --delete [branch]
$ git push -u [remote] [branch]

# 删除远程仓库
$ git remote rm <repository>
```

### 9、撤销

```bash
# 恢复暂存区的指定文件到工作区
$ git checkout [file]
# 恢复暂存区的所有文件到工作区
$ git checkout .
# 恢复某个commit的指定文件到暂存区和工作区
$ git checkout [commit] [file]

# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
$ git reset [file]
# 重置暂存区与工作区，与上一次commit保持一致
$ git reset --hard

# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
# 保留工作目录但清空暂存区，默认--mixed
# HEAD = Index != working
$ git reset [commit]

# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
# HEAD = Index = working
$ git reset --hard [commit]

# 重置当前HEAD为指定commit，但保持暂存区和工作区不变
# 保留提交内容但清空未提交的本地更改
# HEAD != Index = working
$ git reset --keep [commit]

# 重置当前HEAD为指定commit，不会影响暂存区和工作区
# HEAD != Index ！= working(有更改未add)
$ git reset --soft [commit]

# 新建一个commit，用来撤销指定commit
# 后者的所有变化都将被前者抵消，并且应用到当前分支
$ git revert [commit]

# 暂时将未提交的变化移除，稍后再移入
$ git stash
$ git stash pop
```


## 二、特定场景
### 1、新项目git到远程仓库
（1）进入gitLab官网（https://github.com/）新建一个存储库，名称同项目一样
（2）进入本地项目，打开cmd，输入git init，初始化git
（3）输入`git remote add [remote] [url]`，设置远程仓库地址
（4）输入`git pull [remote] [branch]`，先拉取远程分支到本地
（5）输入`git branch --set-upstream-to=[remote]/[remote-branch] [branch]`，本地分支remote关联远程分支remote-branch
（6）提交代码
```bash
git add .
git commit -m '提交内容'
git push

git push -u origin master
git push --set-upstream origin/master master
```

### 2、回退代码

## 三、git思想和工作原理
### 1、底层思想
直接记录快照，而非进行文件的差异对比，把变化的文件，记录在一个微型的文件系统中
每次提交更新时，会浏览一遍文件的指纹信息并做一次快照，然后保存一个指向改快照的索引。为保证性能，如果文件如果没有发生更新，会继续指向上一次的快照索引
#### git的三棵树

**工作区**：<span style="background-color: yellow;">当前操作文件的本地文件系统目录，可见的文件系统。</span>

**暂存区**：<span style="background-color: yellow;">没有实际存在的目录或文件夹，它的实体位于.git文件夹的index文件。git status 会将工作区和暂存区的文件快照进行对比。</span>

**提交历史**：<span style="background-color: yellow;">工作区文件在不同时间的文件快照（快照即文件或文件夹在特定时间点的状态，包括内容或元信息）。通过.git/objects目录保存着所有提交对象。git log可以查看当前分支的提交历史。</span>


#### .git文件夹目录
![Image](/vuepress-knowledge-system/images/knowledge-system/13/1.png)

```bash
- info：保存git的相关信息
- objects：存放真实数据，以Git对象（BLOB对象、tree对象、commit对象）形式存放
- refs     
  - heads：存放所有本地分支最新的commit哈希值     
  - stash：存放stash对应的哈希值     
  - tags：存放tags相关的
- config：配置文件
- HEAD：当前分支，并不存放SHA1值，类似/refs/heads/master，这个指向的文件里会有最新commit的SHA1值
- index：二进制文件，暂存区
```

#### git对象
git对象的类型包括：
- **blob对象**：最小的存储单位，文件快照中那些发生变化的文件内容(`git cat-file -p [SHA-1]`可查看)
- **tree对象**：记录文件快照中各个目录和文件的结构关系，指向了被跟踪的快照(`git cat-file -p [commit_id]`可查看某次提交记录的文件快照)
- **commit对象**：记录每次提交到本地仓库的文件快照（git log可查看）
![Image](/vuepress-knowledge-system/images/knowledge-system/13/2.png)

git是一套<span style="background-color: lightgreen;">内容寻址的文件系统</span>，它存储的也是**key-value键值对**

将修改的文件加入暂存区（也叫索引库，将修改的文件key-value化，.git/index文件记录该暂存区中的文件索引）

![Image](/vuepress-knowledge-system/images/knowledge-system/13/3.png)

#### 工作流程
**Git分支的本质**：一个指向某一系列提交之首的指针或引用
**HEAD**：指向目前所在的分支
- .git/index是一个二进制文件，包含着一个由路径名称、权限和blob对象的SHA-1值组成的有序列表，可通过命令查看index中的内容：`git ls-files --stage`
- 文件内容作为blob对象保存到objects目录中，可通过blob对象的SHA-1值来获取文件内容：`git cat-file -p [SHA-1]`

![Image](/vuepress-knowledge-system/images/knowledge-system/13/4.png)

### 2、工作原理
git流程如下图所示：
![Image](/vuepress-knowledge-system/images/knowledge-system/13/5.png)

#### git diff
查看两次提交之间的变动
![Image](/vuepress-knowledge-system/images/knowledge-system/13/6.png)

#### git commit
- 新提交id(SHA-1值)
![Image](/vuepress-knowledge-system/images/knowledge-system/13/7.png)
- 更新提交id(SHA-1值)
![Image](/vuepress-knowledge-system/images/knowledge-system/13/8.png)
#### git checkout
用于从历史提交（或者暂存区域）中拷贝文件到工作目录，也可用于切换分支
- 文件名
![Image](/vuepress-knowledge-system/images/knowledge-system/13/9.png)
- 分支名
![Image](/vuepress-knowledge-system/images/knowledge-system/13/10.png)
- 标签、远程分支、SHA-1值或像master~3
![Image](/vuepress-knowledge-system/images/knowledge-system/13/11.png)

如上图所示，此时HEAD处于分离状态（不依附于任一分支）时，提交操作可以正常进行，但是不会更新任何已命名的分支(可以认为这是在更新一个匿名分支)。
![Image](/vuepress-knowledge-system/images/knowledge-system/13/12.png)

如果切换到其他分支，提交节点可能再也不会被引用到，就会消失掉了。
如果想保存这个状态，可以使用git checkout -b name来创建一个分支
![Image](/vuepress-knowledge-system/images/knowledge-system/13/13.png)

#### git reset
把当前分支指向另一个位置，并且有选择的变动工作目录和索引。也用来在从历史仓库中复制文件到索引，而不动工作目录。
>以下是常见的模式
--mixed：更改HEAD指向，清空暂存区，保留工作区。HEAD = Index != working，默认
--keep：更改HEAD指向，保留暂存区，清空工作区。HEAD != Index = working
--soft：更改HEAD指向，保留暂存区，保留工作区。HEAD != Index != working
--hard：更改HEAD指向，清空暂存区，清空工作区。HEAD = Index = working

- 提交id(SHA-1值)
![Image](/vuepress-knowledge-system/images/knowledge-system/13/14.png)

- 文件名
![Image](/vuepress-knowledge-system/images/knowledge-system/13/15.png)

#### git merge
把不同分支合并起来
- 合并的分支是当前提交的祖父节点，fast-forward合并，简单的移动，并生成一个新的提交
![Image](/vuepress-knowledge-system/images/knowledge-system/13/16.png)

- 另一个分支非当前提交的祖父节点
![Image](/vuepress-knowledge-system/images/knowledge-system/13/17.png)

#### git revert
回滚，会生成一次新的提交记录
![Image](/vuepress-knowledge-system/images/knowledge-system/13/18.png)

#### git cherry-pick
"复制"一个提交节点并在当前分支做一次完全一样的新提交
![Image](/vuepress-knowledge-system/images/knowledge-system/13/19.png)

#### git rebase
衍合是合并命令的另一种选择。
合并把两个父分支合并进行一次提交，提交历史不是线性的。
衍合在当前分支上重演另一个分支的历史，提交历史是线性的。
衍合，变基，直接改变基底
![Image](/vuepress-knowledge-system/images/knowledge-system/13/20.png)
