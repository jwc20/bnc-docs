---
title: Project Timeline
---

Here is the development timeline for each part of the project: game library, backend API, and frontend client.


## Blockers

There were a few blockers during the project—some valuable learning experiences, others a total waste of time.

**Blockers / Time Wasters:**

- Token Authentication with Knox
  - Not a waste of time, since I’ll use it in future projects, but it did take a significant amount of effort to implement.

- `<Canvas>` Game Board
  - I originally tried building the game board with JavaScript Canvas for mouse interactivity. The code quickly became unnecessarily complex, so I switched to using a `<div>` with borders and border-radius instead.

- Zustand, TanStack React Query, and openapi-ts
  - Zustand is a great state management library, and pairing it with React Query is considered an industry standard. However, it was my first time using them, so I spent a lot of time learning. In the end, I decided not to use React Query in favor of simpler Fetch.
  - Like Knox, I don’t regret learning it, but it was time-consuming.

- openapi-ts and swagger-typescript-api
  - Both libraries generate TypeScript API clients, making client–server integration easier and safer. I spent a fair amount of time early on learning them.

Note:

- I considered these frontend libraries because my co-founder at my previous startup had used them successfully.

## Game Library timeline - bncpy

[Click to see page](https://jwc20.github.io/bnc-docs/bncpy_gantt_chart.html)


<!-- <div className="images">
    <img src="../../../../public/bncpy-tl.jpg" alt="bncpy" width="100%">
</div> -->

![alt text](../../../../public/bncpy-tl.jpg)

<hr class="dashed">

## Backend timeline - bncapi

[Click to see page](https://jwc20.github.io/bnc-docs/bncapi_gantt_chart.html)


<!-- <div className="images">    
    <img src="../../../../public/bncapi-tl.jpg" alt="bncapi" width="100%">
</div> -->

![alt text](../../../../public/bncapi-tl.jpg)

<hr class="dashed">


## Frontend timeline - bnc-client
[Click to see page](https://jwc20.github.io/bnc-docs/bnc_client_gantt_chart.html)


<!-- <div className="images">
    <img src="../../../../public/bnc-client-tl.jpg" alt="bnc-client" width="100%">
</div> -->

![alt text](../../../../public/bnc-client-tl.jpg)



### Note

- The dates are in **Korean (KST) Time zone**.
- The image/pages above was generated with `git log --pretty=format:"%h %ad %s" --date=short > formatted_history.txt` command and claude LLM.
- [Old Timeline Gantt Chart](https://docs.google.com/spreadsheets/d/1Y-7nZ5pecxm9lFmjrzJtx5n0Om_LI2fHTfN1ySws81Q/edit?usp=sharing)




<style>
    hr {
        margin-top: 50px;
    }

    hr.dashed {
        border-top: 3px dashed #bbb;
    }
    .images {
        margin-top: 50px;
        display: flex;
        gap: 5px;
        justify-content: center;
    }
</style>
