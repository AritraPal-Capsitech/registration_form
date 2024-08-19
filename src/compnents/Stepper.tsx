import { Icon, IIconStyles, IStackItemStyles, Stack } from "@fluentui/react";
import React from "react";

interface Props {
  size: number;
}

const Stepper: React.FC<Props> = ({ size }) => {
  let arr = [];
  for (let i = 1; i <= size; i++) {
    arr.push(i);
  }

  const iconStyles: IIconStyles = {
    root: {
      backgroundColor: "#6b59d3",
      height: 30,
      width: 30,
      flex: "row",
      justifyContent: "center",
      color: "white",
      fontSize: 15,
      borderRadius: 25,
      textAlign: "center",
      alignContent: "center",
    },
  };

  const itemStyle: IStackItemStyles = {
    root: {
      flex: "row",
      justifyContent: "space-between",
    },
  };

  const lineStyle: IStackItemStyles = {
    root: {
      flex: "row",
      justifyContent: "space-between",
      alignContent: "center",
    },
  };

  return (
    <>
      <Stack
        horizontal
        styles={{
          root: {
            flex: "row",
            justifyContent: "space-between",
            alignItems: "center",
          },
        }}
        tokens={{ childrenGap: 10 }}
      >
        {arr.map((_, i) => {
          if (i <size-1) {
            return (
              <>
                <Stack.Item styles={itemStyle}>
                  <Icon iconName="CircleRing" styles={iconStyles}>
                    {i+1}
                  </Icon>
                </Stack.Item>
                <Stack.Item styles={lineStyle}>
                  <hr style={{ width: 100, maxHeight: 1 }}></hr>
                </Stack.Item>
              </>
            );
          } else {
            return (
              <>
                <Stack.Item styles={itemStyle}>
                  <Icon iconName="CircleRing" styles={iconStyles}>
                    {i+1}
                  </Icon>
                </Stack.Item>
              </>
            );
          }
        })}
      </Stack>
    </>
  );
};

export default Stepper;
