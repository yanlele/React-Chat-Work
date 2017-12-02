import React from 'react'

class App extends React.Component {
    render() {
        const boss='李云龙';
        return (
            <div>
                <h2>独立团, 团长{boss}</h2>
                <OneCampsite></OneCampsite>
            </div>
        )
    }
}

class OneCampsite extends React.Component{
    render(){
        const boss='张大彪';
        return(
            <h2>一营营长，{boss}</h2>
        )
    }
}

export  default App;