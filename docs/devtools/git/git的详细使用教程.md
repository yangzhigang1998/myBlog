# git的详细使用教程
[[toc]]  [//]: # (直接在文档里面写一个[[top]]就可以生成目录)
___

<font color='green'>
Git是一种分布式版本管理工具，每个人参与开发人员的电脑都是一台代码的仓库，使用起来特别灵活，这里我们就不对Git的安装和配置做说明了，网上相关内容很多。Git的优点也就不多说了，直接开始使用吧.<br/>
Git的使用可以说主要分为三部曲来说明，其余的所有命令都是为这三个命令服务的。下面我会对其做详细说明。<br/>
</font>  

命令 | 描述
:--:|:-:|:--:
git add | 添加至暂存区
git commit  | 提交到版本库
git push  | 提交到远端
<font color='green'>以上三个命令是最主要的命令了，其他的命令都是为其服务的，可以将其功能和命令的列举出来。</font>

命令 | 辅助功能	
:--:|:-:|:--:
git init | 初始化仓库	
git clone | 克隆代码	
git diff | 比较差异	
git status | 查看状态	
git log | 查看日志	
git branch | 创建分支命令	
git checkout | 检出代码	
git fetch | 获取（不合并）
git merge | 合并操作	
git pull | 获取并合并(fetch+merge)
git reset | 重置代码	
git stash | 恢复进度	
git tag | 里程碑	
git revert | 回滚操作	
git reflog | 查看历史信息	
git rebase | rebase命令（可以处理冲突和合并提交）

## 1.git add 命令
git add 命令	|意义
:--:|:-:|:--:
git add .(这里是个点)	|将工作区的变化提交到暂存区，包括文件修改和新增，但是不包括删除的文件
git add -u	|将工作区的变化提交到暂存区，包括文件修改和删除，但是不包括新增的文件
git add -A	|将工作区的变化提交到暂存区，包括新增，删除和修改的所有内容
git add -i	|将工作区的变化提交到暂存区，进入交互模式选择文件进行操作
git add [file1] [file2] ...	|将工作区的变化提交到暂存区，选定某一个文件或多个文件进行提交
git add [dir]  | 添加指定目录到暂存区，包括子目录

## 2.git commit 命令
git commit 命令|意义
:--:|:-:|:--:
git commit -m '提交描述信息' |将修改从暂存区提交到版本库中，msg指的是本次提交的信息
git commit --amend | 修改上次提交的信息,会出现一个交互界面，相当于本次提交和上次提交合并为一个提交
git commit --amend -m 'msg' | 修改上次提交的信息,不会出现一个交互界面，相当于本次提交和上次提交合并为一个提交
git commit -a -m 'massage'  |-a参数可以将所有已跟踪文件中的执行修改或删除操作的文件都提交到本地仓库，即使它们没有经过git add添加到暂存区

## 3.git diff 命令
git diff 命令|意义 
:--:|:-:|:--:
git diff	|比较工作区和暂存区差异
git diff --cached	|比较暂存区和版本库之间差异
git diff HEAD	|比较工作区和HEAD头指针指向的分支之间的差异
git diff [ID]	|工作区和某一个提交的分支进行对比
git diff --cached [ID]|	暂存区和某一个分支比较
git diff fileName  | 查看文件工作区与暂存区的区别(暂存区为空，比较工作区与最近提交的区别)
git diff --staged fileName |  查看文件暂存区与最近一次提交的区别
git diff HEAD fileName  | 查看文件工作区与最近一次提交的区别
git diff commit-id fileName | 查看文件工作区与指定的提交的区别
git diff --staged commit-id fileName | 查看暂存区与指定提交之间的区别
git diff commit-id commit-id | 查看指定提交之间的区别

## 4.git status 命令
git status 命令|意义 
:--:|:-:|:--:
git status | 查看在你上次提交之后是否有对文件进行再次修改
git status -s | 通常我们使用 -s 参数来获得简短的输出结果

## 5.git log 命令
git log 命令|意义 
:--:|:-:|:--:
git log|	展示commit的详细信息，包括commit SHA1值,date author和提交信息
git log --oneline|	仅仅展示提交的简单信息，有SHA1值前几位，和提交信息
git log --graph	|用图表链的形式详细展示提交信息
git log --oneling --graph	|用图表链的形式简单展示提交信息

## 6.git push 命令
git push 命令|意义 
:--:|:-:|:--:
git push  | 如果当前分支只有一个远程分支，那么主机名都可以省略，形如 git push，可以使用git branch -r ，查看远程的分支名
git push origin | 如果当前分支与远程分支存在追踪关系，则本地分支和远程分支都可以省略，将当前分支推送到origin主机的对应分支 
git push origin master	|将本地的master分支推送到origin主机的master分支。如果master不存在，则会被新建
git push -u origin master	|将本地的master分支推送到origin主机，同时指定origin为默认主机，后面就可以不加任何参数使用git push了
git push --all origin |上面命令表示，将所有本地分支都推送到origin主机。如果远程主机的版本比本地版本更新，推送时Git会报错，要求先在本地做git pull合并差异，然后再推送到远程主机

<font color='green'>最后就是提交了，假如是真正的项目的话，使用git push origin [branchname]就可以提交了。
默认情况下，如果你是从远端clone来的代码的话默认是远端的master分支，这个得根据项目的实际分支模型，也可能是develop分支，
假如是develop分支clone来的话就可以使用git push origin develop来将版本库代码push到远端建立一个新的分支，
等别人review后没问题，就可以合并到主分支了，这里我们push肯定是不会成功的。
</font>

## 7.Git branch 命令
Git branch 命令|意义 
:--:|:-:|:--:
git branch |  不带参数：列出本地已经存在的分支，并且在当前分支的前面用"*"标记
git branch -r  | 查看远程版本库分支列表 
git branch -a|  查看所有分支列表，包括本地和远程
git branch dev	|  创建名为dev的分支，创建分支时需要是最新的环境，创建分支但依然停留在当前分支
git branch -d dev |删除dev分支，如果在分支中有一些未merge的提交，那么会删除分支失败，此时可以使用 git branch -D dev 强制删除dev分支
git branch -vv  | 可以查看本地分支对应的远程分支
git branch -m oldName newName | 给分支重命名

## 7.Git checkout 命令
Git checkout 命令|意义 
:--:|:-:|:--:
git checkout master  |将分支切换到master
git checkout -b master | 如果分支存在则只切换分支，若不存在则创建并切换到master分支
git checkout filename  | 放弃单个文件的修改
git checkout . |放弃当前目录下的修改
git checkout --help |  查看帮助

## git clone 命令
<font color='green'>git clone命令的作用是将存储库克隆到新目录中，为克隆的存储库中的每个分支创建远程跟踪分支(使用git branch -r可见)，并从克隆检出的存储库作为当前活动分支的初始分支。</font>
git clone 命令|意义 
:--:|:-:|:--:
git clone http://github.com/jquery/jquery.git| 该命令会在本地主机生成一个目录，与远程主机的版本库同名。
git clone <版本库的网址> <本地目录名> |如果要指定不同的目录名，可以将目录名作为git clone命令的第二个参数。

## git merge 命令
<font color='green'>git merge 是在 Git 中使用比较频繁的一个命令，其主要用于将两个或两个以上的开发历史加入(合并)一起</font>