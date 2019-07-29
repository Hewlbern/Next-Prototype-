import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Layout from '../components/Layout';
import Dashboard from "./Dashboard"



export default function Index() {
  return (
<Layout>
  <Dashboard/>
</Layout>
  );
}
