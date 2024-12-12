import { Text, View } from "react-native";
import { UnistylesRuntime } from "react-native-unistyles";

export default function Index() {
  const theme = UnistylesRuntime.getTheme()

  console.log('-theme', theme.background);
  console.log('-theme', theme.box);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
