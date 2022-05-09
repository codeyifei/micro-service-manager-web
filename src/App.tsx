import React from 'react';
import './App.css';
import Layout from "./layout/Layout";
import { EmptyPropTypes } from "./types";

export default class App extends React.Component<EmptyPropTypes> {
  render() {
    return (
      <Layout>Content</Layout>
    );
  }
}
