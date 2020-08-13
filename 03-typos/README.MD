# Tipado en TypeScript

1.- **Explícito** Podemos definir variables de manera explicita
Definiendo el tipo de dato

``` ts
// Explicit
variableName : typo
```

2.- **Inferido / Implícito** TypeScript tiene la habilidad de "deducir" el tipo de dato en función del valor

``` ts
// Implicit
variableName = value
```

### Tipos primitivos

#### Number
1.- Valores numéricos
2.- Valores hexadecimales
3.- Valore binarios
4.- Valores octales

```ts
let phone: number;
phone = 1

// Error
phone = 'string';
```

#### Boolean

```ts
let bool: boolean = true;
```

#### String

```ts
let chain: string = "Hola mundo"
```

### Any
Utilizado para capturar valores dinámicos o en tiempos de ejecución
``` ts
const objUnknow: any = { var };
```

### Void
Es lo opuesto a any: Representa la ausencia de tipo de dato
Comunmente se usa para el tipo de retorno en funciones
``` ts
function anyFunction(obj: any): void {
    // Code
}
```

### Never
Representa el tipo de valor que **nunca** ocurre
- Funciones que lanzan excepciones
- Funciones que nunca regresan ningún valor

``` ts
function handleError(limit: number): never {
    while(true) {
        // Code
    }
}
```