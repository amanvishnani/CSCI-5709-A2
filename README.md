<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 
<!--- You may delete any comments in this sample README.md file. If needing to use as a .txt file then simply delete all comments, edit as needed, and save as a README.txt file --->

# Assignment 2 (Greenkart Project) [Group 22]

Greenkart is an e-commerce platform for Gardening Enthusiasts. The goal of this website is to provide this niche market a platform to buy and sell gardening products such as seeds, saplings, tools (like shovel), etc.

## Features Implimented
1. Landing page with a section that displays offers on products (Landing page requirement).
2. Quick checkout (fast checkout, does not need perform 'add to cart' process) from offer section on landing page.
3. Payment handeling using Credit Card feature. Validation on Card Number, CVV, and Expiry Date.
4. User Management section. Contains Past Order details, Manage Address (Add, Edit, Delete) and logout button (User section requirement).

* *Date Created*: 14 JUN 2020
* *Last Modification Date*: 14 JUN 2020

## Suggested Flow for testing

1. Open Landing page
2. Click "Quick Checkout" on product card
3. Update number of items in "Quick Checkout" page, Select Suitable address, proceed to checkout
4. Confirm Order Summary, add credit card details, and Click Pay Now.
5. Go to User's section from top right corner. Explore Past Order, Manage Address and Logout sub sections.

## Authors

* [Aman Vishnani](aman.vishnani@dal.ca) - *(Front End React Dev)*

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start` or `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To have a local copy of this assignment up and running on your local machine, you will first need to install Node.js 12.x and NPM packages for the project.

See the following section for instructions on how to install packages.

### Installing

1. Install Node.js 
2. Install NPM packages using following command

```
npm install

```
or
```
yarn 

```

### Color Schemes

1. Primary - Green (#00CC66) - Representing Green in Greenkart
2. Secondary - Orange (#F75C03) - Complimenting color


## Deployment

Following steps to deploy has been adapted from [Heroku's official blog post](https://blog.heroku.com/deploying-react-with-zero-configuration) for deployment.
1. Clone repository
2. Install heroku cli and login into your account
3. run `heroku create -b https://github.com/mars/create-react-app-buildpack.git` in project root folder.
4. run `git push heroku master`
5. run `heroku open`


## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [React Material UI](http://material-ui.com/) - The web framework used for styles and components
* [Npm JS](https://www.npmjs.com/) - Package manager bundled with Node.js
* [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) - Routing library for react
* [create-react-app-buildpack](https://github.com/mars/create-react-app-buildpack#usage) - buildpack to deploy react to a heroku app.

## Sources Used

The code uses components from Material UI and router from `react-router-dom` hence is dependent on documentation of those library.
Following code snippets were copied from **official** documentation to reflect consistant design patterns.

### DISCLAIMER
**Note**: Author attribution is not possible if a code snippet was used form an official documentation of any library. Docs are compiled and witten by many authors contributing using a chain of git commits. Hence, I'll be refering to documentation as the author(s) of the code.

### App.js

*Lines 41 - 59*

```
<Router>
    <OrderContext.Provider value={orderState}>
    <Header />
    <Switch>
        <Router path="/user">
        <UserProfile />
        </Router>
        <Router path="/payment">
        <Payment />
        </Router>
        <Route path="/quick-buy/:productId">
        <OrderSummary />
        </Route>
        <Route path="/">
        <Landing />
        </Route>
    </Switch>
    </OrderContext.Provider>
</Router>

```

The code above was created by adapting the code in [React Router official Docs](https://reacttraining.com/react-router/web/guides/quick-start) as shown below: 

```
<Router>
    <div>
    <nav>
        <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/users">Users</Link>
        </li>
        </ul>
    </nav>

    {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
    <Switch>
        <Route path="/about">
        <About />
        </Route>
        <Route path="/users">
        <Users />
        </Route>
        <Route path="/">
        <Home />
        </Route>
    </Switch>
    </div>
</Router>
```

- The code in [React Router official Docs](https://reacttraining.com/react-router/web/guides/quick-start) was implemented by Open Source Contributers
- [React Router official Docs](https://reacttraining.com/react-router/web/guides/quick-start)'s Code was used because knowledge of syntax for library usage is required in order to use it.
- [React Router official Docs](https://reacttraining.com/react-router/web/guides/quick-start)'s Code was modified by changing the Router Path and components within the router tag.
