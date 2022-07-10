import { Fragment } from 'react';
import MainHeader from './main-header';
import MainFooter from './main-footer';

export default function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      <MainFooter />
    </Fragment>
  );
}
