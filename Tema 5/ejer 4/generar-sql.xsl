<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  
  <xsl:output method="text" encoding="UTF-8"/>

  
  <xsl:template match="/baseDeDatos">
    <xsl:apply-templates select="tabla"/>

    <xsl:apply-templates select="tabla/datos/fila"/>
  </xsl:template>

  <xsl:template match="tabla">
    <xsl:text>CREATE TABLE </xsl:text><xsl:value-of select="@nombre"/><xsl:text> (
</xsl:text>
    <xsl:for-each select="campo">
      <xsl:text>    </xsl:text>
      <xsl:value-of select="@nombre"/>
      <xsl:text> </xsl:text>
      <xsl:value-of select="@tipo"/>
      <xsl:if test="@clavePrimaria='true'">
        <xsl:text> PRIMARY KEY</xsl:text>
      </xsl:if>
      <xsl:if test="@claveForanea='true'">
        <xsl:text> REFERENCES </xsl:text><xsl:value-of select="@referencia"/>
      </xsl:if>
      <xsl:choose>
        <xsl:when test="position() != last()">
          <xsl:text>,</xsl:text>
        </xsl:when>
      </xsl:choose>
      <xsl:text>
</xsl:text>
    </xsl:for-each>
    <xsl:text>);
</xsl:text>
    <xsl:text>
</xsl:text>
  </xsl:template>


  <xsl:template match="fila">
    <xsl:variable name="tabla" select="name(..)"/>
    <xsl:text>INSERT INTO </xsl:text><xsl:value-of select="../../@nombre"/>
    <xsl:text> (</xsl:text>
    <xsl:for-each select="*">
      <xsl:value-of select="name()"/>
      <xsl:if test="position() != last()">
        <xsl:text>, </xsl:text>
      </xsl:if>
    </xsl:for-each>
    <xsl:text>) VALUES (</xsl:text>
    <xsl:for-each select="*">
      <xsl:choose>
        <xsl:when test="number(.) = .">
          <xsl:value-of select="."/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:text>'</xsl:text><xsl:value-of select="."/><xsl:text>'</xsl:text>
        </xsl:otherwise>
      </xsl:choose>
      <xsl:if test="position() != last()">
        <xsl:text>, </xsl:text>
      </xsl:if>
    </xsl:for-each>
    <xsl:text>);
</xsl:text>
  </xsl:template>

</xsl:stylesheet>
