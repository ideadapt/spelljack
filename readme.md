# Spelljack

Ever wanted to comfortably check multiple articles for spelling errors and manage those errors in one place?

<img src="https://github.com/ideadapt/spelljack/raw/main/doc/screenshot.png" width="300">

# Setup

You must have Node >= 14 and Deno >= 1.26 installed on your machine.

1. Generate a GitHub access token with gist scope: https://github.com/settings/tokens/new?scopes=gist.
   Set it in `config.gh_gist_token`
2. Create a secret gist with any file in it. Set its id in `config.gist_id`
3. Set TextGears API key in `config.key`. Set other textgears properties: 
   `dict_name` (only [a-z_-]), `dict_title`, `editor_token` (user is prompted to enter that, once a write operation is triggered, e.g. spell check or ignore)

# Dev

4. Start server `npm run server:dev`
5. Start frontend `npm run dev`

# Prod

6. Only once: Set up a denoland project that connects to your repository. 
7. Only once: Add environment variables in denoland project settings for: 
   `key`, `editor_token`, `dict_name`, `gh_gist_token`, `allowed_origin_hosts` (comma separated list)
8. Every time you push, the denoland project is deployed automagically.
9. Set `config.proxy_root` to endpoint of deployed server, e.g. https://ideadapt-spelljack.deno.dev
10. Build frontend project for prod usage: `npm run dist`
11. Deploy dist directory to any static web host.


# What's Inside

## Features

- Load articles from a sitemap (currently WordPress supported)
- Scan articles for spelling errors
- Manage spelling errors: add word to dictionary, automatically mark error as fixed on article rescan
- Show articles containing selected misspelled words
- Show misspelled words of selected articles
- Show context of misspelled word (e.g. the surrounding words)
- Jump to article edit page
- Ignore spelling error if it refers to a correctly spelled english word (Currently only german is supported as primary article language)
- Write operations protected via user provided password (see editor_token)

## Technology

- Deno based API server using oak
- Denon to restart server on source change
- Alpine.js for DOM manipulation based on application state
- Tailwind CSS for fuzzy feeling
- Parcel for frontend dev and prod build
- TextGears API for spell checking
- GitHub gist API for storage
- Some SVG


# What more?

- Less spaghetti code
- Parcel with optimized prod build
- Support multiple editor_tokens (e.g. one per author / role)
- Support article sources other than wordpress blog posts
- Some better UX here and there