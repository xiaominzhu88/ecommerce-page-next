<!-- Create a readme with:
title
description
all technologies used
1 or 2 screenshots
setup instructions
deployment instructions -->

# FASHION & PET STORE online_shop

## Description

This project is an online shop of interior decoration items created with Next.js.

The shop features following pages and functionality:

- a products page which contains Fashion and Pet-Store items
- a page for each single product on which user is able to input quantity, the total price will be calculated
- a shopping cart page containing a list where products appear when you click on the "add Items" button on the single product page, which also shows the total price of all products
- after click on "to cartpage", user will be linked to a cart page which shows the total and shipping / payment information, on this page, user is able to update items quantity, or remove each item, total price and items cart will be automatically updated.
- after click on "checkout" button, user will be linked to a thank you page.
- the header shows a shopping cart with the current number of items on all pages.

## Technologies used

This project is a Next.js app which makes use of PostgresQL database.

Migrations are set up with Ley.

- [ ] [`ley`](https://github.com/lukeed/ley)

- [ ] [`postgres`](https://www.npmjs.com/package/postgres)

It uses cookies to keep track of items in cart and their amount.

Some pages and components are written using Typescript.

The project contains testing with Cypress. Deployment was carried out with Heroku.

## Setup instructions

### Database Setup

Copy the .env.example file to .env and add the database connection information.

You'll also need PostgreSQL for this.

PostgreSQL Installation instructions

Follow the instructions from the PostgreSQL step on https://www.postgresql.org/docs/10/runtime.html

- [ ] Run the following queries inside of psql to set up the database and the user:

- [ ] CREATE DATABASE nextjs_ecommerce_store;

- [ ] CREATE USER nextjs_ecommerce_score WITH ENCRYPTED PASSWORD 'nextjs_ecommerce_store';

- [ ] GRANT ALL PRIVILEGES ON DATABASE nextjs_ecommerce_store TO nextjs_ecommerce_score;

- [ ] Then, to connect to the database using this new user, quit psql and reconnect:

\q

psql -U nextjs_ecommerce_score nextjs_ecommerce_store

You can run the migrations with the following command:
`yarn migrate up`

To drop the last migration run the following in your terminal:
`yarn migrate down`

### Deployment instructions for Heroku

- Sign up for Heroku: https://signup.heroku.com/
- Create a new App
- Choose a name and select your region
- Click on the button in the middle called "Connect to GitHub"
- Search for your repository in the search box at the bottom of the page and click on the "Connect" button
- Click on the button for "Enable Automatic Deploys"
- Go back to the Overview tab and click on "Configure Add-On"
- Search for "Postgres" and select "Heroku Postgres" from the results

About Page Screenshot:

<img src="/public/screenshot.png" width="500" height="350">

Cart Page Screenshot:

<img src="/public/cart.png" width="450" height="250">

Fashion-Shop Page Screenshot:

<img src="/public/shopScreenshot.png" width="450" height="250">.


