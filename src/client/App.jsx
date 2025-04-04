import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Navigation from './components/common/Navigation';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import ToolDetails from './pages/ToolDetails';
import CreateTool from './pages/CreateTool';
import Documentation from './pages/Documentation';

const App = () => {
    return (
        <Router>
            <Header />
            <Navigation />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/tools/:id" component={ToolDetails} />
                <Route path="/create-tool" component={CreateTool} />
                <Route path="/documentation" component={Documentation} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;