import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Container } from "@mui/material";
import ChosenProduct from './ChosenProduct';
import { CartItem } from '../../lib/types/search';
import JewelryPage from './Jewelry';

interface ProductsPageProps {
  onAdd: (item: CartItem) => void;
}

export default function JewelryPageMain(props: ProductsPageProps) {
  const { onAdd } = props;
  const products = useRouteMatch();

  console.log("products:", products);

  return (
    <div className={"watch-page"}>
      <Switch>
        <Route path={`${products.path}/:productId`}>
          <ChosenProduct onAdd={onAdd} />
        </Route>
        <Route path={`${products.path}`}>
          <JewelryPage onAdd={onAdd} />
        </Route>
      </Switch>
    </div>);
}