import { Post } from '../types';
import { posts } from '../data/posts';

export const generateRSSFeed = (): string => {
  const baseUrl = window.location.origin;
  const now = new Date().toUTCString();

  const rssItems = posts
    .filter(post => !post.archived)
    .map(post => `
      <item>
        <title><![CDATA[${post.title}]]></title>
        <link>${baseUrl}/blog/${post.id}</link>
        <guid>${baseUrl}/blog/${post.id}</guid>
        <description><![CDATA[${post.excerpt}]]></description>
        <category>${post.category}</category>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <author>info@pdrportal.com (Dr. Ayşe Yılmaz)</author>
      </item>
    `).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>PDR Portal</title>
    <link>${baseUrl}</link>
    <description>Profesyonel gelişiminiz için vaka paylaşımı ve süpervizyon platformu</description>
    <language>tr</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;
};