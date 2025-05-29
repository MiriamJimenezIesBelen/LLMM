<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" indent="yes" encoding="UTF-8"/>

  <xsl:template match="/biblioteca">
    <html>
      <head>
        <meta charset="UTF-8"/>
        <style>
          body {
            font-size: <xsl:value-of select="css/body/letra"/>
            <xsl:value-of select="css/body/letra/@unidad"/>;
          }
          table, th, td {
            border-style: <xsl:value-of select="css/tabla/tipoBorder"/>;
            border-width: <xsl:value-of select="css/tabla/tamanioBorder"/>
                          <xsl:value-of select="css/tabla/tamanioBorder/@unidad"/>;
            border-color: <xsl:value-of select="css/tabla/colorBorder"/>;
            border-collapse: collapse;
          }
          .rojo {
            color: red;
            font-weight: bold;
          }
          .prestado {
            background-color: yellow;
          }
        </style>
      </head>
      <body>
        <h2>Biblioteca</h2>
        <table>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Año</th>
            <th>Categoría</th>
            <th>Estado</th>
          </tr>
          <xsl:for-each select="libro">
            <tr>
              <td><xsl:value-of select="titulo"/></td>
              <td><xsl:value-of select="autor"/></td>
              <td>
                <xsl:choose>
                  <xsl:when test="año &lt; 2000">
                    <span class="rojo"><xsl:value-of select="año"/></span>
                  </xsl:when>
                  <xsl:otherwise>
                    <xsl:value-of select="año"/>
                  </xsl:otherwise>
                </xsl:choose>
              </td>
              <td><xsl:value-of select="categoria"/></td>
              <td>
                <xsl:choose>
                  <xsl:when test="@prestado='sí'">
                    <span class="prestado">Prestado</span>
                  </xsl:when>
                  <xsl:otherwise>Disponible</xsl:otherwise>
                </xsl:choose>
              </td>
            </tr>
          </xsl:for-each>
        </table>

        <h3>Autores con libros publicados después de 1950:</h3>
        <ol>
          <xsl:for-each select="libro[año &gt; 1950]">
            <li><xsl:value-of select="autor"/></li>
          </xsl:for-each>
        </ol>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
