<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8"/>

  <xsl:template match="/">
    <html>
      <head>
        <title>Películas</title>
        <style>
          .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 10px;
          }
          .card {
            border: 2px solid gray;
            padding: 10px;
            border-radius: 5px;
          }
          .larga {
            border-color: red;
          }
        </style>
      </head>
      <body>
        <h2>Películas</h2>
        <div class="grid">
          <xsl:for-each select="peliculas/pelicula">
            <xsl:sort select="anio" data-type="number" order="descending"/>
            <div>
              <xsl:attribute name="class">
                <xsl:text>card</xsl:text>
                <xsl:if test="duracion &gt; 150"> larga</xsl:if>
              </xsl:attribute>
              <h3><xsl:value-of select="titulo"/></h3>
              <p>Género: <xsl:value-of select="genero"/></p>
              <p>Año: <xsl:value-of select="anio"/></p>
              <p>Duración: <xsl:value-of select="duracion"/> min</p>
            </div>
          </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
