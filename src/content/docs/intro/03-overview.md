---
title: High-level Overview and Project Structure
---

This online multiplayer project was built using Django Channels for real-time communication and Zustand for client-side state management as the core technologies.


<hr class="dashed">


## Backend

Python was chosen for the backend due to my familiarity with the language and prior experience building similar projects.

### API Framework Decision

I considered both FastAPI and Django Rest Framework (DRF) for this project.

**FastAPI Benefits:**
- Asynchronous code execution
- Built-in Pydantic support for data conversion, validation, and automatic documentation
- OpenAPI and Swagger integration

**Why I Chose Django-Ninja:**
Despite FastAPI's advantages, I ultimately selected Django-Ninja because it combines FastAPI's benefits while being built on Django's foundation. This decision provided:

- Access to Django Channels for WebSocket functionality
- Django's CLI tools (`startproject`, `startapp`) to reduce boilerplate code
- Built-in serialization capabilities
- Better project organization through Django's MVT pattern
- Access to Django's extensive ecosystem and community libraries

Django-Ninja provides a more FastAPI-like development experience with automatic validation, better type hints, and cleaner syntax compared to traditional DRF.

**Other frameworks considered:** Ruby on Rails, Flask, and LiteStar

### Game Logic Libraries
- [httpx](https://github.com/encode/httpx) - HTTP client
- [jsonpickle](https://github.com/jsonpickle/jsonpickle) - JSON serialization

### Backend Libraries
- [Django-Ninja](https://github.com/vitalik/django-ninja) - API framework
- [Django Channels](https://github.com/django/channels) - WebSocket support
- [Channels-redis (Daphne)](https://github.com/django/channels_redis) - Redis channel layer
- [psycopg2-binary](https://github.com/psycopg/psycopg2) - PostgreSQL adapter
- [django-cors-headers](https://github.com/adamchainz/django-cors-headers) - CORS handling
- [(Custom) Knox Token Authentication](https://github.com/jwc20/knoxtokens) - Authentication


<hr class="dashed">

## Frontend

React.js was selected for the frontend due to my prior experience with the library and its extensive ecosystem.

**Alternative frameworks considered:**
- HTMX with Django templates
- Solid.js (for performance benefits)
- Vanilla JavaScript with Django/Jinja2 templates

React was chosen because of its mature ecosystem, extensive library support, and industry-standard status.

### Frontend Libraries
- [zustand](https://github.com/pmndrs/zustand) - State management
- [openapi-ts](https://github.com/hey-api/openapi-ts) - TypeScript API client generation
- [react-router](https://github.com/remix-run/react-router) - Client-side routing
- [react-use-websocket](https://github.com/robtaussig/react-use-websocket) - WebSocket integration


<hr class="dashed">


## Deployment

The [demo application](https://bnc-client-psi.vercel.app/) is deployed using:

- **Frontend:** Vercel
- **Backend:** Render
- **Database:** Supabase (PostgreSQL)
- **Cache/Sessions:** Redis Cloud




<style>
    hr {
        margin-top: 50px;
    }

    hr.dashed {
        border-top: 3px dashed #bbb;
    }
</style>