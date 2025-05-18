<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8"/>

  <xsl:template match="/">
    <html>
      <head>
        <title>Estudiantes</title>
        <style>
          .alto { background-color: #90ee90; margin-bottom: 10px; padding: 5px; }
        </style>
      </head>
      <body>
        <h2>Estudiantes</h2>
        <ul>
          <xsl:for-each select="estudiantes/estudiante">
            <xsl:sort select="edad" data-type="number" order="descending"/>
            <li>
              <xsl:attribute name="class">
                <xsl:if test="calificacion &gt; 9">alto</xsl:if>
              </xsl:attribute>
              <xsl:value-of select="nombre"/> - Edad: <xsl:value-of select="edad"/> - Calificación: <xsl:value-of select="calificacion"/>
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
