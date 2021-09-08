
const config = {
  title: "Phonsent导航",                 
  subtitle: "品牌出海 - 跨境电商独立站推广", 
  logo_icon: "paper plane",                                  
  search:true,                        
  search_engine:[                     
    {
      name:"百 度",
      template:"https://www.baidu.com/s?wd=$s"
    },
    {
      name:"谷 歌",
      template:"https://www.google.com/search?q=$s"
    },
    {
      name:"必 应",
      template:"https://www.bing.com/search?q=$s"
    },
    {
      name:"搜 狗",
      template:"https://www.sogou.com/web?query=$s"
    }
  ],

  lists: [                            //Url list
    {
      name:"翻译工具 Translate",
      icon:"paper plane",
      list:[
        {
          url:"https://fanyi.baidu.com/",
          name:"Baidu Translate",
          desc:"懂中文"
        },
        {
          url:"https://translate.google.com/",
          name:"Google Translate",
          desc:"懂英文"
        },
      ]
    },
    {
      name:"跨境电商 E-commerce",
      icon:"globe cap",
      list:[
        {
          url:"https://trends.google.com/trends/",
          name:"Google Trends",
          desc:"谷歌趋势"
        },
        {
          url:"https://ads.google.cn/marketfinder/",
          name:"Google Marketfinder",
          desc:"发掘全球商机"
        },
        {
          url:"https://www.thinkwithgoogle.com/feature/category-trends/",
          name:"Think with Google",
          desc:"谷歌上升产品"
        },
        {
          url:"https://www.google.com/retail/",
          name:"Google Retail",
          desc:"谷歌商家中心"
        },
        {
          url:"https://ads.google.com/",
          name:"Google Ads",
          desc:"谷歌广告中心"
        },
        {
          url:"https://www.shopify.com/",
          name:"Shopify",
          desc:"独立商店"
        },
        {
          url:"https://wordpress.com/",
          name:"Wordpress",
          desc:"支持商店插件"
        },  
        {
          url:"https://shop.phonsent.com/",
          name:"小商店导航",
          desc:"微信小商店推广"
        },  
      ]
    },
    {
      name:"站点工具 Website tool",
      icon:"sitemap",
      list:[
        {
          url:"https://analytics.google.com/",
          name:"Google Analytics",
          desc:"谷歌站点分析工具"
        },
        {
          url:"https://search.google.com/search-console/",
          name:"Google Search",
          desc:"谷歌站点搜索词"
        },
        {
          url:"https://www.wordstream.com/keywords/",
          name:"Keyword Tool",
          desc:"关键词搜索热度查询"
        },
        {
          url:"https://www.sureoak.com/seo-tools/keyword-rank-checker/",
          name:"Keyword Rank Checker",
          desc:"关键词搜索排名查询"
        },
        {
          url:"https://www.keyword.io/",
          name:"Keyword research tool",
          desc:"长尾关键词搜索查询"
        },
      ]
    },
    {
      name:"社交媒体 Social media",
      icon:"users",
      list:[
        {
          url:"https://www.facebook.com/",
          name:"Facebook",
          desc:"社交网站"
        },
        {
          url:"https://twitter.com/",
          name:"Twitter",
          desc:"社交媒体"
        },
        {
          url:"https://www.linkedin.com/",
          name:"Linkedin",
          desc:"社交职场"
        },
        {
          url:"https://www.youtube.com/",
          name:"Youtube",
          desc:"视频网站"
        },
        {
          url:"https://www.quora.com/",
          name:"Quora",
          desc:"问答社区"
        },
        {
          url:"https://www.instagram.com/",
          name:"Instagram",
          desc:"图社交媒体"
        },
        {
          url:"https://www.tumblr.com/",
          name:"Tumblr",
          desc:"轻博客"
        },
        {
          url:"https://reddit.com/",
          name:"Reddit",
          desc:"话题社区"
        },
      ]
    },
    {
      name:"社交工具 Social media",
      icon:"linkify",
      list:[
        {
          url:"https://buffer.com/",
          name:"Buffer",
          desc:"管理多个社交媒体账号"
        },
        {
          url:"https://ifttt.com/",
          name:"Ifttt",
          desc:"同步发布社交媒体内容"
        },
        {
          url:"https://blogger.com/",
          name:"Blogger",
          desc:"博客日志"
        },
        {
          url:"https://www.google.com/gmail/",
          name:"Gmail",
          desc:"谷歌Gmail邮箱"
        },
        {
          url:"https://web.whatsapp.com/",
          name:"Whatsapp",
          desc:"网页版"
        },
      ]
    },
    {
      name:"学习 Learning related",
      icon:"graduation cap",
      list:[
        {
          url:"https://w3school.com.cn/",
          name:"W3School",
          desc:"HTML基础"
        },
        {
          url:"https://github.com/",
          name:"Github",
          desc:"项目开源"
        },
        {
          url:"https://cloudflare.com/",
          name:"Cloudflare",
          desc:"CDN加速"
        },
        {
          url:"https://developers.cloudflare.com/workers/",
          name:"CF workers",
          desc:"学习文档"
        },
        {
          url:"https://www.google.com/intl/en_au/search/howsearchworks/how-search-works/",
          name:"Google search",
          desc:"了解谷歌搜索的工作过程"
        },
      ]
    },
  ]
}
const el = (tag, attrs, content) => `<${tag} ${attrs.join(" ")}>${content}</${tag}>`;

async function handleRequest(request) {
  const init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }
  return new Response(renderHTML(renderIndex(),config.selling_ads? renderSeller() :null), init);
}
addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request))
})

