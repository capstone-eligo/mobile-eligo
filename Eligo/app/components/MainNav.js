import React from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Actions, DefaultRenderer } from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import SideMenu from './SideMenu'


mapStateToProps = (state) => ({ count: state.countReducer.count });

mapDispatchToProps = (dispatch) => ({
    // addGroceryItem: (groceryItem) => {
    //     dispatch(addToGroceryList(groceryItem));
    // },
    // addTodoItem: (todoItem) => {
    //     dispatch(addToTodoList(todoItem));
    // },
});

class MainNav extends React.Component {

    render(){
        const state = this.props.navigationState;
        const children = state.children;
        return (
            <Drawer
                ref="navigation"
                open={state.open}
                onOpen={()=>Actions.refresh({key:state.key, open: true})}
                onClose={()=>Actions.refresh({key:state.key, open: false})}
                type="displace"
                content={<SideMenu />}
                tapToClose={true}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                negotiatePan={true}
                tweenHandler={(ratio) => ({
                 main: { opacity:Math.max(0.54,1-ratio) }
            })}>
                <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
            </Drawer>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNav);

const styles = {
    container: {
        marginTop: 80,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        maxHeight: 400,
        alignItems: 'center',
    },
    textInput: {
        // alignSelf: 'stretch'
    },
    button: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'black',
    },
    buttonText: {
        color: 'white',
    }
};
