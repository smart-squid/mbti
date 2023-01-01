---
name: "리오넬 메시"
nationality: "아르헨티나"
overall: "91"
position: "CAM"
imageLink: "/images/messi.jpg"
age: "35"
clubName: "파리 생제르맹"
value: "54000000"
height: "169"
weight: "67"
pace: "80"
shooting: "88"
passing: "83"
dribbling: "87"
defending: "39"
physicality: "78"
---

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

-   Marketing pages
-   Blog posts
-   E-commerce product listings
-   Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.
