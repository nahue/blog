webpackJsonp([44754119215014],{708:function(e,t){e.exports={data:{post:{id:"/home/nahuel/code/personal/blog/content/posts/2018-08-29--enable-swapfile/index.md absPath of file >>> MarkdownRemark",html:'<p>Please keep in mind that your swapfile size should be equal to your <code class="language-text">RAM</code> amount.\nYou can check your ram size by running <code class="language-text">free -m</code>.</p>\n<p>In this example we set a <code class="language-text">2GB swapfile</code>.</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">sudo dd if=/dev/zero of=/mnt/swapfile bs=1M count=2048\nsudo chown root:root /mnt/swapfile\nsudo chmod 600 /mnt/swapfile\nsudo mkswap /mnt/swapfile\nsudo swapon /mnt/swapfile\necho &quot;/mnt/swapfile swap swap defaults 0 0&quot; | sudo tee -a /etc/fstab\nswapon -a</code></pre>\n      </div>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Please keep in mind that your swapfile size should be equal to your "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"RAM"}]},{type:"text",value:" amount.\nYou can check your ram size by running "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"free -m"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In this example we set a "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"2GB swapfile"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:'sudo dd if=/dev/zero of=/mnt/swapfile bs=1M count=2048\nsudo chown root:root /mnt/swapfile\nsudo chmod 600 /mnt/swapfile\nsudo mkswap /mnt/swapfile\nsudo swapon /mnt/swapfile\necho "/mnt/swapfile swap swap defaults 0 0" | sudo tee -a /etc/fstab\nswapon -a'}]}]},{type:"text",value:"\n      "}]}],data:{quirksMode:!1}},fields:{slug:"/enable-swapfile/",prefix:"2018-08-29"},frontmatter:{title:"How to enable swapfile",subTitle:"Swap partition seems to be deprecating.",cover:{childImageSharp:{resize:{src:"/static/linux-1f11d3002a3785643a5d707eee98b1f8-160fa.png"}}}}},author:{id:"/home/nahuel/code/personal/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. <img class="emoji-icon" data-icon="emoji-hearts" style="display: inline; margin: 0; margin-top: 1px; position: relative; top: 5px; width: 25px" src="data:image/png;base64, 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"></p>'},footnote:{id:"/home/nahuel/code/personal/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>built by <a href="https://www.greglobinski.com">greg lobinski</a></li>\n<li>GatsbyJS, ReactJs, CSS in JS - <a href="https://dev.greglobinski.com">Front-end web development with Greg</a></li>\n<li>delivered by <a href="https://pages.github.com/">Github Pages</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:""}}}},pathContext:{slug:"/enable-swapfile/"}}}});
//# sourceMappingURL=path---enable-swapfile-01aaf287c192933ed6a0.js.map