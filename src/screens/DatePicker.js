import React, {useState} from 'react';
import {View, Button,Text, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = (props) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    
    let tempDate = new Date(currentDate);
    let fDate = "Date: "+tempDate.getDate() +'/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
    let fTime = 'Time: ' + tempDate.getHours() + ':' +tempDate.getMinutes()+" CET";
    setText(fDate +'\n' +fTime)
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
        
      <View style={{width:'80%',marginTop:'5%',marginLeft:'10%'}}>
        <Button onPress={showDatepicker} title="Add Date" />
      </View>
      <View style={{width:'80%',marginTop:'5%',marginLeft:'10%'}}>
        <Button onPress={showTimepicker} title="Add Time" />
      </View>
      <Text style={{marginTop:'5%',fontSize:15,textAlign:'center',}}>{text}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DatePicker;