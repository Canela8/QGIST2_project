# QGIST2 Project – Publicación Web Automatizada con QGIS

## 📌 Descripción del Proyecto

Este repositorio contiene la versión publicada del proyecto **QGIST2**, una visualización web generada desde **QGIS** mediante el complemento **qgis2web**, que permite exportar mapas interactivos a formatos HTML, Leaflet o OpenLayers.

El objetivo de este repositorio es servir como un espacio donde se aloja la web generada a partir del proyecto QGIS, permitiendo su despliegue automático a través de **GitHub Pages**.

---

## 🗺️ ¿Qué hace este proyecto?

* Exporta un mapa interactivo desde QGIS.
* Publica automáticamente la web dentro de la carpeta **docs/**.
* Utiliza GitHub Pages para mostrar el mapa en un dominio público.
* Permite actualizar la web simplemente exportando nuevamente desde QGIS y ejecutando un script automatizado.

---

## 📂 Estructura del Repositorio

```
QGIST2_project/
│
├── docs/               # Carpeta que GitHub Pages publica
│   ├── index.html
│   ├── images/
│   ├── layers/
│   ├── styles/
│   ├── resources/
│   └── webfonts/
│
├── update_web.sh       # Script para automatizar actualizaciones
├── qgis/               # Proyecto QGIS (QGZ)
└── README.md
```

---

## ⚙️ Automatización con `update_web.sh`

Este proyecto utiliza un script bash que:

1. Detecta la carpeta más reciente exportada por qgis2web.
2. Limpia la carpeta **docs/**.
3. Copia los nuevos archivos exportados.
4. Los sube automáticamente al repositorio con commit y push.

### 📜 Ejecución del script

Desde Git Bash:

```
./update_web.sh
```

> Asegúrate de haber exportado la web desde QGIS antes de ejecutar el script.

---

## 🌐 Publicación con GitHub Pages

GitHub Pages está configurado para mostrar automáticamente el contenido de **docs/**.

### 🔗 Para ver la web

Solo abre tu URL de GitHub Pages:

```
https://TU_USUARIO.github.io/TU_REPOSITORIO/
```

(Sustituir TU_USUARIO y TU_REPOSITORIO por los nombres reales.)

---

## 🔄 Flujo recomendado de trabajo

1. Abre el proyecto QGIS (*.qgz*).
2. Realiza cambios en el mapa.
3. Exporta la web usando **qgis2web**.
4. Ejecuta en Git Bash:

   ```
   ./update_web.sh
   ```
5. Espera a que GitHub Pages actualice la web (30–60 segundos).

---

## 📌 Requisitos

* QGIS + qgis2web.
* Git instalado en tu sistema.
* Git Bash (si estás en Windows).
* Repositorio configurado con GitHub Pages en la carpeta **docs/**.

---

## 🧑‍💻 Autor

Proyecto desarrollado y administrado por Canela.

