import React from 'react';
import Content from './components11/content/Index';
import { TodoProvider } from './components11/context/TodoContext';
import Header from './components11/Header/Index';
function App11() {
  return (
    <TodoProvider>
    <section className="todoapp">
        <Header/>
        <Content/>
    </section>
    </TodoProvider>
  )
}

export default App11
