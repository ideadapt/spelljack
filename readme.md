# setup

1. Generate a GitHub access token with gist scope: https://github.com/settings/tokens/new?scopes=gist.
   Set it in config.gh_gist_token
2. Create a secret gist with any file in it. Set it's id in config.gist_id
3. Set textgears api key in config.key. Set other textgears properties: dict_name (only [a-z_-]), dict_title

# disclaimer & warning

This is a best effort implementation for personal use with security relevant design choices:

- API keys (GitHub gist and textgears) are sent to and used in the browser. Therefore: Do not publicly expose this web application.