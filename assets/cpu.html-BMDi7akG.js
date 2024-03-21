import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o,c as i,b as n,d as s,e as t,a}from"./app-C7Z0-dQA.js";const u={},l=a(`<h1 id="sys-cpu" tabindex="-1"><a class="header-anchor" href="#sys-cpu"><span>sys.cpu</span></a></h1><h2 id="sys-cpu-getbrand" tabindex="-1"><a class="header-anchor" href="#sys-cpu-getbrand"><span>sys.cpu.getBrand()</span></a></h2><p>返回CPU商标信息</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token punctuation">,</span> res<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> native<span class="token punctuation">.</span>sys<span class="token punctuation">.</span>cpu<span class="token punctuation">.</span><span class="token function">getBrand</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>

<span class="token comment">// Intel(R) Core(TM) i7-8750H CPU @ 2.20GHz</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sys-cpu-getfrequence" tabindex="-1"><a class="header-anchor" href="#sys-cpu-getfrequence"><span>sys.cpu.getFrequence()</span></a></h2><p>返回表示 CPU 频率的数值,以 MHz 为单位</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token punctuation">,</span> res<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> native<span class="token punctuation">.</span>sys<span class="token punctuation">.</span>cpu<span class="token punctuation">.</span><span class="token function">getFrequence</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>

<span class="token comment">// 2271.18168</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sys-cpu-getfrequence-true" tabindex="-1"><a class="header-anchor" href="#sys-cpu-getfrequence-true"><span>sys.cpu.getFrequence(true)</span></a></h2><p>返回表示 CPU 频率的友好格式的字符串,单位: GHz 小数位数：1</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token punctuation">,</span> res<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> native<span class="token punctuation">.</span>sys<span class="token punctuation">.</span>cpu<span class="token punctuation">.</span><span class="token function">getFrequence</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>

<span class="token comment">// 2.3 GHz</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sys-cpu-getinfo-eax-结构体" tabindex="-1"><a class="header-anchor" href="#sys-cpu-getinfo-eax-结构体"><span>sys.cpu.getInfo(EAX, 结构体)</span></a></h2><p>参考文档： https://en.wikipedia.org/wiki/CPUID</p><p>根据结构体查询 cpu 信息。</p><p>例如获取制造商信息：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token punctuation">,</span> res<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> native<span class="token punctuation">.</span>sys<span class="token punctuation">.</span>cpu<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">_struct</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">INT eax;BYTE ebx[4];BYTE ecx[4];BYTE edx[4]</span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span>res<span class="token punctuation">.</span>ebx<span class="token punctuation">,</span> res<span class="token punctuation">.</span>ecx<span class="token punctuation">,</span> res<span class="token punctuation">.</span>edx<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 返回值： GenuntelineI</span>
<span class="token comment">// 也可以直接调用 \`sys.cpu.getVender()\` 获取。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取制造商信息：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token punctuation">,</span> res1<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> native<span class="token punctuation">.</span>sys<span class="token punctuation">.</span>cpu<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token number">0x80000002</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">_struct</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">BYTE str[16]</span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token punctuation">,</span> res2<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> native<span class="token punctuation">.</span>sys<span class="token punctuation">.</span>cpu<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token number">0x80000003</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">_struct</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">BYTE str[16]</span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token punctuation">,</span> res3<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> native<span class="token punctuation">.</span>sys<span class="token punctuation">.</span>cpu<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token number">0x80000004</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">_struct</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">BYTE str[16]</span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span>res1<span class="token punctuation">.</span>str<span class="token punctuation">,</span> res2<span class="token punctuation">.</span>str<span class="token punctuation">,</span> res3<span class="token punctuation">.</span>str<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 返回值： Intel(R) Core(TM) i7-8750H CPU @ 2.20GHz</span>
<span class="token comment">// 也可以直接调用 \`sys.cpu.getBrand()\` 获取。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sys-cpu-getinfobywmi" tabindex="-1"><a class="header-anchor" href="#sys-cpu-getinfobywmi"><span>sys.cpu.getInfoByWmi()</span></a></h2>`,18),r={href:"https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-processor",target:"_blank",rel:"noopener noreferrer"},d=a(`<p><a href="#syscpuwmiinfoobject">返回对象:sysCpuWmiInfoObject</a></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token punctuation">,</span> res<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> native<span class="token punctuation">.</span>sys<span class="token punctuation">.</span>cpu<span class="token punctuation">.</span><span class="token function">getInfoByWmi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
<span class="token punctuation">{</span>
  &quot;AddressWidth&quot;: 64,
  &quot;Architecture&quot;: 9,
  &quot;AssetTag&quot;: &quot;To Be Filled By O.E.M.&quot;,
  &quot;Availability&quot;: 3,
  &quot;Caption&quot;: &quot;Intel64 Family 6 Model 151 Stepping 2&quot;,
  ...
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sys-cpu-getmaxextfunction" tabindex="-1"><a class="header-anchor" href="#sys-cpu-getmaxextfunction"><span>sys.cpu.getMaxExtFunction()</span></a></h2><p>CPU的扩展信息最大查询索引</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token punctuation">,</span> res<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> native<span class="token punctuation">.</span>sys<span class="token punctuation">.</span>cpu<span class="token punctuation">.</span><span class="token function">getMaxExtFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>

<span class="token comment">// 2147483656</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sys-cpu-getvender" tabindex="-1"><a class="header-anchor" href="#sys-cpu-getvender"><span>sys.cpu.getVender()</span></a></h2><p>返回制造商信息,Intel会返回&quot;GenuineIntel&quot;,AMD会返回&quot;AuthenticAMD&quot;</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token punctuation">,</span> res<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> native<span class="token punctuation">.</span>sys<span class="token punctuation">.</span>cpu<span class="token punctuation">.</span><span class="token function">getVender</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>

<span class="token comment">// GenuineIntel</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="syscpuwmiinfoobject" tabindex="-1"><a class="header-anchor" href="#syscpuwmiinfoobject"><span>sysCpuWmiInfoObject</span></a></h2>`,9),k={href:"https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-processor",target:"_blank",rel:"noopener noreferrer"},m=a('<h3 id="addresswidth" tabindex="-1"><a class="header-anchor" href="#addresswidth"><span>.AddressWidth</span></a></h3><p>CPU 位宽,值为 32 或 64</p><h3 id="architecture" tabindex="-1"><a class="header-anchor" href="#architecture"><span>.Architecture</span></a></h3><p>指令集架构,x86 值为 0,x64 值为 9</p><h3 id="currentclockspeed" tabindex="-1"><a class="header-anchor" href="#currentclockspeed"><span>.CurrentClockSpeed</span></a></h3><p>CPU 当前速度,单位 MHz,该值除 1000 可换算为单位 GHz,使用 math.round 可以限定小数位数</p><h3 id="deviceid" tabindex="-1"><a class="header-anchor" href="#deviceid"><span>.DeviceID</span></a></h3><p>设备 ID</p><h3 id="manufacturer" tabindex="-1"><a class="header-anchor" href="#manufacturer"><span>.Manufacturer</span></a></h3><p>生产厂商,例如&quot;GenuineIntel&quot;</p><h3 id="maxclockspeed" tabindex="-1"><a class="header-anchor" href="#maxclockspeed"><span>.MaxClockSpeed</span></a></h3><p>CPU 最大速度,单位 MHz,该值除 1000 可换算为单位 GHz</p><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name"><span>.Name</span></a></h3><p>设备名</p><h3 id="numberofcores" tabindex="-1"><a class="header-anchor" href="#numberofcores"><span>.NumberOfCores</span></a></h3><p>CPU 核心数</p><h3 id="numberoflogicalprocessors" tabindex="-1"><a class="header-anchor" href="#numberoflogicalprocessors"><span>.NumberOfLogicalProcessors</span></a></h3><p>CPU 逻辑核心数</p>',18);function v(g,h){const e=c("ExternalLinkIcon");return o(),i("div",null,[l,n("p",null,[s("使用 WMI 接口类 win32_processor 查询处理器信息 "),n("a",r,[s("参考"),t(e)])]),d,n("p",null,[n("a",k,[s("参考"),t(e)])]),m])}const f=p(u,[["render",v],["__file","cpu.html.vue"]]),x=JSON.parse('{"path":"/docs/api/sys/cpu.html","title":"sys.cpu","lang":"zh-CN","frontmatter":{"description":"sys.cpu sys.cpu.getBrand() 返回CPU商标信息 sys.cpu.getFrequence() 返回表示 CPU 频率的数值,以 MHz 为单位 sys.cpu.getFrequence(true) 返回表示 CPU 频率的友好格式的字符串,单位: GHz 小数位数：1 sys.cpu.getInfo(EAX, 结构体) 参考文...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/sys-shim-doc/docs/api/sys/cpu.html"}],["meta",{"property":"og:site_name","content":"sys-shim"}],["meta",{"property":"og:title","content":"sys.cpu"}],["meta",{"property":"og:description","content":"sys.cpu sys.cpu.getBrand() 返回CPU商标信息 sys.cpu.getFrequence() 返回表示 CPU 频率的数值,以 MHz 为单位 sys.cpu.getFrequence(true) 返回表示 CPU 频率的友好格式的字符串,单位: GHz 小数位数：1 sys.cpu.getInfo(EAX, 结构体) 参考文..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-21T10:42:54.000Z"}],["meta",{"property":"article:author","content":"wll8"}],["meta",{"property":"article:modified_time","content":"2024-03-21T10:42:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"sys.cpu\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-21T10:42:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wll8\\",\\"url\\":\\"https://github.com/wll8\\"}]}"]]},"headers":[{"level":2,"title":"sys.cpu.getBrand()","slug":"sys-cpu-getbrand","link":"#sys-cpu-getbrand","children":[]},{"level":2,"title":"sys.cpu.getFrequence()","slug":"sys-cpu-getfrequence","link":"#sys-cpu-getfrequence","children":[]},{"level":2,"title":"sys.cpu.getFrequence(true)","slug":"sys-cpu-getfrequence-true","link":"#sys-cpu-getfrequence-true","children":[]},{"level":2,"title":"sys.cpu.getInfo(EAX, 结构体)","slug":"sys-cpu-getinfo-eax-结构体","link":"#sys-cpu-getinfo-eax-结构体","children":[]},{"level":2,"title":"sys.cpu.getInfoByWmi()","slug":"sys-cpu-getinfobywmi","link":"#sys-cpu-getinfobywmi","children":[]},{"level":2,"title":"sys.cpu.getMaxExtFunction()","slug":"sys-cpu-getmaxextfunction","link":"#sys-cpu-getmaxextfunction","children":[]},{"level":2,"title":"sys.cpu.getVender()","slug":"sys-cpu-getvender","link":"#sys-cpu-getvender","children":[]},{"level":2,"title":"sysCpuWmiInfoObject","slug":"syscpuwmiinfoobject","link":"#syscpuwmiinfoobject","children":[{"level":3,"title":".AddressWidth","slug":"addresswidth","link":"#addresswidth","children":[]},{"level":3,"title":".Architecture","slug":"architecture","link":"#architecture","children":[]},{"level":3,"title":".CurrentClockSpeed","slug":"currentclockspeed","link":"#currentclockspeed","children":[]},{"level":3,"title":".DeviceID","slug":"deviceid","link":"#deviceid","children":[]},{"level":3,"title":".Manufacturer","slug":"manufacturer","link":"#manufacturer","children":[]},{"level":3,"title":".MaxClockSpeed","slug":"maxclockspeed","link":"#maxclockspeed","children":[]},{"level":3,"title":".Name","slug":"name","link":"#name","children":[]},{"level":3,"title":".NumberOfCores","slug":"numberofcores","link":"#numberofcores","children":[]},{"level":3,"title":".NumberOfLogicalProcessors","slug":"numberoflogicalprocessors","link":"#numberoflogicalprocessors","children":[]}]}],"git":{"createdTime":1710996794000,"updatedTime":1711017774000,"contributors":[{"name":"wll8","email":"xwdaysme@gmail.com","commits":3},{"name":"禾白","email":"61929206+hebaq@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.42,"words":425},"filePathRelative":"docs/api/sys/cpu.md","localizedDate":"2024年3月21日","autoDesc":true}');export{f as comp,x as data};
