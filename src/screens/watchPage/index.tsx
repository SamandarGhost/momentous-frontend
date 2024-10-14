import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Container } from "@mui/material";
import { CartItem } from '../../lib/types/search';
import WatchPage from './Watches';
import WatchDetail from './WatchDetail';

interface WatchessPageProps {
  onAdd: (item: CartItem) => void;
}

export default function WatchPageMain(props: WatchessPageProps) {
  const { onAdd } = props;
  const watches = useRouteMatch();

  console.log("products:", watches);

  return (
    <div className={"watch-page"}>
      <Switch>
        <Route path={`${watches.path}/:id`}>
          <WatchDetail onAdd={onAdd} />
        </Route>
        <Route path={`${watches.path}`}>
          <WatchPage onAdd={onAdd} />
        </Route>
      </Switch>
    </div>);
}