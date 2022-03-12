import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

export default function Stat(props) {

  const iconMap = {
    hp: { name: 'heart', color: '#e04136' },
    dex: { name: 'bolt', color: '#29cc47' },
    str: { name: 'hand-rock-o', color: '#a6b825' },
    int: { name: 'leanpub' , color: '#278bb0' }
  };

  const [statValue, setStatValue] = React.useState(props.startValue);

  const incrment = () => {
    if (statValue < 100) setStatValue(statValue + 1);
  }

  const decrament = () => {
    if (statValue > 0) setStatValue(statValue - 1);
  }

  return (
    <View style={styles.container}>
      <Icon name={iconMap[props.icon]?.name} color={iconMap[props.icon]?.color} type="font-awesome" size={40} />
      <Text style={styles.text}>{props.title}</Text>
      {!props.isReadOnly && <Icon
        name="minus-square"
        type="font-awesome"
        size={60}
        onPress={decrament}
      />}
      <Text style={styles.text}>{statValue}</Text>
      {!props.isReadOnly && <Icon
        name="plus-square"
        type="font-awesome"
        size={60}
        onPress={incrment}
      />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
  text: {
    fontSize: 40,
    padding: 15,
  },
  btn: {
    width: 100,
  },
  stat: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
  }
});
