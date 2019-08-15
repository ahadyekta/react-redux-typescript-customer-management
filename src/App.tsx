import React from 'react';
import { Switch, Route } from 'react-router-dom';
import List from './components/pages/List/.';
import Form from './components/pages/Form/.';

const App: React.FC = () => {
  return (

    <Switch>
      <Route path={'/'} exact component={List} />
      <Route path={'/create'} exact component={Form} />
      <Route path={'/edit/:id'} exact component={Form} />
    </Switch>

  );
}

export default App;
