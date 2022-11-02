export default {
    // the wordpress sitemap urls. used to extract atricles from.
    sitemap_urls: ['https://www.myblog.me/post-sitemap1.xml'],
    // id of the dictionary containing the ignored words. only [a-z_-] allowed.
    dict_name: "mydict",
    // title of the dictionary.
    dict_title: "My Dictionary",
    // the GitHub gist id. used to store application state.
    gist_id: "...",
    // http endpoint of the server.
    proxy_root: 'http://localhost:3000',
    // optional. transform a sitemap post url to a human friendly title. especially useful if your urls contain a post title slug.
    // if not set, the default is used: https://blog.me/2022/10/04/first-blog-post-ever/ => first blog post ever
    urlToTitle: url => url,
    // optional. exclude some urls, although they are listed in the sitemap. return true to include, return false to exclude.
    // this might be useful if you have a multi language wordpress setup.
    // if not set, the default is used: only include if sitemapUrl and url hostnames are equal.
    urlFilter: (sitemapUrl, url) => true
}