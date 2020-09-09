## Interfaces

Forma de definir un "contrato", nos permiten extenderlas
Es posible dejarla como solo lectura o de tipo opcional

``` ts
    interface interfaz {
        nombre: tipo,
        otro: tipo,
        optiona?: tipo,
        readonly lectura: tipo
    };
```