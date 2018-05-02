/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  ScrollView,
  ViewPagerAndroid,
  SectionList, 
  ActivityIndicator,
  FlatList
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',  
});

class Description extends Component{
  render(){
    return(
      <Text style={styles.instructions}
       >
        This is a {this.props.appType} app!
      </Text>
    );
  }

}

class Blink extends Component{
  constructor(props)
  {
    super(props);
    this.state = {isShowingText: true};
    setInterval(()=>{
      this.setState(previousState => {
        return {isShowingText: !previousState.isShowingText} 
      });
    },1000);
  }
  
  render(){
    let display = this.state.isShowingText ? this.props.text : "";
    return(
      <Text>{display}</Text>
    );
  }

}

class Translater extends Component{
  constructor(props){
    super(props);
    this.state = {text: ' '};
  }
  getText(){
    return(
      this.state      
    );
  }
  
  render(){
    return(
        <View >
        <TextInput
          style={{height: 40, minWidth: 150, alignItems: 'center'}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text : text})}
        />
        <Button 
          title = 'Translate!'
          onPress = {() => {Alert.alert(this.state.text)}}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && this.props.lang).join(' ')}
        </Text>
        </View>
    );

  }
}

class MovieList extends Component{

  constructor(props){
      super(props);
      this.state ={ isLoading: true}
    }
  
    componentDidMount(){
      return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
  
          this.setState({
            isLoading: false,
            dataSource: responseJson.movies,
          }, function(){
  
          });
  
        })
        .catch((error) =>{
          console.error(error);
        });
    }
    render(){
      if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        )
      }
      return(
        <View style={{flex: 1, paddingTop:20}}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
            keyExtractor={(item, index) => index}
          />
        </View>
      );
    }
  }

export default class App extends Component{
  render() {  
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <ViewPagerAndroid initialPage = {0} style = {styles.container}>
        <View key = "1">
          <ScrollView pagingEnabled = {true} >
          <View style={styles.container}>
          <Translater lang = '🐉' />
          <Image source={pic} style={{width: 193, height: 110}}></Image> 
          <Text style={styles.welcome}>
            Welcome to Karthik's App!
          </Text>
          <Text style={styles.instructions}>
            Currently editing App.js
          </Text>
          <Text style={styles.instructions}>
          </Text>
          <Description appType = "shit"/>
          <Description appType = "sleek"/>

          <Blink text = "Flashy app :)"/>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
          <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />

          <Text style={styles.instructions}>
            {instructions}
          </Text>
          </View>
          <View style={styles.container}>
          <Translater lang = '🐉' />
          <Image source={pic} style={{width: 193, height: 110}}></Image> 
          <Text style={styles.welcome}>
            Welcome to Karthik's App!
          </Text>
          <Text style={styles.instructions}>
            Currently editing App.js
          </Text>
          <Text style={styles.instructions}>
          </Text>
          <Description appType = "shit"/>
          <Description appType = "sleek"/>
          <Blink text = "Flashy app :)"/>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
          <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
          <Text style={styles.instructions}>
            {instructions}
          </Text>
          </View>
          <View style={styles.container}>
          <Translater lang = '🐉' />
          <Image source={pic} style={{width: 193, height: 110}}></Image> 
          <Text style={styles.welcome}>
            Welcome to Karthik's App!
          </Text>
          <Text style={styles.instructions}>
            Currently editing App.js
          </Text>
          <Text style={styles.instructions}>
          </Text>
          <Description appType = "shit"/>
          <Description appType = "sleek"/>

          <Blink text = "Flashy app :)"/>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
          <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />

          <Text style={styles.instructions}>
            {instructions}
          </Text>
          </View>
          </ScrollView>
        </View>
        <View key = "2" style = {styles.container}>
          <Translater lang = '🍕' />
          {/* <Blink text = "This is another flashy view"/> */}
          <View style={styles.container}>
            <SectionList style = {{flex:1, maxHeight: 1400}}
              sections={[
                {title: 'D names', data: ['Devin', 'Jacksdasfasfson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                {title: 'D names', data: ['Devin', 'Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                {title: 'D names', data: ['Devin', 'Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                {title: 'D names', data: ['Devin', 'Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                {title: 'J names', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
              ]}
              renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
              renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
              keyExtractor={(item, index) => index}
            />
          </View>
        </View>
        <View key = "3">
          <MovieList/>
        </View>
      </ViewPagerAndroid>
    );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
