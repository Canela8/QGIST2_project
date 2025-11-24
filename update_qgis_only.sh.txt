#!/bin/bash

echo "==== Actualización del proyecto QGIS (sin afectar la web) ===="

# Verifica en qué rama están
CURRENT_BRANCH=$(git branch --show-current)

if [ "$CURRENT_BRANCH" = "main" ]; then
    echo "⚠ ERROR: No puedes trabajar en la rama main."
    echo "Por favor cámbiate a tu rama asignada:"
    echo "git checkout <tu-rama>"
    exit 1
fi

echo "Trabajando en la rama: $CURRENT_BRANCH"

echo "Agregando solo cambios en la carpeta qgis/..."
git add qgis

echo "Escribe un mensaje corto sobre qué cambiaste:"
read COMMIT_MESSAGE

git commit -m "QGIS update: $COMMIT_MESSAGE"

echo "Subiendo cambios a la rama $CURRENT_BRANCH ..."
git push origin "$CURRENT_BRANCH"

echo "==== Cambios del proyecto QGIS subidos correctamente ===="
