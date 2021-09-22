# Task Board

[Live Demo](https://leocristofani-task-board.netlify.app/)

## Components

## Providers

There are 2 types of providers: **State** and **Service** providers. Both make use of React context api and React hooks.

### State Providers

Provides state via React context to a tree of React components.

- tasks-state

  - tasks-state-types
  - tasks-state-provider
  - use-tasks-state.ts
  - use-tasks-state.spec.ts

  - tasks-state-reducer
  - tasks-state-actions
  - tasks-state-selectors

### Service Providers

Provides a service via React context to a tree of React components.

- config-service

  - config-service-types
  - config-service-provider
  - use-config-service

- url-service

  - url-service-types
  - url-service-provider
  - use-url-service
