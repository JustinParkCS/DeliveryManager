# DeliveryManager (Delivery Management)

DeliveryManager provides delivery drivers an interface to manage their deliveries. The undelivered orders are shown in list and map format. 

## Requirements

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [React.js](https://reactjs.org/)

## Local development

- Clone this repository
- See below for server and client

### Server

- Navigate to the repo: `cd delivery-manager-server`
- Install dependencies: `npm install`
- Run the development API server: `npm start`
- URL upon running: `http://localhost:5000`

### Client

- Navigate to the repo: `cd delivery-manager-client`
- Install dependencies: `npm install`
- Run the development server: `npm start`
- URL upon running: `http://localhost:3000`

## Architecture

### Server

The backend of this application uses Node.js to create 2 endpoint.

- [Node.js](https://nodejs.org/)

  ENDPOINTS

- (GET): `/deliveries` : returns all deliveries
- (PUT): `/deliveries:id` : Makes the adjustment using the request the body parameters of deliveries and/or notes. Then, returns the full json data

### Client

The frontend of this application uses React.js, Tailwind.css, and axios. React is used to create the interface, Tailwind is used to style is interface, and axios is used to make API calls.

- [React.js](https://reactjs.org/)
- [Tailwind.css](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
