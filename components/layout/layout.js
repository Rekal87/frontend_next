import { Fragment } from 'react';
import MainHeader from './main-header';
import MainFooter from './main-footer';
import Navbar from '../navbar';

export default function Layout(props) {
  return (
    <Fragment>
      <Navbar />
      <MainHeader />
      <main>{props.children}</main>
      <MainFooter />
    </Fragment>
  );
}
