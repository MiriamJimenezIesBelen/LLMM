<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8"/>

<xsl:template match="/">
    <html>
      <head>
        <title>Empleados</title>
        <style type="text/css">
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
          }
          .especial {
            background-color: #ffeb3b;
          }
        </style>
      </head>
      <body>
        <h2>Lista de empleados</h2>
        <table>
          <tr>
            <th>Nombre</th>
            <th>Puesto</th>
            <th>Departamento</th>
            <th>Salario</th>
            <th>Antigüedad</th>
          </tr>
          <xsl:for-each select="empresa/empleado">
            <xsl:sort select="nombre"/>
            <tr>
              <xsl:if test="antiguedad &gt; 5 and antiguedad &lt;= 10">
                <xsl:attribute name="class">especial</xsl:attribute>
              </xsl:if>
              <td><xsl:value-of select="nombre"/></td>
              <td><xsl:value-of select="puesto"/></td>
              <td><xsl:value-of select="departamento"/></td>
              <td><xsl:value-of select="salario"/></td>
              <td><xsl:value-of select="antiguedad"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>