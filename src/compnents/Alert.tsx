import { Icon, Label, Modal, Stack } from "@fluentui/react";
import React from "react";

export const Alert:React.FC=()=>{
    return(
        <>
        <Modal>
            <Stack>
                <Stack.Item>
                    <Icon iconName="CheckboxCompositeReversed"></Icon>
                </Stack.Item>
                <Stack.Item>
                    <Label>You Have Successfully completed the process</Label>
                </Stack.Item>
            </Stack>
        </Modal>
        </>
    )
}
