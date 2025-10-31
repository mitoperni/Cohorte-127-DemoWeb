# Selector Aleatorio de Ejercicios - Master JavaScript

## Descripción

Aplicación web creada durante la **Clase 6 del Prework** del Bootcamp de Desarrolladores Full Stack - Cohorte 127.

Esta herramienta fue desarrollada de forma colaborativa para practicar y repasar los fundamentos de **HTML**, **CSS** y **JavaScript**, mientras resolvemos un problema real: seleccionar ejercicios aleatorios del Master de JavaScript sin repetición.

## ¿Para qué sirve?

El Master de JavaScript contiene **150 ejercicios** de práctica. Esta web permite:

- Generar números aleatorios del 1 al 150
- Seleccionar ejercicios sin repetir ninguno
- Llevar un registro visual de los ejercicios ya realizados
- Asegurar que todos los ejercicios sean practicados eventualmente

## Tecnologías utilizadas

- **HTML5**: Estructura semántica de la aplicación
- **CSS3**: Estilos y animaciones (hover, active states)
- **JavaScript (ES6+)**: Lógica de generación aleatoria y manipulación del DOM
- **Vite**: Herramienta de desarrollo y build

## Cómo usar (en Codespaces)

1. Abre este repositorio en GitHub Codespaces
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre la URL que aparece en la terminal (normalmente `http://localhost:5173`)
5. Haz clic en "Generar nuevo Número" para obtener ejercicios aleatorios
6. Completa el ejercicio correspondiente del Master de JavaScript
7. Repite hasta completar los 150 ejercicios

## Características técnicas

### Funcionalidades JavaScript
- Generación de números aleatorios sin repetición usando `Array.splice()`
- Manipulación del DOM con `getElementById` y `addEventListener`
- Uso de arrays y métodos como `Array.from()`
- Manejo de casos límite (cuando se acaban los ejercicios)

### Estilos CSS
- Layout con Flexbox
- Transiciones y transformaciones CSS
- Estados hover y active para mejor UX
- Diseño responsive con unidades relativas

## Estructura del proyecto

```
.
├── index.html          # Estructura HTML principal
├── src/
│   ├── main.js        # Lógica de la aplicación
│   └── style.css      # Estilos de la aplicación
├── package.json       # Dependencias y scripts
└── README.md          # Este archivo
```

## Repaso de conceptos utilizados

### HTML

#### Estructura del documento
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>web-exercises-master-js</title>
  </head>
  <body>
    <!-- Contenido -->
  </body>
</html>
```

**Conceptos:**
- `<!DOCTYPE html>`: Declara que el documento es HTML5
- `<meta charset="UTF-8">`: Define la codificación de caracteres
- `<meta name="viewport">`: Hace la web responsive en dispositivos móviles
- `<title>`: Título que aparece en la pestaña del navegador

#### Elementos utilizados
- `<div>`: Contenedor genérico para agrupar elementos
- `<h1>`: Encabezado principal (título de mayor importancia)
- `<ul>` y `<li>`: Lista no ordenada y sus elementos
- `<button>`: Botón interactivo
- `id`: Atributo para identificar elementos únicos en el DOM

### CSS

#### Selectores
```css
* { }              /* Selector universal - afecta a todos los elementos */
#container { }     /* Selector de ID - elemento específico */
#generator:hover { } /* Pseudo-clase - estado al pasar el ratón */
#generator:active { } /* Pseudo-clase - estado al hacer clic */
```

#### Box Model
```css
* {
  margin: 0;           /* Espacio exterior del elemento */
  padding: 0;          /* Espacio interior del elemento */
  box-sizing: border-box; /* Incluye padding y border en el ancho total */
}
```

#### Flexbox
```css
#container {
  display: flex;           /* Activa Flexbox */
  flex-direction: column;  /* Organiza elementos en columna */
  align-items: center;     /* Centra horizontalmente */
}
```

**Conceptos Flexbox:**
- `display: flex`: Convierte el contenedor en flex container
- `flex-direction: column`: Los elementos se apilan verticalmente
- `align-items: center`: Alinea los elementos en el eje transversal

#### Unidades CSS
```css
min-height: 100dvh;  /* 100% del viewport height dinámico */
padding: 15px 40px;  /* Unidades absolutas (píxeles) */
font-size: 1rem;     /* Unidad relativa al tamaño base de fuente */
```

#### Transiciones y transformaciones
```css
#generator {
  transition: all 0.3s ease; /* Anima todos los cambios en 0.3 segundos */
}

