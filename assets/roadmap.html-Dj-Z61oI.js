import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as a,c,b as l,d as o,e as d,a as i}from"./app-Cphw7wZ-.js";const p={},n=i('<h2 id="_2024-04-月" tabindex="-1"><a class="header-anchor" href="#_2024-04-月"><span>2024-04 月</span></a></h2><h3 id="常用原生-api-文档" tabindex="-1"><a class="header-anchor" href="#常用原生-api-文档"><span>常用原生 api 文档</span></a></h3><ul><li><p>原则</p><ul><li>原生 js 能处理的不封装，例如：网址拆分</li><li>顶级模块的实现优先的，例如 fsys.copy</li></ul></li><li><p>优先级</p><ul><li>先实现已声明优先级的</li><li>优先级1 -- 必须处理</li><li>优先级2 -- 有空处理</li><li>优先级3 -- 可不处理</li></ul></li><li><p>fsys 文件操作</p><ul><li>dirWatcher 目录监视器 -- 优先级1</li><li>dlg 文件对话框 -- 优先级1</li><li>dlg.dir 目录对话框 -- 优先级1</li><li>drives 逻辑分区</li><li>file 文件读写 -- 优先级1</li><li>fileInfo 文件唯一ID</li><li>hardlink 硬链接 -- 优先级2</li><li>hosts 文件</li><li>info 文件信息</li><li>ini 配置文件</li><li>knownFolder 已知文件夹</li><li>lnk 快捷方式 -- 优先级1</li><li>media 媒体文件播放</li><li>mime 多用途扩展文件类型</li><li>path 路径函数</li><li>remove 移除操作 -- 优先级1</li><li>shortcut 快捷方式生成器 -- 优先级2</li><li>size 文件大小</li><li>url 快捷方式 -- 优先级2</li><li>version 版本信息</li><li>watch 监视文件 -- 优先级1</li></ul></li><li><p>inet 网络</p><ul><li>adapter 适配器</li><li>adapterInfo 适配器配置</li><li>conn 连接设置</li><li>mac 地址</li><li>http 网络传输协议 -- 优先级1</li><li>httpFile 断点续传 -- 优先级1</li></ul></li><li><p>key 键盘模拟</p><ul><li>hook 键盘钩子 -- 优先级1</li><li>hotkey 超级热键</li></ul></li><li><p>mouse 鼠标模拟</p><ul><li>cursor 光标 -- 优先级1</li><li>hook 鼠标钩子 -- 优先级1</li></ul></li><li><p>process 进程操作</p><ul><li>popen 进程管道 -- 优先级1</li><li>admin 管理权限</li><li>batch 批处理 -- 优先级2</li><li>cmdline 获取启动参数 -- 优先级1</li><li>command 进程命令</li><li>control 控制面板 -- 优先级2</li><li>file 文件操作</li><li>usage 内存CPU占用率 -- 优先级1</li></ul></li><li><p>service 服务程序 -- 优先级2</p></li><li><p>sys 系统相关</p><ul><li>baseBoard 主板信息 -- 优先级1</li><li>comPort 串口</li><li>cpu 处理器信息 -- 优先级1</li><li>device 硬件设备列表</li><li>display 显卡</li><li>displaySwitch 切换显示器</li><li>hd 硬盘序列号 -- 优先级1</li><li>info 系统信息 -- 优先级1</li><li>mem 内存信息 -- 优先级1</li><li>monitor 显示器</li><li>networkCards 网卡设备</li><li>printer 打印机</li><li>reg 注册表</li><li>run 启动项</li><li>runAsTask 启动任务</li><li>storage 存储设备 -- 优先级1</li></ul></li><li><p>win 窗口操作</p><ul><li><p>cur 鼠标指针</p></li><li><p>image 图像</p></li><li><p>reg 注册表操作</p></li><li><p>taskScheduler 计划任务</p></li><li><p>version 版本信息 -- 优先级1</p></li><li><p>versionEx 扩展版本信息 -- 优先级1</p></li><li><p>clip 剪贴板 -- 优先级1</p><ul><li>file 剪贴板文件 -- 优先级1</li><li>gif 动画 -- 优先级1</li><li>html 复制操作 -- 优先级1</li><li>png 图像 -- 优先级1</li><li>viewer 剪贴板监视 -- 优先级2</li></ul></li><li><p>util 实用工具</p><ul><li>tray 托盘图标 -- 优先级1</li><li>deviceNotification 设备监视</li></ul></li></ul></li></ul><h3 id="游乐场" tabindex="-1"><a class="header-anchor" href="#游乐场"><span>游乐场</span></a></h3>',4),r=l("p",null,"在线游乐场 -- 可以在文档中编写、执行、分享代码",-1),k={href:"https://hongqiye.com/rp/play-sys-shim/#id=owjkbb&p=%E6%B8%B8%E4%B9%90%E5%9C%BA&hi=1",target:"_blank",rel:"noopener noreferrer"},h=l("li",null,[l("p",null,"示例代码运行 -- 除了复制功能之外，还允许直接点击执行")],-1),b=l("li",null,[l("p",null,"运行日志 -- 可以在界面上看到运行日志，方便分析执行情况")],-1),m=i('<h2 id="_2024-05-月" tabindex="-1"><a class="header-anchor" href="#_2024-05-月"><span>2024-05 月</span></a></h2><h3 id="自动化测试" tabindex="-1"><a class="header-anchor" href="#自动化测试"><span>自动化测试</span></a></h3><p>使用 nodejs 自动化测试 api 的可用性。</p><h3 id="常用-neutralinojs-api-封装及文档" tabindex="-1"><a class="header-anchor" href="#常用-neutralinojs-api-封装及文档"><span>常用 neutralinojs api 封装及文档</span></a></h3><ul><li><p>Neutralino.app</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> app.exit -- 注：退出码暂未实现</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> app.killProcess</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> app.restartProcess</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> app.getConfig</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> app.broadcast</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> app.readProcessInput</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> app.writeProcessOutput</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> app.writeProcessError</label></li></ul></li><li><p>Neutralino.clipboard</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> clipboard.writeText</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> clipboard.readText</label></li></ul></li><li><p>Neutralino.computer</p></li><li><p>Neutralino.debug</p></li><li><p>Neutralino.events</p></li><li><p>Neutralino.extensions</p></li><li><p>Neutralino.filesystem</p></li><li><p>Neutralino.init</p></li><li><p>Neutralino.os</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-10"> os.execCommand</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-11" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-11"> os.spawnProcess</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-12" disabled="disabled"><label class="task-list-item-label" for="task-item-12"> os.updateSpawnedProcess</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-13" disabled="disabled"><label class="task-list-item-label" for="task-item-13"> os.getSpawnedProcesses</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-14" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-14"> os.getEnv</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-15" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-15"> os.getEnvs</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-16" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-16"> os.showOpenDialog</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-17" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-17"> os.showSaveDialog</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-18" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-18"> os.showFolderDialog</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-19" disabled="disabled"><label class="task-list-item-label" for="task-item-19"> os.showNotification</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-20" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-20"> os.showMessageBox</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-21" disabled="disabled"><label class="task-list-item-label" for="task-item-21"> os.setTray</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-22" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-22"> os.getPath</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-23" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-23"> os.open</label></li></ul></li><li><p>Neutralino.storage</p></li><li><p>Neutralino.updater</p></li><li><p>Neutralino.window</p></li></ul><h3 id="知识库制作" tabindex="-1"><a class="header-anchor" href="#知识库制作"><span>知识库制作</span></a></h3><p>智能模型训练所用。</p><h2 id="_2024-06-月" tabindex="-1"><a class="header-anchor" href="#_2024-06-月"><span>2024-06 月</span></a></h2><h3 id="常用工具实现" tabindex="-1"><a class="header-anchor" href="#常用工具实现"><span>常用工具实现</span></a></h3><ul><li>菜单栏</li><li>托盘</li><li>http</li></ul><h3 id="相关工具" tabindex="-1"><a class="header-anchor" href="#相关工具"><span>相关工具</span></a></h3><ul><li>项目生成器</li><li>项目打包器</li></ul><h2 id="_2024-07-月" tabindex="-1"><a class="header-anchor" href="#_2024-07-月"><span>2024-07 月</span></a></h2><h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h3><h3 id="视频教程" tabindex="-1"><a class="header-anchor" href="#视频教程"><span>视频教程</span></a></h3>',15);function u(x,f){const e=t("ExternalLinkIcon");return a(),c("div",null,[n,l("ul",null,[l("li",null,[r,l("ul",null,[l("li",null,[l("a",k,[o("点击查看原型"),d(e)])])])]),h,b]),m])}const _=s(p,[["render",u],["__file","roadmap.html.vue"]]),v=JSON.parse('{"path":"/docs/roadmap.html","title":"","lang":"zh-CN","frontmatter":{"sidebar":false,"description":"2024-04 月 常用原生 api 文档 原则 原生 js 能处理的不封装，例如：网址拆分 顶级模块的实现优先的，例如 fsys.copy 优先级 先实现已声明优先级的 优先级1 -- 必须处理 优先级2 -- 有空处理 优先级3 -- 可不处理 fsys 文件操作 dirWatcher 目录监视器 -- 优先级1 dlg 文件对话框 -- 优先级1...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/sys-shim-doc/docs/roadmap.html"}],["meta",{"property":"og:site_name","content":"sys-shim"}],["meta",{"property":"og:description","content":"2024-04 月 常用原生 api 文档 原则 原生 js 能处理的不封装，例如：网址拆分 顶级模块的实现优先的，例如 fsys.copy 优先级 先实现已声明优先级的 优先级1 -- 必须处理 优先级2 -- 有空处理 优先级3 -- 可不处理 fsys 文件操作 dirWatcher 目录监视器 -- 优先级1 dlg 文件对话框 -- 优先级1..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-21T10:12:44.000Z"}],["meta",{"property":"article:author","content":"wll8"}],["meta",{"property":"article:modified_time","content":"2024-03-21T10:12:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-21T10:12:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wll8\\",\\"url\\":\\"https://github.com/wll8\\"}]}"]]},"headers":[{"level":2,"title":"2024-04 月","slug":"_2024-04-月","link":"#_2024-04-月","children":[{"level":3,"title":"常用原生 api 文档","slug":"常用原生-api-文档","link":"#常用原生-api-文档","children":[]},{"level":3,"title":"游乐场","slug":"游乐场","link":"#游乐场","children":[]}]},{"level":2,"title":"2024-05 月","slug":"_2024-05-月","link":"#_2024-05-月","children":[{"level":3,"title":"自动化测试","slug":"自动化测试","link":"#自动化测试","children":[]},{"level":3,"title":"常用 neutralinojs api 封装及文档","slug":"常用-neutralinojs-api-封装及文档","link":"#常用-neutralinojs-api-封装及文档","children":[]},{"level":3,"title":"知识库制作","slug":"知识库制作","link":"#知识库制作","children":[]}]},{"level":2,"title":"2024-06 月","slug":"_2024-06-月","link":"#_2024-06-月","children":[{"level":3,"title":"常用工具实现","slug":"常用工具实现","link":"#常用工具实现","children":[]},{"level":3,"title":"相关工具","slug":"相关工具","link":"#相关工具","children":[]}]},{"level":2,"title":"2024-07 月","slug":"_2024-07-月","link":"#_2024-07-月","children":[{"level":3,"title":"案例","slug":"案例","link":"#案例","children":[]},{"level":3,"title":"视频教程","slug":"视频教程","link":"#视频教程","children":[]}]}],"git":{"createdTime":1710830845000,"updatedTime":1711015964000,"contributors":[{"name":"wll8","email":"xwdaysme@gmail.com","commits":2}]},"readingTime":{"minutes":2.84,"words":853},"filePathRelative":"docs/roadmap.md","localizedDate":"2024年3月19日","autoDesc":true}');export{_ as comp,v as data};