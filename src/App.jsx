import React from 'react';
import Name from './Name';
import ProductList from './ProductList';
import Skills from './Skills';
import Counter from './Counter';

const App = () => {
    return(<div>
        <Counter/>
        <ProductList/>
        <Skills/>
        <Name value="Rizwan" age="20"/>
        <Name value="Samad" age="20"/>


        {/* <h1>CGC React</h1> */}
        {/* <img src="https://t.ly/0EkIO" width="400" height="250" alt="reactImg" /> */}
        </div>
    );
};

export default App;