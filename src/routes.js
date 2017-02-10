import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Import all route components
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Routes declaration
const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="*" component={NotFound}></Route>
  </Route>
);

export default routes;
