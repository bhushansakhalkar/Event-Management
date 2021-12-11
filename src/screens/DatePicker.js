import React, {useState} from 'react';
import {View, Button,Text, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    
    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() +'/' + (tempDate.getMonth()+ 1) + '/' + tempDate.getFullYear();
    let fTime = 'Time:' + tempDate.getHours() + '| Mins' +tempDate.getMinutes();
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
      <View>
          <Text>{text}</Text>
        <Button onPress={showDatepicker} title="Add Date" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Add Time" />
      </View>
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