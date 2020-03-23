import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import MetaTags from 'react-meta-tags';

import { Switch, Route, MemoryRouter } from "react-router-dom";

import { MenuBar } from './Menubar';
import { Home } from './Home';
import Questionnaire from './views/questionnaire';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(1),
    },
    toolbar: theme.mixins.toolbar,
  }),
);

interface AppState {
  hasClickedOnFoo: boolean
}

export default function App() {
  const classes = useStyles();

  return <>
    {/* https://material-ui.com/getting-started/usage/#responsive-meta-tag */}
    <MetaTags>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </MetaTags>
    <MemoryRouter initialEntries={['/home']} initialIndex={0}>
      <div className={classes.root}>
        <CssBaseline />
        <MenuBar />
        <main className={classes.content}>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/questionaire">
              <Questionnaire onClick={() => console.log('hello')} />
            </Route>
          </Switch>
        </main>
      </div>
    </MemoryRouter>
  </>
}