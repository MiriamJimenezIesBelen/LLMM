<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
    
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Pedidos<title>
        </head>
        <body>
            <h2>Portátiles</h2>
            <table border = '1'>
                <tr>
                    <th>Peso<th>
                    <th>RAM</th>
                    <th>Disco</th>
                    <th>Precio</th>
                </tr>
           
                <xsl:for-each select="pedido/portatiles/portatil ">
                    <xsl:if test="precio &lt; 900 and disco/@tipo = 'ssd'">
                        <td><xsl:value-of select="peso"/></td>
                        <td><xsl:value-of select="ram"/></td>
                        <td><xsl:value-of select="disco"/></td>
                        <td><xsl:value-of select="precio"/></td>
                </xsl:for-each>
             </table>
                    
            <h2>Tablets</h2>
            <table border = '1'>
                <tr>
                    <th>Plataforma</th>
                    <th>RAM</th>
                    <th>Batería</th>
                </tr>
        
                <xsl:for-each select="pedido/tablets/tablet ">
                    <xsl:if test="caracteristicas/memoria &gt;= 2 and caracteristicas/tamanio &gt;= 7">
                        <td><xsl:value-of select="plataforma"/></td>
                        <td><xsl:value-of select="caracteristicas/memoria"/></td>
                        <td><xsl:value-of select="caracteristicas/bateria"/></td>
                </xsl:for-each>
            </table>
        </body>
        </html>
    </xsl:template>
</xsl:stylesheet>