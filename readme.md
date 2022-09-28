Ever wanted to comfortably check multiple articles for spelling errors and manage those errors in one place?

# Setup

1. Generate a GitHub access token with gist scope: https://github.com/settings/tokens/new?scopes=gist.
   Set it in `config.gh_gist_token`
2. Create a secret gist with any file in it. Set its id in `config.gist_id`
3. Set TextGears API key in `config.key`. Set other textgears properties: `dict_name` (only [a-z_-]), `dict_title`

# Disclaimer & Warning

This is a best effort implementation for personal use with security relevant design choices:

- API keys (GitHub gist and TextGears) are sent to and used in the browser. Therefore: Do not publicly expose this web application.

# What's Inside

## Technology

- Alpine.js for DOM manipulation based on application state
- Tailwind CSS for fuzzy feeling
- TextGears API for spell checking
- GitHub gist API for storage
- Some SVG

## Features

- Load articles from a sitemap (currently WordPress supported)
- Scan articles for spelling errors
- Manage spelling errors: add word to dictionary, automatically mark error as fixed on article rescan
- Show articles containing selected misspelled words
- Show misspelled words of selected articles
- Show context of misspelled word (e.g. the surrounding words)
- Jump to article edit page
- Ignore spelling error if it refers to a correctly spelled english word (Currently only german is supported as primary article language)