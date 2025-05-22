import React from 'react';
import { observer } from 'mobx-react-lite';
import Header from '@/components/Header';
import AppRouter from '@/routes/AppRouter';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main className="container mx-auto p-4">
        <AppRouter />
      </main>
    </div>
  );
};

export default observer(App);