 8.7                     update_web.sh                      Modified
echo "Eliminando carpeta: $LATEST_EXPORT"
rmdir "$LATEST_EXPORT"

# Hacer commit y push automáticamente
echo "Subiendo cambios a GitHub..."
git add docs
git commit -m "Actualizo web desde QGIS automaticamente"
git push

echo "Proceso terminado exitosamente."