/*通过分析链接 实时获取favicon
* @url 需要分析的Url地址
*/
function getFavicon(url){
  if(url.match(/https{0,1}:\/\//)){
    //return "https://ui-avatars.com/api/?bold=true&size=36&background=0D8ABC&color=fff&rounded=true&name=" + url.split('//')[1];
    return "https://www.google.cn/s2/favicons?sz=64&domain_url=" + url;
  }else{
    //return "https://ui-avatars.com/api/?bold=true&size=36&background=0D8ABC&color=fff&rounded=true&name=" + url;
    return "https://www.google.cn/s2/favicons?sz=64&domain_url=http://" + url;
  } 
}

/** Render Functions
 *  渲染模块函数
 */

function renderIndex(){
  const footer = el('footer',[],el('div',['class="footer"'],'Powered by' + el('a',['class="ui label"','href="https://github.com/sleepwood/cf-worker-dir"','target="_blank"'],el('i',['class="github icon"'],"") + 'Cf-Worker-Dir') + ' &copy; Base on ' + el('a',['class="ui label"'],el('i',['class="balance scale icon"'],"") + 'MIT License') +"<br>Created in 2021.8.18 by Phonsent.com"));
  const share = el('share',[],el('div',['class="footer"'],el('div',['class="sharethis-inline-share-buttons"'])));
  return renderHeader() + renderMain() + share + footer;
}

function renderHeader(){
  const item = (template,name) => el('a',['class="item"',`data-url="${template}"`],name);

  var nav = el('div',['class="ui large secondary inverted menu"'],el('div',['class="item"']))
  var title = el('h1',['class="ui inverted header"'],el('i',[`class="${config.logo_icon} icon"`],"") + el('div',['class="content"'],config.title + el('div',['class="sub header"'],config.subtitle)));
  var menu = el('div',['id="sengine"','class="ui bottom attached tabular inverted secondary menu"'],el('div',['class="header item"'],'&nbsp;') + config.search_engine.map((link,key) =>{
    if(key == 0){
      return el('a',['class="active item"',`data-url="${link.template}"`],link.name);
    }else{
      return item(link.template,link.name);
    }
  }).join(""))
  var input = el('div',['class="ui left corner labeled right icon fluid large input"'],el('div',['class="ui left corner label"'],el('img',['id="search-fav"','class="left floated avatar ui image"','src="https://cdn.jsdelivr.net/gh/blogabs/phonsent/favicon.ico"'],"")) + el('input',['id="searchinput"','type="search"','placeholder="使用Ctrl+D可收藏本站，搜索你想要的信息"','autocomplete="off"'],"") + el('i',['class="inverted circular search link icon"'],""));
  return el('header',[],el('div',['id="head"','class="ui inverted vertical masthead center aligned segment"'],(config.hitokoto ? el('div',['id="nav"','class="ui container"'],nav) : "") + el('div',['id="title"','class="ui text container"'],title + (config.search ? input + menu :""))))
}

function renderMain() {
  var main = config.lists.map((item) => {
    const card = (url,name,desc)=> el('a',['class="card"',`href=${url}`,'target="_blank"'],el('div',['class="content"'],el('img',['class="left floated avatar ui image"',`src=${getFavicon(url)}`],"") + el('div',['class="header"'],name) + el('div',['class="meta"'],desc)));
    const divider = el('h4',['class="ui horizontal divider header"'],el('i',[`class="${item.icon} icon"`],"")+item.name);

    var content = el('div',['class="ui four stackable cards"'],item.list.map((link) =>{
      return card(link.url,link.name,link.desc);
    }).join(""));

    return el('div',['class="ui basic segment"'],divider + content);
  }).join("");
  
  return el('main',[],el('div',['class="ui container"'],main));
}


function renderHTML(index) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${config.title} - ${config.subtitle}</title>
      <meta name="description" content="Phonsent品牌出海导航站，让您在出海做跨境电商时，快速触及海外客户聚集的平台，精准推广！">
      <meta name="keywords" content="phonsent,品牌出海导航,跨境电商独立站推广">
      <link rel="icon" href="https://cdn.jsdelivr.net/gh/blogabs/phonsent/favicon.ico" />
      <link href="https://cdn.jsdelivr.net/npm/semantic-ui-css@2.4.1/semantic.min.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/gh/blogabs/phonsent/stylesheets/style.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/semantic-ui-css@2.4.1/semantic.min.js"></script>
  <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-J63RYNNXQF"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-J63RYNNXQF');
</script>
<script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=6126f0e68aa229001265058d&product=inline-share-buttons' async='async'></script>
  </head>
  <body>
    ${index}
    <script>
      $('#sengine a').on('click', function (e) {
        $('#sengine a.active').toggleClass('active');
        $(e.target).toggleClass('active');
        $('#search-fav').attr('src',$(e.target).data('url').match(`+/https{0,1}:\/\/\S+\//+`)[0] + '/favicon.ico') ;
      });
      $('.search').on('click', function (e) {
          var url = $('#sengine a.active').data('url');
          url = url.replace(`+/\$s/+`,$('#searchinput').val());
          window.open(url);
      });
      /* 鼠标聚焦时，回车事件 */
      $("#searchinput").bind("keypress", function(){
          if (event.keyCode == 13){
          // 触发需要调用的方法
          $(".search").click();
          }
      });
      $('#menubtn').on('click', function (e) {
          $('#seller').modal('show');
      });
    </script>
  </body>
  </html>`
}
