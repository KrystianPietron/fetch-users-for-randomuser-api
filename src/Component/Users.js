import React from 'react'
import Button from '../elements/Buttons';
import Paper from 'material-ui/Paper'


const style = {
    paper: {
        margin: 30,
        padding: 30
    },
    buttons: {
        margin: 15
    }
}

const API_URL = 'https://randomuser.me/api/?results='
class Users extends React.Component {

    state = {
        users: []
    }
    loadData = () => (
        fetch(`${API_URL}10`)
            .then(response => response.json())
            .then(data => this.setState({ users: data.results }))
    )
    render() {
        return (
            <Paper
                style={style.paper}
            >
                <h1>10 Emails from randomusers api for fetch </h1>
                <Button
                    style={style.buttons}
                    label='Download Users NOW'
                    onClick={this.loadData}
                />
                {this.state.users.map((element, index) =>
                    <div key={element.login.uuid}>
                        <div>
                            {index + 1}. <img src={element.picture.thumbnail} />
                        </div>
                        <div>
                            <div>
                                First Name: {element.name.first}
                            </div>
                            <div>
                                Last Name: {element.name.last}
                            </div>
                        </div>
                        <div>
                            Email : {element.email}
                        </div>
                        <hr />
                    </div>
                )}
            </Paper>
        )
    }
}

export default Users