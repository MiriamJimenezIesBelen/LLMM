<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" encoding="UTF-8"/>

  <xsl:template match="/">

    <html lang="es">
      <head>
        <meta charset="UTF-8"/>
        <title>Biblioteca</title>
        <style>
          body {
            font-size: <xsl:value-of select="biblioteca/css/body/letra"/>
            <xsl:value-of select="biblioteca/css/body/letra/@unidad"/>;
          }
          table {
            border-collapse: collapse;
          }
          th, td {
            border-color: blue;
            border-style: solid;
            border-width: 1px;
            padding: 4px;
          }
          th {
            background-color: lightgray;
          }
          .año-antiguo {
            color: red;
            font-weight: bold;
          }
          .prestado {
            background-color: yellow;
            color: blue;
            font-weight: bold;
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

          <xsl:for-each select="biblioteca/libro">
            <tr>
              <td><xsl:value-of select="titulo"/></td>
              <td><xsl:value-of select="autor"/></td>
              <td>
                <xsl:choose>
                  <xsl:when test="año &lt; 2000">
                    <span class="año-antiguo"><xsl:value-of select="año"/></span>
                  </xsl:when>
                  <xsl:otherwise>
                    <xsl:value-of select="año"/>
                  </xsl:otherwise>
                </xsl:choose>
              </td>
              <td><xsl:value-of select="categoria"/></td>
              <td>
                <xsl:choose>
                  <xsl:when test="estado = 'Prestado'">
                    <span class="prestado"><xsl:value-of select="estado"/></span>
                  </xsl:when>
                  <xsl:otherwise>
                    <xsl:value-of select="estado"/>
                  </xsl:otherwise>
                </xsl:choose>
              </td>
            </tr>
          </xsl:for-each>
        </table>

        <h3>Autores (publicados después de 1950)</h3>
        <ol>
          <xsl:for-each select="biblioteca/libro[año &gt; 1950]">
            <xsl:sort select="autor" order="descending"/>
            <li><xsl:value-of select="autor"/></li>
          </xsl:for-each>
        </ol>
      </body>
    </html>

  </xsl:template>

</xsl:stylesheet>
