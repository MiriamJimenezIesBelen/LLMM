<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" encoding="UTF-8" indent="yes"/>
    
    <!-- Raíz del documento XML -->
    <xsl:template match="/">
        <html>
            <body>
                <h2>Listado de Productos</h2>
                
                <!-- Mostrar nombre de empresa -->
                <p>
                    <xsl:value-of select="productos/empresa/nombre" />
                </p>
                
                <!-- Tabla de productos -->
                <table border="1">
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Peso</th>
                        <th>Descripción</th>
                        <th>Ciudades</th>
                    </tr>
                    
                    <xsl:for-each select="productos/producto">
                        <xsl:sort select="precio" data-type="number" order="ascending" />
                        <tr>
                            <td>
                                <xsl:choose>
                                    <xsl:when test="precio/@moneda='eur'">
                                        <span class="euro"><xsl:value-of select="nombre"/></span>
                                    </xsl:when>
                                    <xsl:when test="precio/@moneda='usd'">
                                        <span class="dolar"><xsl:value-of select="nombre"/></span>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="nombre"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </td>
                            <td><xsl:value-of select="precio"/></td>
                            <td><xsl:value-of select="peso"/></td>
                            <td><xsl:value-of select="descripcion"/></td>
                            <td>
                                <xsl:for-each select="ciudades/ciudad">
                                    <xsl:value-of select="."/>
                                    <xsl:if test="position() != last()">, </xsl:if>
                                </xsl:for-each>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
