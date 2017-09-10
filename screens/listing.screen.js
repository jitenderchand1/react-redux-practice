import React, { Component} from 'react';
import { View, Text, TouchableHighlight } from 'react-native';



class Listing extends Component{
  goToDetail = () => {
    const { updateDetail } = this.props;
    const { navigate } = this.props.navigation;
    updateDetail({name:'jitender',address:'delhi', company:'To The New'})
    navigate('Detail');
  }

  render(){
    return(
      <View style={{flex:1}}>
        {[{name:'jitender',date:'11/Sep/2017'},{name:'manoj',date:'11/Sep/2017'},{name:'mayank',date:'11/Sep/2017'},{name:'gaurav',date:'11/Sep/2017'},{name:'amit',date:'11/Sep/2017'}].map((item, index)=>{
          return(
            <TouchableHighlight underlayColor={'#efefef'} key={index} onPress={this.goToDetail} style={{padding:10}}>
              <View style={{borderBottomWidth:1}}>
                <Text>{item.name}</Text>
                <Text>{item.date}</Text>
              </View>
            </TouchableHighlight>
          )
        })
        }
      </View>
    )
  }
}


export default Listing;
