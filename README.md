# Fashion Store

Barebones online store that offers the customer the ability to add items to a shopping cart, keeping track of the total balance so far and also applying discount vouchers.

Once the user adds/removes an item from the shoppingCart, the balance and number of items in the cart updates automatically.

The app warn the user when an item is out of stock and the item can no longer be added to the shopping cart.

There are three vouchers that can be applied, two of them with specific rules. The vouchers will not be applied if the rules are not met.

Also, only one voucher can be applied.

### Approach

For the sake of simplicity, the app works from the browser and it has a simple Node server used to serve the main page and load the JSON file containing the store date. Using a Node server has the added benefit that it makes the use of template engines possible and hence greatly reduces the amount of HTML coding I needed to do. In this case I used Jade to render the data from the JSON file.

The main functionality is built in JavaScript. The behavior of the ShoppingCart is tested using Jasmine. I used the Red-Green-Refactor cycle to develop it.

The layout is based on Bootstrap with modifications.

### Technologies

* Javascript
* Bootstrap
* JSON
* Node.js with Express
* Jade
* Jasmine

### Project structure

server.js is the starting point for the Node server and it loads the jade files from the views folder and renders them.

The spec folder contains the Jasmine test file for the Shopping Cart.

The public folder is where the ShoppingCart and Voucher models live, in addition to vendor libraries and the JSON file.

main.js is JQuery code that binds the Model with the View.

### Run

Make sure you have node installed. Run

    npm install

to install all dependencies and then simply run

    node server.js
in the root of the project directory.

Point your browser to http://localhost:3000

### Run tests
    open SpecRunner.html
