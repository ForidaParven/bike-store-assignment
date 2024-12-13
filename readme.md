The Bike Store API is a robust backend tool for managing a bike business. It offers seamless CRUD operations for orders and goods (bikes) while guaranteeing data accuracy, inventory control, and precise revenue computations. The API is built with **Express**, **TypeScript**, and **MongoDB** to ensure scalability and performance.  

## Features  
Product management includes adding, updating, deleting, and retrieving motorcycles with comprehensive data.  
   - The ability to search for motorcycles by brand, name, or category.  
2. Order Management: - Place orders while keeping track of inventory.  
   Avoid placing orders if there is not enough stock.  
3. income Insights: Utilizing MongoDB aggregate, determine the entire income from every order.  
Error handling includes detailed error messages for instances involving validation, missing data, and not-found. 



### Product Operations  
- Create Bike: `POST /api/products`  
- Get All Bikes: `GET /api/products?searchTerm=category`  
- Get Specific Bike: `GET /api/products/:productId`  
- Update Bike: `PUT /api/products/:productId`  
- Delete Bike: `DELETE /api/products/:productId`  

### Order Operations  
- Place Order: `POST /api/orders`  
- Calculate Revenue: `GET /api/orders/revenue`  

## Setup Instructions  

1. Clone the repository:  
   ```bash  
   git clone <https://github.com/ForidaParven/bike-store-assignment.git>  
   ```  
2. Install dependencies:  
   ```bash  
   npm install  
   ```  
3. Configure `.env` with the following:  
   - DATABASE_URL: MongoDB connection string.  
   - PORT: Server port.  
4. Start the application:  
   ```bash  
   npm run start  
   ```  

## Live Demo and Video Explanation  
VERCEL: bike-store-assignment.vercel.app
Demo Video: https://drive.google.com/file/d/1xXuFXBBZjbHZDvdpSyFB0p-3qSms5jzF/view?usp=sharing
GitHub Repository Link : https://github.com/ForidaParven/bike-store-assignment 

## Technologies Used  
- **Node.js**, **Express**, **TypeScript**  
- **MongoDB** with **Mongoose**  
- **RESTful API Design**  
