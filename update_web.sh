#!/bin/bash

EXPORT_DIR="docs"
LATEST_EXPORT=$(ls -td $EXPORT_DIR/qgis2web_* | head -1)

echo "Última exportación detectada: $LATEST_EXPORT"

if [ ! -d "$LATEST_EXPORT" ]; then
    echo "No se encontró ninguna carpeta qgis2web_. Saliendo."
    exit 1
fi

echo "Copiando contenido nuevo a docs..."
cp -r $LATEST_EXPORT/* $EXPORT_DIR/

echo "Eliminando carpeta del export..."
rm -r "$LATEST_EXPORT"

echo "Subiendo cambios a GitHub..."
git add docs
git commit -m "Web actualizada automáticamente desde QGIS"
git push

echo "Proceso completado."

