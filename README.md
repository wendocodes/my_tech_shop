# MY_TECH_SHOP
MY_TECH_SHOP is a simple e-commerce application for browsing, selecting, and managing electronics products. Users can view available products, add them to a shopping cart, and review or remove items from their cart. The app uses JavaScript, jQuery, AJAX and localStorage to provide a dynamic and interactive shopping experience.

## Features
1. Browse Products: Displays a list of electronics products fetched from a JSON file.
2. Dynamic Cart Management: Users can add items to the cart, view cart contents, and remove items.
3. Scrollable Cart: Ensures all products in the cart are visible with a scrollable container.
4. Local Storage: Saves the cart state across browser sessions.
5. Responsive UI: Button styles and interactive elements improve usability.

## Project Structure
MY_TECH_SHOP/
│
├── index.html          # Main HTML file
├── js/
│   ├── electronics.js  # Handles product display and cart functionality
│   ├── styles.js       # jQuery script for UI styling and interactions
├── css/
│   └── styles.css      # Stylesheet for the project (optional, not provided here)
├── products.json       # Sample JSON file containing product data (not included in this README)
└── README.md           # Project documentation

## How to Run the Project
1. Clone the project to your local machine:
    ``bash
    git clone https://github.com/wendocodes/my_tech_shop.git

2. Navigate to the Project Directory
    ``bash
    cd MY_TECH_SHOP

3. Open the index.html file in your browser to start the application.

## Code Overview
1. electronics.js
* Fetches product data from products.json using an XMLHttpRequest.
* Dynamically displays products with details like name, description, price, and an image.
* Handles adding items to a cart and saving the cart data to localStorage.
**Defines functions for:**
* addToCart(product): Adds a product to the cart.
* showCart(): Displays cart contents in a scrollable container.
* removeFromCart(index): Removes an item from the cart.

2. styles.js (jQuery)
* Styles the "View Cart" button and manages hover effects.
* Toggles the visibility of the cart container when the "View Cart" button is clicked.
* Ensures the cart container is scrollable with a max-height and overflow-y: auto.

3. index.html
* Includes the structure of the web page with placeholders for products and the cart.
* Links JavaScript and jQuery files for functionality and interactions.

## Technologies Used
1. HTML5: Structure of the web application.
2. CSS3: Styling and layout (optional, based on styles.css).
3. JavaScript: Core functionality for product management and cart handling.
4. jQuery: Simplifies DOM manipulation and event handling.
5. AJAX: Fetches product data from products.json using an XMLHttpRequest.
5. Local Storage: Saves cart data persistently.

## Future Enhancements
* Improve the UI with additional styling.
* Add backend support for saving and retrieving cart data.

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as needed.

## Author
Joyce Wendo
For inquiries, please contact: wendojoyce.de@gmail.com