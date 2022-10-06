# Spelljack

Ever wanted to comfortably check multiple articles for spelling errors and manage those errors in one palace?

<img src="https://github.com/ideadapt/spelljack/raw/main/doc/screenshot.png" width="300">

# Setup

You must have Node >= 14 and Deno >= 1.26 installed on your machine.

1. Generate a GitHub access token with gist scope: https://github.com/settings/tokens/new?scopes=gist.
   Set it in server config `gh_gist_token`.
1. Create a secret gist with any file in it. Set its id in server config `gist_id`.
1. Set TextGears API key in server config `key`. Set other textgears properties: 
   `dict_name` (only [a-z_-], server and frontend config), `dict_title` (frontend config)
1. Set an `editor_password` (user is prompted to enter that, once a write operation is triggered, e.g. "Check spelling" or "ignore") in the server config.
1. Set the `sitemap_urls` in frontend config.
1. If required, define `urlToTitle` in frontend config.
1. If required, define `urlFilter` in frontend config.

## Dev

1. Start server `npm run server:dev`
1. Start frontend `npm run dev`

## Prod

1. Only once: Set up a denoland project that connects to your repository. 
1. Only once: Add environment variables in denoland project settings for: 
   `key`, `editor_password`, `dict_name`, `gh_gist_token`, `allowed_origin_hosts` (comma separated list)
1. Every time you push, the denoland project is deployed automagically.
1. Set frontend config `proxy_root` to endpoint of deployed server, e.g. https://ideadapt-spelljack.deno.dev
1. Build frontend project for prod usage: `npm run dist`
1. Deploy dist directory to any static web host.

Alternatively: Instead of deploying to denoland, you can always compile your own binary and let it run anywhere:

`deno compile --allow-read --allow-net --allow-env ./main.ts`


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
- Write operations protected via user provided password (see editor_password)

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

- Support multiple editor_passwords (e.g. one per author / role)
- Support article sources other than wordpress blog posts
- Some better UX here and there