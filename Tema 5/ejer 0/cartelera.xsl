<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output method="html" encoding="UTF-8"/>

    <xsl:template match="/">
        <html>
        <head>
            <title>Cartelera de Cine</title>
            <style>
                table, th, td {
                    border: 1px solid black;
                    border-collapse: collapse;
                    padding: 5px;
                }
            </style>
        </head>
        <body>

            <h1>Películas desde 2010</h1>
            <table>
                <tr>
                    <th>Título (Idioma)</th>
                    <th>Director</th>
                    <th>Año</th>
                    <th>Plataforma</th>
                </tr>
            
                <xsl:for-each select="cartelera/pelicula[anyo &gt;= 2010]">
                    <xsl:sort select="anyo" data-type="number" order="ascending"/>
                    <tr>
                        <td>
                            <xsl:value-of select="titulo"/> 
                        </td>
                        <td><xsl:value-of select="director"/></td>
                        <td><xsl:value-of select="anyo"/></td>
                        <td><xsl:value-of select="@plataforma"/></td>
                    </tr>
                </xsl:for-each>
            
            </table>
            

            <h2>Películas anteriores a 2010</h2>
            <ol>
                <xsl:for-each select="cartelera/pelicula[anyo &lt; 2010]">
                    <xsl:sort select="anyo" data-type="number" order="ascending"/>
                    <li>
                        <xsl:value-of select="titulo"/>
                    </li>
                </xsl:for-each>
            </ol>
            
        </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
