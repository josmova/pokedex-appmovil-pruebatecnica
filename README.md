# PokedexApp

## Descripción

PokedexApp es una aplicación móvil construida con React Native que permite a los usuarios explorar una lista de Pokémon y ver detalles específicos de cada uno. La aplicación sigue una arquitectura basada en Domain-Driven Design (DDD) y Atomic Design para una mejor organización y mantenibilidad del código.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:
## Estructura del Proyecto

- **src**
  - **application**
    - **useCases**
      - **pokemons**
        - GetPokemonDetails.ts
        - GetPokemonList.ts
  - **assets**
  - **config**
    - **helpers**
      - formatters.ts
      - get-color.ts
      - validators.ts
    - **theme**
      - colors.ts
      - spacing.ts
      - theme.ts
      - typography.ts
  - **domain**
    - **entities**
      - Pokemon.ts
    - **repositories**
    - **services**
      - PokemonService.ts
    - **valueObjects**
  - **infrastructure**
    - **adapters**
      - PokemonApiAdapter.ts
    - **api**
      - PokemonApi.ts
    - **interfaces**
    - **mappers**
      - PokemonMapper.ts
    - **repositories**
      - PokemonRepository.ts
  - **presentation**
    - **components**
      - **atoms**
        - IconButton.tsx
        - Loading.tsx
        - PokemonCard.tsx
        - SearchBar.tsx
        - StatBar.tsx
      - **molecules**
        - CustomHeader.tsx
        - SortMenu.tsx
      - **organisms**
        - PokemonList.tsx
      - **screens**
        - **home**
          - HomeScreen.tsx
        - **pokemon**
          - PokemonDetailsScreen.tsx
      - **templates**
    - **hooks**
      - useDebouncedValue.ts
    - **navigation**
      - PokedexNavigator.tsx
      - PokedexNavigatorStyles.ts
    - **store**
      - **slices**
        - searchSlice.ts
      - thunks/
      - index.ts
      - selectors.ts
    - **styles**
      - **atoms**
        - IconButtonStyles.ts
        - LoadingStyles.ts
        - PokemonCardStyles.ts
        - SearchBarStyles.ts
        - StatBarStyles.ts
      - **molecules**
        - CustomHeaderStyles.ts
        - SortMenuStyles.ts
      - **organisms**
        - PokemonListStyles.ts
      - **screens**
        - **home**
          - HomeScreenStyles.ts
        - **pokemon**
          - PokemonDetailsScreenStyles.ts
        - search/
      - templates/
- .gitignore
- app.json
- App.tsx

## Tecnologías Utilizadas

- **React Native con Expo**: Configuración inicial del proyecto.
- **TypeScript**: Mejor tipificación y seguridad en el código.
- **Emotion Styled**: Estilización modular y reutilizable.
- **Redux Toolkit**: Gestión del estado global.
- **RTK Query**: Manejo de llamadas a API y datos asíncronos.
- **React Navigation**: Navegación entre pantallas.

## Patrones de Diseño y Principios

- **MVVM (Model-View-ViewModel)**: Separación de lógica de presentación y datos.
  - **Model**: Define interfaces y tipos de datos.
  - **View**: Componentes de UI para lista y detalles de Pokémon.
  - **ViewModel**: Lógica de negocio y llamadas a API, gestionando el estado con Redux Toolkit y RTK Query.
- **Observer**: Utilizar Redux para notificar cambios en el estado a los componentes suscritos.
- **Adapter**: Transformar datos para adaptarse a la interfaz de los componentes.
- **Facade**: Simplificar la interacción con la PokeApi proporcionando una interfaz simplificada.
- **Singleton**: Gestión de instancias únicas de servicios compartidos como el estado global.
- **Composición**: Creación de componentes modulares y reutilizables.
- **State**: Gestión del estado interno del objeto con Redux Toolkit.

## Metodologías y Principios de DDD

- **Entidades**: Objetos con identidad propia y un ciclo de vida independiente.
- **Value Objects**: Objetos que no tienen identidad y se usan para describir aspectos del dominio.
- **Agregados**: Grupos de entidades y objetos de valor tratados como una unidad para garantizar la consistencia.
- **Repositorios**: Abstracciones para acceder a las colecciones de objetos de dominio.
- **Servicios de Dominio**: Lógica que no pertenece a ninguna entidad o agregado específico.
- **Bounded Contexts**: Delimitan los diferentes dominios dentro de una aplicación grande para evitar ambigüedades.

## Cómo Empezar

1. Clona el repositorio.
2. Instala las dependencias con `npm install` o `yarn install`.
3. Inicia la aplicación con `npx expo start`.

## Contribuir

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y commitea (`git commit -am 'Agrega nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Contacto:
#### José Guadalupe Montiel Vargas

Página web: https://josemontiel.netlify.app/
HackerRank: https://www.hackerrank.com/profile/josemontielv_96


