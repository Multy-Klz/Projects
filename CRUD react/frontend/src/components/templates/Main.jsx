import './Main.css'
import React from 'react'
import Header from './Header'

export default props =>
    //React component to envolve more than one component on export 
    <React.Fragment>
         {/* Props passed dinamicly by the father  component on userCRUD */}
        <Header {...props} />
        <main className='content container-fluid'>
            <div className="p-3 mt-3">
                {props.children}
            </div>
    </main>
</React.Fragment>