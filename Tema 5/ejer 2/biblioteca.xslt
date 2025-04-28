<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html lang="en">
        <head> 
            <style> 
                body {font-size: <xsl:value-of select="biblioteca/css/body/letra"/> 
                <xsl:value-of select="biblioteca/css/body/letra/@unidad"/>;} …………………………. 
            </style> 
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