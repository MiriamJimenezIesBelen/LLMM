<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>XSL</title>
        </head>
        <body>
            <h2>Productos</h2>
            <ul>
                <xsl:for-each select="productos/producto">
                    <li>
                        <xsl:value-of select="nombre"/>
                    </li>

                </xsl:for-each>
            </ul>
        </body>
        </html>

    </xsl:template>
</xsl:stylesheet>