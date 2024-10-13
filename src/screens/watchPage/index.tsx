import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Container } from "@mui/material";
import { CartItem } from '../../lib/types/search';
import WatchPage from './Watches';

interface ProductsPageProps {
  onAdd: (item: CartItem) => void;
}

export default function WatchPageMain(props: ProductsPageProps) {
  const { onAdd } = props;
  const products = useRouteMatch();

  console.log("products:", products);

  return (
    <div className={"watch-page"}>
      <Switch>
        <Route path={`${products.path}`}>
          <WatchPage onAdd={onAdd} />
        </Route>
      </Switch>
    </div>);
}