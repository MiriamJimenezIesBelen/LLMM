<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:output method="html" encoding="UTF-8" indent="yes"/>

<xsl:template match="/">
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Listado de Productos</title>
            <link rel="stylesheet" type="text/css" href="estilo.css"/>
        </head>
        <body>
            <h1>
                Listado de Productos (
                <xsl:value-of select="productos/empresa/nombre"/>
                )
            </h1>
            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Peso</th>
                    <th>Descripción</th>
                    <th>Ciudades</th>
                </tr>
                <xsl:for-each select="productos/producto">
                    <!-- Ordenar por precio ascendente -->
                    <xsl:sort select="precio" data-type="number" order="ascending"/>
                    <tr>
                        <!-- Seleccionamos el color de la fila -->
                        <xsl:choose>
                            <xsl:when test="peso/@unidad='kg' and peso >= 5">
                                <xsl:attribute name="class">pesado</xsl:attribute>
                            </xsl:when>
                            <xsl:when test="peso/@unidad='kg' "><!-- and peso > 1 and peso < 5-->
                                    <xsl:attribute name="class">medio</xsl:attribute>
                                </xsl:when>
                                <xsl:otherwise>
                                    <xsl:attribute name="class">ligero</xsl:attribute>
                                </xsl:otherwise>
                            </xsl:choose>
                            
                            <!-- Nombre -->
                            <td>
                                <xsl:choose>
                                    <xsl:when test="precio/@moneda='eur'">
                                        <span class="euro">
                                            <xsl:value-of select="nombre"/>
                                        </span>
                                    </xsl:when>
                                    <xsl:when test="precio/@moneda='usd'">
                                        <span class="dolar">
                                            <xsl:value-of select="nombre"/>
                                        </span>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="nombre"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </td>
                            
                            <!-- Precio con unidad -->
                            <td>
                                <xsl:value-of select="precio"/>
                                <xsl:text> </xsl:text>
                                <xsl:choose>
                                    <xsl:when test="precio/@moneda='eur'">€</xsl:when>
                                    <xsl:when test="precio/@moneda='usd'">$</xsl:when>
                                </xsl:choose>
                            </td>
                            
                            <!-- Peso con unidad -->
                            <td>
                                <xsl:value-of select="peso"/>
                                <xsl:text> </xsl:text>
                                <xsl:value-of select="peso/@unidad"/>
                            </td>
                            
                            <!-- Descripción -->
                            <td>
                                <xsl:value-of select="descripcion"/>
                            </td>
                            
                            <!-- Lista de ciudades ordenadas por paquetes desc -->
                            <td>
                                <ul>
                                    <xsl:for-each select="ciudades/ciudad">
                                        <xsl:sort select="@paquetes" data-type="number" order="descending"/>
                                        <li>
                                            <xsl:value-of select="."/>
                                            <xsl:text> (</xsl:text>
                                            <xsl:value-of select="@paquetes"/>
                                            <xsl:text>)</xsl:text>
                                        </li>
                                    </xsl:for-each>
                                </ul>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
                <p>
                    Dirección de la empresa:
                    <b>
                        <xsl:value-of select="productos/empresa/direccion"/>
                    </b>
                </p>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
