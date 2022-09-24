# scan process

1. extract loc from https://www.digitale-gesellschaft.ch/sitemaps/post-sitemap1.xml
2. load loc
    1. get shortlink
    2. replace multiple white spaces with single white space
3. check spelling
4. store findings
    1. {
        word: "fötizid",
        refs: ["shortlink1"],
        ignore: false
    }
5. remove all existing findings for that post, that where not found in this check