import React from 'react'

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <h2>Dashboard</h2>
                <Route path="/boss" component={Boss}/>
                <Route path="/boss" component={Genius}/>
                <h2>footer</h2>
            </div>
        )
    }
}

export default Dashboard;