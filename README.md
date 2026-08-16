# hayatonasu.github.io

Personal site. Served by GitHub Pages' built-in Jekyll build (no
`.nojekyll`). `index.html` has no front matter, so Jekyll passes it
through unchanged. `papers/index.html`, `talks/index.html`,
`others/index.html`, and `notejapanese/index.html` are the exception —
they do have front matter and are Liquid-rendered, listing the
`_papers/`/`_talks/`/`_notes/`/`_notes_ja/` collections, and are served
at the clean folder URLs `/papers/`, `/talks/`, `/others/`, and
`/notejapanese/`.

Shared static assets (stylesheet, JS, fonts, images, the homepage's
news feed data) live under `assets/`. PDFs are kept separate, under
`pdfs/papers/` and `pdfs/talks/` — one file per paper/talk, referenced
by `pdf:` in the matching `_papers/`/`_talks/` entry.

For local preview, `Gemfile` pins the same `github-pages` gem GitHub
Pages itself builds with:

```bash
bundle install
bundle exec jekyll serve --livereload
```

## Writing a blog post

Add a Markdown file to `_posts/`, named `YYYY-MM-DD-slug.md`, with
front matter:

```yaml
---
layout: post
title: "Post Title"
date: YYYY-MM-DD
tags: [optional, tags]
---
```

It will be published at `/blog/YYYY/MM/DD/slug/` (see `permalink` in
`_config.yml`) and listed on `/blog/`.

Math: use `$...$` for inline math and `$$...$$` for display math;
both are rendered client-side by MathJax v3 (configured in
`_layouts/post.html`).

Images: put post images in `blog/images/`, named with the post's slug
as a prefix (e.g. `hello-world-diagram.png`) to avoid collisions
between posts, and reference them with an absolute path:
`![alt text](/blog/images/hello-world-diagram.png)`.

This layout is meant to match what the Obsidian Enveloppe plugin
produces by default (wikilinks converted to Markdown links, images
uploaded and rewritten), so posts written there should need no manual
adjustment before or after push.

## Adding a paper

Add a Markdown file to `_papers/`, e.g. `_papers/my-paper.md`:

```yaml
---
layout: paper
title: "Paper Title"
authors: ["Hayato Nasu", "Coauthor Name"]   # "Hayato Nasu" is auto-bolded
type: preprint   # journalArticle | conferencePaper | preprint | manuscript | thesis
venue: "arXiv preprint"        # journal/conference name, or thesis institution
date: YYYY-MM-DD
pdf: /pdfs/papers/my-paper.pdf      # optional, put the PDF in the existing pdfs/papers/ dir
arxiv: https://arxiv.org/abs/xxxx.xxxxx   # optional
link: https://doi.org/...      # optional (DOI / published version / other link)
thesis_type: "Master's thesis" # optional, only meaningful when type: thesis
tags: [category-theory, double-categories]
bibtex: |
  @article{key2024,
    title={...}, author={Nasu, Hayato}, journal={...}, year={2024}
  }
---
Optional extended abstract/notes in Markdown, with $...$/$$...$$ math.
```

It's published at `/papers/my-paper/`, grouped by `type` on `/papers/`.
Use `link`, not `url` — `url` is a reserved Jekyll property (the page's
own permalink) and a front-matter field named `url` would be silently
shadowed.

Add `standalone: false` to skip linking to the item's own page — the
title on `/papers/` links straight to `link`/`arxiv`/`pdf` instead
(whichever is set first), useful for a minor item that doesn't need its
own page. Caveat: GitHub Pages' default Jekyll build can't run custom
plugins, so there's no supported way to stop the `/papers/my-paper/`
page from being *generated* — `standalone: false` only stops it from
being *linked to* anywhere on the site. It still exists if someone has
or guesses the URL. Add `sitemap: false` too if you don't want it
indexed by search engines either.

## Adding a talk

Add a Markdown file to `_talks/`, e.g. `_talks/my-talk.md`:

```yaml
---
layout: talk
title: "Talk Title"
meeting_name: "Category Theory 2025"
place: "Somewhere"
date: YYYY-MM-DD
link: https://youtube.com/...   # optional, YouTube links get their own icon
pdf: /pdfs/talks/my-talk.pdf         # optional slides, existing pdfs/talks/ dir
featured: true                  # optional; non-featured talks are hidden
                                 # behind a "Show all talks" toggle on /talks/
tags: [double-categories]
---
Optional abstract in Markdown — shown on both the talk's own page and,
collapsed, on the /talks/ list.
```

It's published at `/talks/my-talk/`. Same `standalone: false` option as
papers (title links to `link`/`pdf` instead of the item's own page).

## Adding a note (Others / 日本語ノート)

Add a Markdown file to `_notes/` (English, listed on `/others/`) or
`_notes_ja/` (Japanese, listed on `/notejapanese/`) — both share the
same `note` layout and front-matter schema:

```yaml
---
layout: note
title: "Note Title"
date: YYYY-MM-DD
extra: "Unpublished note"       # optional free text shown next to the date
link: https://example.com       # optional
pdf: /pdfs/papers/my-note.pdf        # optional
tags: [example]
standalone: false                # optional; see below
---
Optional body in Markdown.
```

It's published at `/notes/my-note/` (or `/notes-ja/my-note/`). Notes
default to having their own page like papers/talks, but since these were
previously just short link-outs (no per-item page existed before this
migration), add `standalone: false` for anything that's just a pointer
to an external link or PDF — see the `standalone` note under "Adding a
paper" above for what that does and doesn't skip.

## Math macros (`blog/preamble.sty`)

Blog posts, papers, talks, and notes all load `blog/preamble.sty` (the
same `\newcommand` macro file used in Obsidian) automatically, so macros like
`\Set` or `\Catone` work everywhere without re-declaring them per file.
Edit that one file to add/change macros site-wide.
