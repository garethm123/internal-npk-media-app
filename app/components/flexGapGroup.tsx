import { ReactNode } from "react";
import { View } from "react-native";

type IFlexGapGroup = {
  components: Array<{
    component: ReactNode;
    id: string;
  }>;
};

export default function FlexGapGroup({ components }: IFlexGapGroup) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        paddingVertical: 24,
      }}
    >
      {components.map(({ component, id }) => (
        <View style={{ marginRight: 8, marginBottom: 8 }} key={id}>
          {component}
        </View>
      ))}
    </View>
  );
}
