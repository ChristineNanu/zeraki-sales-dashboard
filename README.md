# Sales Dashboard

Welcome to the  Zeraki Sales Dashboard project!

This project aims to provide a comprehensive dashboard for managing sales data and analytics. Below you'll find instructions on how to set up and run the project locally.

## Table of Contents

1. [Introduction](#introduction)
2. [Setup Instructions](#setup-instructions)
   - [Backend Server](#backend-server)
   - [Frontend Development Server](#frontend-development-server)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [License](#license)

## Introduction

 Zeraki Sales Dashboard is a web application built with Angular, designed to visualize and manage sales data effectively. It provides various features such as analytics, data visualization, and reporting tools to help businesses make informed decisions.

## Setup Instructions

### Backend Server

To set up the backend server, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/ChristineNanu/zeraki-sales-dashboard.git
   ```

2. Navigate to the project directory:

   ```bash
   cd zeraki-sales-dashboard
   ```

3. Install json-server globally:

   ```bash
   npm install -g json-server
   ```

4. Start the server:

   ```bash
   json-server --watch api/db.json --port 3000
   ```

### Frontend Development Server

To set up the frontend development server, follow these steps:

1. Install Node.js and npm if not already installed. You can download and install them from [here](https://nodejs.org/).

2. Navigate to the project directory (if not already there).

3. Install project dependencies:

   ```bash
   npm install
   ```

4. Start the Angular development server:

   ```bash
   ng serve
   ```

   This command will compile the application and start a development server. It will also watch for any changes in the source files and automatically reload the application.

5. Open your web browser and navigate to [http://localhost:4200/](http://localhost:4200/) to view the application.

## Usage

Once the application is up and running, you can:

- Explore various features and functionalities provided by the Sales Dashboard.
- Interact with different components such as analytics, data visualization charts, and reporting tools.
- Manage sales data effectively and make informed decisions based on the insights provided by the dashboard.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request on the [GitHub repository](https://github.com/ChristineNanu/zeraki-sales-dashboard).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.