import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as r,c as s,b as t,d as e,e as l,w as a}from"./app-3ZNsKVDV.js";const u={},c=t("p",null,"Neutralinojs 为开发者提供了一个 JavaScript 客户端库（也称为 Neutralino.js），以便通过 Neutralinojs 服务器与本地操作进行交互。 JavaScript 客户端的实现位于 neutralino.js JavaScript 文件中。 因此，您的 Neutralinojs 项目中需要有客户端库。",-1),p=t("p",null,[e("客户端库将其 JavaScript API 暴露给浏览器的 window 范围，您可以通过 "),t("code",null,"Neutralino"),e(" 或 "),t("code",null,"window.Neutralino"),e(" 从原生 JavaScript 或任何前端框架访问它们。")],-1),d=t("code",null,"Neutralino.os.getEnv",-1),m=t("code",null,"getEnv",-1),h=t("p",null,"客户端库维护一个任务池，通过 UUID 字符串将服务器消息映射到匹配的请求。",-1),_=t("p",null,[e("Neutralinojs 使用此通信机制为您提供许多本地操作，适用于所有"),t("code",null,"模式"),e("。")],-1),N=t("h2",{id:"本地-api-命名空间",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#本地-api-命名空间"},[t("span",null,"本地 API 命名空间")])],-1);function j(v,f){const o=n("RouteLink");return r(),s("div",null,[c,p,t("p",null,[e("假设您需要从操作系统获取环境变量值。您可以调用 "),l(o,{to:"/docs/neutralinojs/api/os.html#osgetenvkey"},{default:a(()=>[d]),_:1}),e(" JavaScript 方法。一旦您调用 "),m,e(" 方法，客户端库将通过 WebSocket 消息调用 Neutralinojs 服务器。之后，Neutralinojs 服务器将执行本地操作以获取给定的环境变量。 一旦 Neutralinojs 服务器完成任务，它就会发送一个带有环境变量值的 WebSocket 消息。 最后，客户端库会解析一个带有从服务器收到的结果的承诺。")]),h,_,N,t("ul",null,[t("li",null,[l(o,{to:"/docs/neutralinojs/api/app.html"},{default:a(()=>[e("Neutralino.app")]),_:1})]),t("li",null,[l(o,{to:"/docs/neutralinojs/api/clipboard.html"},{default:a(()=>[e("Neutralino.clipboard")]),_:1})]),t("li",null,[l(o,{to:"/docs/neutralinojs/api/computer.html"},{default:a(()=>[e("Neutralino.computer")]),_:1})]),t("li",null,[l(o,{to:"/docs/neutralinojs/api/debug.html"},{default:a(()=>[e("Neutralino.debug")]),_:1})]),t("li",null,[l(o,{to:"/docs/neutralinojs/api/events.html"},{default:a(()=>[e("Neutralino.events")]),_:1})]),t("li",null,[l(o,{to:"/docs/neutralinojs/api/extensions.html"},{default:a(()=>[e("Neutralino.extensions")]),_:1})]),t("li",null,[l(o,{to:"/docs/neutralinojs/api/filesystem.html"},{default:a(()=>[e("Neutralino.filesystem")]),_:1})]),t("li",null,[l(o,{to:"/docs/neutralinojs/api/init.html"},{default:a(()=>[e("Neutralino.init")]),_:1})]),t("li",null,[l(o,{to:"/docs/neutralinojs/api/os.html"},{default:a(()=>[e("Neutralino.os")]),_:1})]),t("li",null,[l(o,{to:"/docs/neutralinojs/api/storage.html"},{default:a(()=>[e("Neutralino.storage")]),_:1})]),t("li",null,[l(o,{to:"/docs/neutralinojs/api/updater.html"},{default:a(()=>[e("Neutralino.updater")]),_:1})]),t("li",null,[l(o,{to:"/docs/neutralinojs/api/window.html"},{default:a(()=>[e("Neutralino.window")]),_:1})])])])}const y=i(u,[["render",j],["__file","overview.html.vue"]]),S=JSON.parse('{"path":"/docs/neutralinojs/api/overview.html","title":"概览","lang":"zh-CN","frontmatter":{"title":"概览","description":"Neutralinojs 为开发者提供了一个 JavaScript 客户端库（也称为 Neutralino.js），以便通过 Neutralinojs 服务器与本地操作进行交互。 JavaScript 客户端的实现位于 neutralino.js JavaScript 文件中。 因此，您的 Neutralinojs 项目中需要有客户端库。 客户端库将其...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/sys-shim-doc/docs/neutralinojs/api/overview.html"}],["meta",{"property":"og:site_name","content":"sys-shim"}],["meta",{"property":"og:title","content":"概览"}],["meta",{"property":"og:description","content":"Neutralinojs 为开发者提供了一个 JavaScript 客户端库（也称为 Neutralino.js），以便通过 Neutralinojs 服务器与本地操作进行交互。 JavaScript 客户端的实现位于 neutralino.js JavaScript 文件中。 因此，您的 Neutralinojs 项目中需要有客户端库。 客户端库将其..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-19T06:47:25.000Z"}],["meta",{"property":"article:author","content":"wll8"}],["meta",{"property":"article:modified_time","content":"2024-03-19T06:47:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"概览\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-19T06:47:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wll8\\",\\"url\\":\\"https://github.com/wll8\\"}]}"]]},"headers":[{"level":2,"title":"本地 API 命名空间","slug":"本地-api-命名空间","link":"#本地-api-命名空间","children":[]}],"git":{"createdTime":1710830845000,"updatedTime":1710830845000,"contributors":[{"name":"wll8","email":"xwdaysme@gmail.com","commits":1}]},"readingTime":{"minutes":1.08,"words":324},"filePathRelative":"docs/neutralinojs/api/overview.md","localizedDate":"2024年3月19日","autoDesc":true}');export{y as comp,S as data};
