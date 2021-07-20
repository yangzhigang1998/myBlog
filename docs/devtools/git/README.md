---
home: true #指定该文件为您的首页，改为false则不作为首页
lang: zh-CN # 表示本页面的语言为zh-CN(简体中文)
heroText: Git  #首页居中显示的文本
tagline:	git是一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理。 # 首页显示的标语
# heroImage: /hero.png #首页显示的主图
heroImageStyle: { # 首页主图的样式控制
   maxWidth: '600px',
   width: '100%',
   display: block,
   margin: '9rem auto 2rem',
   background: '#fff',
  borderRadius: '1rem'
 }
bgImageStyle: { #背景图片样式
  height: '450px'
}

# 以下内容基本上不生效，可以不用关心
# 
isShowTitleInHome: true
actionText:	开始学习 
actionLink: /devtools/git/git基础概念
---
---
&nbsp;&nbsp;&nbsp;&nbsp;Git是分布式的,Git不需要有中心服务器，我们每台电脑拥有的东西都是一样的。我们使用Git并且有个 中心服务器，仅仅是为了方便交换大家的修改，但是这个服务器的地位和我们每个人的PC是一样的。我们可以 把它当做一个开发者的pc就可以就是为了大家代码容易交流不关机用的。没有它大家一样可以工作，只不 过“交换”修改不方便而已。  

&nbsp;&nbsp;&nbsp;&nbsp;git是一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理。Git是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。 同生活中的许多伟大事物一样，Git 诞生于一个极富纷争大举创新的年代。Linux 内核开源项目有着为数众 多的参与者。 绝大多数的 Linux 内核维护工作都花在了提交补丁和保存归档的繁琐事务上（1991－2002 年间）。  到 2002 年，整个项目组开始启用一个专有的分布式版本控制系统 BitKeeper 来管理和维护代 码。

&nbsp;&nbsp;&nbsp;&nbsp;到了 2005 年，开发 BitKeeper 的商业公司同 Linux 内核开源社区的合作关系结束，他们收回了 Linux 内核社区免费使用 BitKeeper 的权力。 这就迫使 Linux 开源社区（特别是 Linux 的缔造者 Linus Torvalds）基于使用 BitKeeper 时的经验教训，开发出自己的版本系统。 他们对新的系统制订 了若干目标：   
速度  
简单的设计   
对非线性开发模式的强力支持（允许成千上万个并行开发的分支）   
完全分布式   
有能力高效管理类似 Linux 内核一样的超大规模项目（速度和数据量）  