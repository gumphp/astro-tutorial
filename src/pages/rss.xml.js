import rss, { pagesGlobToRssItems } from '@astrojs/rss'

export async function GET(context) {
    return rss({
        title: 'Astro Learn | Blog',
        description: 'A blog about Astro and web development',
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`,
    })
}