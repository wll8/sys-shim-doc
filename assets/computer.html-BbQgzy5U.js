import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as t,c as s,a as o,b as p}from"./app-QME0WzCh.js";const c={},i=p('<p><code>Neutralino.computer</code> 命名空间包含与用户硬件相关的方法。</p><h2 id="computer-getmemoryinfo" tabindex="-1"><a class="header-anchor" href="#computer-getmemoryinfo"><span>computer.getMemoryInfo()</span></a></h2><p>返回系统内存统计数据，单位为字节。</p><h3 id="return-object-awaited" tabindex="-1"><a class="header-anchor" href="#return-object-awaited"><span>Return Object (awaited):</span></a></h3><ul><li><code>physical</code> Object: 物理内存信息。 <ul><li><code>total</code> Number: 物理内存总量。</li><li><code>available</code> Number: 可用物理内存量。</li></ul></li><li><code>virtual</code> Object: 虚拟内存信息。 <ul><li><code>total</code> Number: 虚拟内存总量。</li><li><code>available</code> Number: 可用虚拟内存量。</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> memoryInfo <span class="token operator">=</span> <span class="token keyword">await</span> Neutralino<span class="token punctuation">.</span>computer<span class="token punctuation">.</span><span class="token function">getMemoryInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">RAM size: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>memoryInfo<span class="token punctuation">.</span>physical<span class="token punctuation">.</span>total<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">B</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="computer-getarch" tabindex="-1"><a class="header-anchor" href="#computer-getarch"><span>computer.getArch()</span></a></h2><p>返回 CPU 架构标识符：<code>x64</code> (x86 64位/arm64)，<code>ia32</code> (x86 32位)，<code>arm</code>，<code>itanium</code>，<br> 或 <code>unknown</code>。</p><h3 id="return-string-awaited" tabindex="-1"><a class="header-anchor" href="#return-string-awaited"><span>Return String (awaited):</span></a></h3><p>CPU 架构。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arch <span class="token operator">=</span> <span class="token keyword">await</span> Neutralino<span class="token punctuation">.</span>computer<span class="token punctuation">.</span><span class="token function">getArch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arch<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="computer-getkernelinfo" tabindex="-1"><a class="header-anchor" href="#computer-getkernelinfo"><span>computer.getKernelInfo()</span></a></h2><p>返回操作系统内核信息。</p><h3 id="return-object-awaited-1" tabindex="-1"><a class="header-anchor" href="#return-object-awaited-1"><span>Return Object (awaited):</span></a></h3><ul><li><code>variant</code> String: 内核类型：<code>Linux</code>，<code>Darwin</code>，<code>Windows NT</code>，或 <code>Unknown</code>。</li><li><code>version</code> String: 版本采用 <code>&lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;-&lt;build_number&gt;</code> 格式。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> kernelInfo <span class="token operator">=</span> <span class="token keyword">await</span> Neutralino<span class="token punctuation">.</span>computer<span class="token punctuation">.</span><span class="token function">getKernelInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Kernel: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>kernelInfo<span class="token punctuation">.</span>variant<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="computer-getosinfo" tabindex="-1"><a class="header-anchor" href="#computer-getosinfo"><span>computer.getOSInfo()</span></a></h2><p>返回操作系统信息。</p><h3 id="return-object-awaited-2" tabindex="-1"><a class="header-anchor" href="#return-object-awaited-2"><span>Return Object (awaited):</span></a></h3><ul><li><code>name</code> String: 操作系统名称。</li><li><code>description</code> String: 操作系统描述。</li><li><code>version</code> String: 版本采用 <code>&lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;-&lt;build_number&gt;</code> 格式。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> osInfo <span class="token operator">=</span> <span class="token keyword">await</span> Neutralino<span class="token punctuation">.</span>computer<span class="token punctuation">.</span><span class="token function">getOSInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">OS: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>kernelInfo<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="computer-getcpuinfo" tabindex="-1"><a class="header-anchor" href="#computer-getcpuinfo"><span>computer.getCPUInfo()</span></a></h2><p>返回 CPU 信息。</p><h3 id="return-object-awaited-3" tabindex="-1"><a class="header-anchor" href="#return-object-awaited-3"><span>Return Object (awaited):</span></a></h3><ul><li><code>vendor</code> String: 供应商名称。</li><li><code>model</code> String: 型号名称。</li><li><code>frequency</code> Number: 当前 CPU 频率，单位为赫兹 (Hz)。</li><li><code>architecture</code> String: CPU 架构名称。返回值与 <code>getArch</code> 函数相同。</li><li><code>logicalThreads</code> Number: CPU 并行模型中逻辑线程的数量。</li><li><code>physicalCores</code> Number: CPU 中物理核心的数量。</li><li><code>physicalUnits</code> Number: 主板上物理 CPU 硬件单元的数量。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> cpuInfo <span class="token operator">=</span> <span class="token keyword">await</span> Neutralino<span class="token punctuation">.</span>computer<span class="token punctuation">.</span><span class="token function">getCPUInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">CPU model: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>cpuInfo<span class="token punctuation">.</span>model<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="computer-getdisplays" tabindex="-1"><a class="header-anchor" href="#computer-getdisplays"><span>computer.getDisplays()</span></a></h2><p>返回所有连接显示器的信息。</p><h3 id="return-object-awaited-4" tabindex="-1"><a class="header-anchor" href="#return-object-awaited-4"><span>Return Object (awaited):</span></a></h3><p><code>Display</code> 对象的数组。</p><h3 id="display" tabindex="-1"><a class="header-anchor" href="#display"><span>Display</span></a></h3><ul><li><code>id</code> Number: 虚拟显示标识符。</li><li><code>resolution</code> Object: 显示分辨率信息。 <ul><li><code>width</code> Number: 显示宽度。</li><li><code>height</code> Number: 显示高度。</li></ul></li><li><code>dpi</code> Number: DPI（每英寸点数）值。</li><li><code>bpp</code> Number: BPP（每像素位数）值（也称为色深）。</li><li><code>refreshRate</code> Number: 刷新率，单位为赫兹 (Hz)。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> displays <span class="token operator">=</span> <span class="token keyword">await</span> Neutralino<span class="token punctuation">.</span>computer<span class="token punctuation">.</span><span class="token function">getDisplays</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> display <span class="token keyword">of</span> displays<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>display<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="computer-getmouseposition" tabindex="-1"><a class="header-anchor" href="#computer-getmouseposition"><span>computer.getMousePosition()</span></a></h2><p>返回当前鼠标光标位置。</p><h3 id="return-object-awaited-5" tabindex="-1"><a class="header-anchor" href="#return-object-awaited-5"><span>Return Object (awaited):</span></a></h3><ul><li><code>x</code> Number: 距屏幕左边缘的距离，单位为像素。</li><li><code>y</code> Number: 距屏幕顶边缘的距离，单位为像素。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> pos <span class="token operator">=</span> <span class="token keyword">await</span> Neutralino<span class="token punctuation">.</span>computer<span class="token punctuation">.</span><span class="token function">getMousePosition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Pos: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>pos<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>pos<span class="token punctuation">.</span>y<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',38);function l(r,u){const n=e("RenderedHack");return t(),s("div",null,[i,o(n)])}const k=a(c,[["render",l],["__file","computer.html.vue"]]),g=JSON.parse('{"path":"/docs/neutralinojs/api/computer.html","title":"Neutralino.computer","lang":"zh-CN","frontmatter":{"title":"Neutralino.computer","description":"Neutralino.computer 命名空间包含与用户硬件相关的方法。 computer.getMemoryInfo() 返回系统内存统计数据，单位为字节。 Return Object (awaited): physical Object: 物理内存信息。 total Number: 物理内存总量。 available Number: 可用物理内存...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/sys-shim-doc/docs/neutralinojs/api/computer.html"}],["meta",{"property":"og:site_name","content":"sys-shim"}],["meta",{"property":"og:title","content":"Neutralino.computer"}],["meta",{"property":"og:description","content":"Neutralino.computer 命名空间包含与用户硬件相关的方法。 computer.getMemoryInfo() 返回系统内存统计数据，单位为字节。 Return Object (awaited): physical Object: 物理内存信息。 total Number: 物理内存总量。 available Number: 可用物理内存..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-19T06:47:25.000Z"}],["meta",{"property":"article:author","content":"wll8"}],["meta",{"property":"article:modified_time","content":"2024-03-19T06:47:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Neutralino.computer\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-19T06:47:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wll8\\",\\"url\\":\\"https://github.com/wll8\\"}]}"]]},"headers":[{"level":2,"title":"computer.getMemoryInfo()","slug":"computer-getmemoryinfo","link":"#computer-getmemoryinfo","children":[{"level":3,"title":"Return Object (awaited):","slug":"return-object-awaited","link":"#return-object-awaited","children":[]}]},{"level":2,"title":"computer.getArch()","slug":"computer-getarch","link":"#computer-getarch","children":[{"level":3,"title":"Return String (awaited):","slug":"return-string-awaited","link":"#return-string-awaited","children":[]}]},{"level":2,"title":"computer.getKernelInfo()","slug":"computer-getkernelinfo","link":"#computer-getkernelinfo","children":[{"level":3,"title":"Return Object (awaited):","slug":"return-object-awaited-1","link":"#return-object-awaited-1","children":[]}]},{"level":2,"title":"computer.getOSInfo()","slug":"computer-getosinfo","link":"#computer-getosinfo","children":[{"level":3,"title":"Return Object (awaited):","slug":"return-object-awaited-2","link":"#return-object-awaited-2","children":[]}]},{"level":2,"title":"computer.getCPUInfo()","slug":"computer-getcpuinfo","link":"#computer-getcpuinfo","children":[{"level":3,"title":"Return Object (awaited):","slug":"return-object-awaited-3","link":"#return-object-awaited-3","children":[]}]},{"level":2,"title":"computer.getDisplays()","slug":"computer-getdisplays","link":"#computer-getdisplays","children":[{"level":3,"title":"Return Object (awaited):","slug":"return-object-awaited-4","link":"#return-object-awaited-4","children":[]},{"level":3,"title":"Display","slug":"display","link":"#display","children":[]}]},{"level":2,"title":"computer.getMousePosition()","slug":"computer-getmouseposition","link":"#computer-getmouseposition","children":[{"level":3,"title":"Return Object (awaited):","slug":"return-object-awaited-5","link":"#return-object-awaited-5","children":[]}]}],"git":{"createdTime":1710830845000,"updatedTime":1710830845000,"contributors":[{"name":"wll8","email":"xwdaysme@gmail.com","commits":1}]},"readingTime":{"minutes":1.62,"words":486},"filePathRelative":"docs/neutralinojs/api/computer.md","localizedDate":"2024年3月19日","autoDesc":true}');export{k as comp,g as data};
