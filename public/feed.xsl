<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/> — RSS Feed</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #f8fafc; color: #334155; line-height: 1.6; }
          .container { max-width: 640px; margin: 0 auto; padding: 48px 24px; }
          .banner { background: #0f172a; color: #e2e8f0; padding: 12px 16px; border-radius: 8px; margin-bottom: 32px; font-size: 14px; }
          .banner a { color: #94a3b8; }
          h1 { font-size: 28px; font-weight: 700; color: #0f172a; }
          .desc { margin-top: 8px; font-size: 15px; color: #64748b; }
          .items { margin-top: 32px; display: flex; flex-direction: column; gap: 20px; }
          .item { border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px 20px; background: #fff; }
          .item-title { font-size: 16px; font-weight: 600; color: #0f172a; }
          .item-title a { color: inherit; text-decoration: none; }
          .item-title a:hover { text-decoration: underline; }
          .item-desc { margin-top: 6px; font-size: 14px; color: #64748b; }
          .item-date { margin-top: 8px; font-size: 12px; color: #94a3b8; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="banner">
            This is an <strong>RSS feed</strong>. Subscribe by copying this URL into your reader.
            <a href="https://aboutfeeds.com">What is RSS?</a>
          </div>
          <h1><xsl:value-of select="/rss/channel/title"/></h1>
          <p class="desc"><xsl:value-of select="/rss/channel/description"/></p>
          <div class="items">
            <xsl:for-each select="/rss/channel/item">
              <div class="item">
                <div class="item-title">
                  <a>
                    <xsl:attribute name="href"><xsl:value-of select="link"/></xsl:attribute>
                    <xsl:value-of select="title"/>
                  </a>
                </div>
                <div class="item-desc"><xsl:value-of select="description"/></div>
                <div class="item-date"><xsl:value-of select="pubDate"/></div>
              </div>
            </xsl:for-each>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
