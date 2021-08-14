import React from 'react';
import { Button } from '@material-ui/core';

export default function Navigation() {
  return (
    <>
      <Button
        // component={homepage ? AnchorLink : Link}
        offset="64"
        href="#aboutme"
        to="/#aboutme"
        color="inherit"
      >
        About me
      </Button>
      <Button
        // component={homepage ? AnchorLink : Link}
        offset="64"
        href="#portfolio"
        to="/#portfolio"
        color="inherit"
      >
        Portfolio
      </Button>
      <Button color="inherit">Impossible List</Button>
    </>
  );
}
