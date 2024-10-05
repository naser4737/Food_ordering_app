# Q3_Food_ordering_page

Frontend (Food Ordering Page)
Build a Menu Page where users can:
View a list of available dishes with their prices, available quantity and categories (e.g., starters, main course, desserts).
Add dishes to the order.
Place an order with details (table number, contact number(optional),date,time).
If available quantities is zero we should not take that item in order
Show an Order History page where we can view the total orders.
Display list of orders based on date with order details

**#3.1 Backend (Ordering APIs)**
Implement APIs for managing food orders:
GET /menu: Fetch the list of available dishes.
GET /orders: Fetch the order history of a user.
Post : Post the taken order

**
#React Components:**
**App.js:** Main component controlling the UI and state of the application.
**Menu.js:** Displays the list of available food items.
**OrderForm.js:** Takes order details (table number, order items) and submits the order.
**OrderHistory.js:** Displays the order history with relevant details.
**MenuItem.js:** Displays individual menu items with an option to add them to the order.
**Styling:**
Custom CSS files are used to style the app components (e.g., App.css, MenuItem.css).
**Backend (Node.js + Express)**
Server: Handles order creation and storage of order data.
**Routes:**
**/orders (POST):** Handles the submission of new orders and stores them in the database.
**/orders/history:** (GET) Fetches the list of previous orders for display in the history.

Installation
Prerequisites
Node.js and npm installed on your machine.
A MongoDB database or any other database depending on your choice.
Steps to Run the Project Locally
Clone the Repository:
git clone https://github.com/your-username/your-project-name.git
Navigate to the project directory:

bash
Copy code
cd Food_Ordering_Page
Install Dependencies for the frontend and backend:

cd backend
npm install

To start the backend (run this in the backend directory):

npm run start
To start the frontend (run this in the frontend directory):


npm start
Open the Application: The app will be running on http://localhost:3000 by default.
