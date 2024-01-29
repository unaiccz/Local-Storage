# Aplicación CRUD en React

Esta aplicación permite crear y eliminar datos de productos. Los datos se almacenan en el `localStorage` del navegador.

## Código

El código principal de la aplicación se encuentra en el archivo `App.js`. Aquí se definen las funciones para manejar los datos y se renderiza la interfaz de usuario.

### Funciones

- `createData`: Esta función crea un nuevo producto con los datos ingresados en los campos de entrada. Los datos se guardan en el `localStorage` y se actualiza el estado de la aplicación.
- `deleteData`: Esta función elimina un producto existente. Recibe como parámetro el índice del producto a eliminar.
- `useEffect`: Este hook de React se utiliza para leer los datos del `localStorage` cuando se monta el componente.

### Interfaz de usuario

La interfaz de usuario consta de dos campos de entrada para el nombre y el precio del producto, y un botón para crear un nuevo producto. Además, se muestra una lista de todos los productos existentes, cada uno con su nombre, precio y un botón para eliminar.

## Uso

Para usar la aplicación, simplemente ingresa el nombre y el precio de un producto en los campos correspondientes y haz clic en el botón "Crear". Para eliminar un producto, haz clic en el botón "Borrar" del producto correspondiente.