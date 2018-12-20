import React from 'react'
import { connect } from 'react-redux'
import Button from '../elements/Buttons'
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

const Users = props => (
    <Paper
        style={style.paper}
    >
        <Button
            style={style.buttons}
            label={'Download Users'}
        />
    </Paper>
)

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Users)