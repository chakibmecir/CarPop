import React, { Component, useState } from 'react';
import {
  View, Animated, Text, TouchableOpacity, StyleSheet,Dimensions,Switch,
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      animation: new Animated.Value(0),
      StartDate: '12/08/2020',
      StartTime: '10 AM',
      EndDate: '12/08/2020',
      EndTime: '10 AM',
      isEnabled: false,
      isActive: false,
      grayed: false,
      grayedColor: false,
    };
  }

  showStartDatePicker = () => this.setState({ isStartDatePickerVisible: true });

  showStartTimePicker = () => this.setState({ isStartTimePickerVisible: true });

  hideStartDatePicker = () => this.setState({ isStartDatePickerVisible: false });

  hideStartTimePicker = () => this.setState({ isStartTimePickerVisible: false });


  showEndDatePicker = () => this.setState({ isEndDatePickerVisible: true });

  showEndTimePicker = () => this.setState({ isEndTimePickerVisible: true });

  hideEndDatePicker = () => this.setState({ isEndDatePickerVisible: false });

  hideEndTimePicker = () => this.setState({ isEndTimePickerVisible: false });


  handleStartDatePicked = (date) => {
    this.setState({
      StartDate: moment(date).format('Do MMMM YYYY'),
    });
    this.hideStartDatePicker();
  };
  handleStartTimePicked = (time) => {
    this.setState({
      StartTime: moment(time).format('HH:mm'),
    });
    this.hideStartTimePicker();
  };
  handleEndDatePicked = (date) => {
    this.setState({
      EndDate: moment(date).format('Do MMMM YYYY'),
    });
    this.hideEndDatePicker();
  };
  handleEndTimePicked = (time) => {
    this.setState({
      EndTime: moment(time).format('HH:mm'),
    });
    this.hideEndTimePicker();
  };


  toggleSwitch = () => this.setState({isEnabled: !this.state.isEnabled , isActive: !this.state.isActive, grayed: !this.state.grayed, grayedColor: !this.state.grayedColor});

  componentDidMount() {
      this.hideStartDatePicker();
  }

  componentDidMount() {
    this.hideStartTimePicker();
}
  componentDidMount() {
      this.hideEndDatePicker();
  }

  componentDidMount() {
    this.hideEndTimePicker();
}

  handleOpen = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  handleClose = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };






  renderTitleLine = () => (
    <View
      style={styles.titleLineContainer}
    >
      <View style={{ height: 40, width: 40 }} />
      <Text style={styles.MainTitleText}>
      Période d'utilisation
      </Text>
      <TouchableOpacity
        style={{
          height: 40,
          width: 40,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#E9E9E9',
          borderRadius: 20,
        }}
        onPress={this.handleClose}
      >
        
      </TouchableOpacity>
    </View>
  )

  renderCarInfo = () => {
    const { car } = this.props;
    return (
      <>
      <Text style={styles.titleText}>
      Veuillez choisir la période d'utilisation de ce véhicule
        </Text>
        <View style={styles.carImageContainer}>

        </View>
        <Text style={styles.CarTitleText}>
          Renault Clio 4
        </Text>
        <Text style={styles.carIdText}>
          AB-CD-EF-GH
        </Text>
      </>
    );
  }

  renderDatePick = () => {
    
    return (
      <>
      <View style={styles.DatepickContainer}>
        <Text style={styles.TimeLineText}>Début</Text>
        <View style={styles.SinglePick}>
          <TouchableOpacity style={ styles.DateContainer } onPress={this.showStartDatePicker}>
            <View style={styles.CalendarIcon} ></View>
            <Text style={styles.DateHourText} >{this.state.StartDate}</Text>
            <DateTimePickerModal
              datePickerModeAndroid={'spinner'}
              isVisible={this.state.isStartDatePickerVisible}
              onConfirm={this.handleStartDatePicked}
              onCancel={this.hideStartDatePicker}
              mode={'date'}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.HourContainer} onPress={this.showStartTimePicker}>
          <View style={styles.HourIcon}></View>
          <Text style={styles.DateHourText}>{this.state.StartTime}</Text>
          <DateTimePickerModal
              datePickerModeAndroid={'spinner'}
              isVisible={this.state.isStartTimePickerVisible}
              onConfirm={this.handleStartTimePicked}
              onCancel={this.hideStartTimePicker}
              locale="en_GB"
              is24Hour={true}
              mode={'time'}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.DatepickContainer}>
        <Text style={styles.TimeLineText}>Fin</Text>
        <View style={styles.SinglePick}>
        <TouchableOpacity style={ [styles.DateContainer, { backgroundColor: this.state.grayed === false ? 'transparent' : 'lightgray', } ]} onPress={this.showEndDatePicker} disabled={this.state.isActive}>
            <View style={styles.CalendarIcon}></View>
            <Text style={[styles.DateHourText, { color: this.state.grayedColor === false ? '#000' : 'gray', }]}>{this.state.EndDate}</Text>
            <DateTimePickerModal
              datePickerModeAndroid={'spinner'}
              isVisible={this.state.isEndDatePickerVisible}
              onConfirm={this.handleEndDatePicked}
              onCancel={this.hideEndDatePicker}
              mode={'date'}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.HourContainer, { backgroundColor: this.state.grayed === false ? 'transparent' : 'lightgray', }]} onPress={this.showEndTimePicker} disabled={this.state.isActive}>
          <View style={styles.HourIcon}></View>
          <Text style={[styles.DateHourText, { color: this.state.grayedColor === false ? '#000' : 'gray', }]}>{this.state.EndTime}</Text>
          <DateTimePickerModal
              datePickerModeAndroid={'spinner'}
              isVisible={this.state.isEndTimePickerVisible}
              onConfirm={this.handleEndTimePicked}
              onCancel={this.hideEndTimePicker}
              locale="en_GB"
              is24Hour={true}
              mode={'time'}
            />
          </TouchableOpacity>
        </View>
      </View>
      </>
      );
  }  

  renderSwitchEnd = () => {
    

    return (
      <>
        <View style={ styles.SwitchContainer }>

          <View>
            <Text>Utiliser le vehicule indéfiniment</Text>
            </View>

          <View>
          <Switch
        trackColor={{ false: "#767577", true: "lightgray" }}
        thumbColor={this.state.isEnabled ? "#000" : "#f4f3f4"}
        ios_backgroundColor="#gray"
        onValueChange={this.toggleSwitch}
        value={this.state.isEnabled}
      />
          </View>

        </View>
      </>
    );
  }

  renderDefineBtn = () => {
    

    return (
      <>
        <View style={styles.BtnContainer}>

          <Text style={styles.TextDefine}>Définir</Text>

        </View>
      </>
    );
  }

  render() {
    
    const screenHeight = Dimensions.get("window").height;

    const backdrop = {
      transform: [
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0, 0.01],
            outputRange: [screenHeight, 0],
            extrapolate: "clamp",
          }),
        },
      ],
      opacity: this.state.animation.interpolate({
        inputRange: [0.01, 0.5],
        outputRange: [0, 1],
        extrapolate: "clamp",
      }),
    };

    const slideUp = {
      transform: [
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0.01, 1],
            outputRange: [0, -1 * screenHeight],
            extrapolate: "clamp",
          }),
        },
      ],
    };

    
    

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleOpen}>
          <Text>Open</Text>
        </TouchableOpacity>

        <Animated.View style={[StyleSheet.absoluteFill, styles.cover, backdrop]}>
          <View style={[styles.sheet]}>
            <Animated.View style={[styles.popup, slideUp]}>
              {this.renderTitleLine()}
              {this.renderCarInfo()}
              {this.renderDatePick()}
              {this.renderSwitchEnd()}
              {this.renderDefineBtn()}
            </Animated.View>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  cover: {
    backgroundColor: "rgba(0,0,0,.5)",
  },

  sheet: {
    position: "absolute",
    top: Dimensions.get("window").height,
    left: 0,
    right: 0,
    height: "100%",
    justifyContent: "flex-end",
  },

  popup: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 80,
  },

  titleLineContainer: {
    height: 40,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginVertical: 5,
  },

  MainTitleText: {
    color: '#1B1B1B',
    fontSize: 16,
    fontWeight: '700',
    marginVertical: 5,
  },

  titleText: {
    color: '#1B1B1B',
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'center',
  },

  CarTitleText: {
    color: '#1B1B1B',
    fontSize: 16,
    marginVertical: 5,
    fontWeight: '700',
  },

  carIdText: {
    color: '#5A5A5A',
    fontSize: 15,
    marginTop: 8,
    marginBottom: 20,
  },

  carImage: {
    height: 80,
    width: 80,
    marginTop: 20,
  },

  carImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: 80,
    backgroundColor: 'gray',
    marginVertical: 15,
  },
  DatepickContainer: {
    width: '100%', 
    height: 100, 
    backgroundColor:'#FFF', 
    paddingHorizontal: 10,
  },
  TimeLineText: {
    fontSize: 16,
    color: 'gray',
    marginVertical: 8,
  },
  SinglePick:{
    width: '100%', 
    height: 50,
    borderColor: "gray", 
    borderWidth: 1, 
    borderRadius: 8, 
    flexDirection: 'row',
  },
  SwitchContainer:{
    flexDirection: 'row', 
    justifyContent: "space-between", 
    alignItems: 'center',
    width: '100%', 
    paddingHorizontal: 15,
  },
  BtnContainer:{
    justifyContent: "center", 
    alignItems: 'center', 
    width: '90%', 
    height: 60 , 
    backgroundColor: 'lightgray', 
    borderRadius: 8,
    marginVertical: 20,
  },
  TextDefine:{
    fontSize: 18, 
    color: 'gray',
  },
  DateContainer: {
    height: '100%',
    width: '60%', 
    justifyContent:'center', 
    alignItems: 'center', 
    flexDirection: 'row', 
    borderRightWidth : 1, 
    borderColor: 'lightgray',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  }, 
  HourContainer:{
    width: '40%', 
    justifyContent:'center', 
    alignItems: 'center', 
    flexDirection: 'row',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  HourIcon:{
    height: 30,
     width: 30, 
     backgroundColor: 'gray', 
     marginHorizontal: 4,
    },
    CalendarIcon:{
      height: 30, 
      width: 30, 
      backgroundColor: 'gray', 
      marginHorizontal: 8,
    },
    DateHourText: {
      color: '#000', 
      fontSize: 16,
    },
});
export default App;