#generator:hover {
  transform: scale(125%);    /* Aumenta el tamaño al 125% */
}
```

**Conceptos:**
- `transition`: Define cómo se animan los cambios de propiedades
- `transform: scale()`: Cambia el tamaño del elemento
- `:hover`: Estado cuando el cursor está sobre el elemento
- `:active`: Estado cuando se está haciendo clic

### JavaScript

#### Selección de elementos del DOM
```javascript
const button = document.getElementById("generator");
const list = document.getElementById("list");
```

**Conceptos:**
- `document.getElementById()`: Selecciona un elemento por su ID
- `const`: Declara una constante (variable que no cambia de referencia)

#### Arrays y métodos
```javascript
// Crear un array con 150 números (del 1 al 150)
let numbers = Array.from({ length: 150 }, (_, i) => i + 1);
```

**Conceptos:**
- `Array.from()`: Crea un array a partir de un objeto iterable
- `{ length: 150 }`: Objeto con propiedad length
- `(_, i) => i + 1`: Arrow function que genera números del 1 al 150
  - `_`: Parámetro ignorado (valor del elemento)
  - `i`: Índice (0, 1, 2, ..., 149)
  - `i + 1`: Genera (1, 2, 3, ..., 150)

#### Funciones
```javascript
function generateRandomNumber() {
  return Math.floor(Math.random() * numbers.length);
}
```

**Conceptos:**
- `Math.random()`: Genera número aleatorio entre 0 y 1
- `Math.floor()`: Redondea hacia abajo
- `numbers.length`: Longitud actual del array
- `return`: Devuelve un valor desde la función

#### Manipulación de arrays
```javascript
const newNumber = numbers[newIndex];  // Acceso por índice
numbers.splice(newIndex, 1);          // Elimina 1 elemento en la posición newIndex
```

**Conceptos:**
- `array[index]`: Accede al elemento en la posición indicada
- `splice(inicio, cantidad)`: Modifica el array eliminando elementos
  - Primer parámetro: posición de inicio
  - Segundo parámetro: cantidad de elementos a eliminar

#### Manipulación del DOM
```javascript
list.innerHTML += `<li>${newNumber}</li>`;
container.innerHTML = "<h1>HAS ACABADO EL MASTER DE JAVASCRIPT</h1>";
```

**Conceptos:**
- `innerHTML`: Propiedad que obtiene o modifica el HTML interno
- `+=`: Añade contenido al HTML existente
- Template literals (`` ` ``): Permiten interpolar variables con `${}`

#### Condicionales
```javascript
if (newNumber === undefined) {
  // código si la condición es verdadera
}
```

**Conceptos:**
- `if`: Ejecuta código solo si la condición es verdadera
- `===`: Comparación estricta (valor y tipo)
- `undefined`: Valor cuando algo no existe o no está definido

#### Event Listeners
```javascript
button.addEventListener("click", generateNewNumber);
```

**Conceptos:**
- `addEventListener()`: Registra un evento en un elemento
- `"click"`: Tipo de evento (cuando se hace clic)
- `generateNewNumber`: Función que se ejecuta cuando ocurre el evento (callback)

#### Módulos ES6
```javascript
import "./style.css";
```

**Conceptos:**
- `import`: Importa código de otros archivos
- Permite modularizar el código y reutilizar componentes

### Flujo completo de la aplicación

1. **Inicialización**: Se crea un array con números del 1 al 150
2. **Usuario hace clic**: El event listener detecta el clic en el botón
3. **Generar aleatorio**: Se calcula un índice aleatorio del array
4. **Extraer número**: Se obtiene el número en esa posición
5. **Validar**: Se verifica si quedan números disponibles
6. **Eliminar**: Se elimina el número del array para no repetirlo
7. **Mostrar**: Se añade el número a la lista visual en el HTML
8. **Repetir**: El proceso continúa hasta que el array esté vacío

---

**Clase 6 - Prework del Bootcamp Full Stack Developer**
**Cohorte 127 - 4Geeks Academy**
