import React from "react";
import {
  Label,
  Modal,
  Stack,
  TextField,
  PrimaryButton,
} from "@fluentui/react";
import { Form, Formik } from "formik";
import Stepper from "./Stepper";
import { useFormControlContext } from "../Contexts/FormControl";
import { useFormDataContext } from "../Contexts/FormData";

export interface FormData {
  emailAddress: string;
  password: string;
  confirmPassword: string;
  username: string;
  firstName: string;
  lastName?: string;
  currentCompany: string;
  totalExperience: string;
  designation: string;
}

export interface Props {
  name: string;
  size: number;
  data: FormData;
  lables: string[];
  fields: string[];
}

const RegForm: React.FC<Props> = ({ name, data, lables, fields, size }) => {
  
  const {setData} =useFormDataContext();
  const { count, setCount } = useFormControlContext();
  return (
    <>
      <Modal
        isOpen={true}
        isBlocking={false}
        styles={{
          root: {
            backgroundColor: "#6b59d3",
            display: "flex",
          },
        }}
      >
        <Stack styles={{ root: { width: 800, fontStyle: "bold" } }}>
          <Stack
            styles={{
              root: {
                padding: "10%",
                flex: "column",
                marginRight: "20%",
                marginLeft: "20%",
              },
            }}
          >
            <Stack.Item>
              <Stepper size={size} />
            </Stack.Item>
            <Stack.Item
              styles={{ root: { flex: "row", justifyContent: "center" } }}
            >
              <Label
                styles={{
                  root: {
                    textAlign: "center",
                    fontSize: "25px",
                    marginBottom: "8%",
                    marginTop: "10%",
                  },
                }}
              >
                {name}
              </Label>
            </Stack.Item>
            <Formik
              initialValues={data}
              validationSchema={{}}
              onSubmit={(values, actions) => {
                console.log(values);
              }}
            >
              {({
                values,
                handleChange,
                handleBlur,
                errors,
                touched,
                isSubmitting,
              }) => 
                <Form>
                  <Stack.Item>
                    <Label>{lables[0]}</Label>
                    <TextField name={fields[0]} value={values.emailAddress} onChange={handleChange}></TextField>
                  </Stack.Item>
                  <Stack.Item
                    styles={{ root: { marginTop: "5%", marginBottom: "5%" } }}
                  >
                    <Label>{lables[1]}</Label>
                    <TextField name={fields[1]} value={values.password} onChange={handleChange}></TextField>
                  </Stack.Item>
                  <Stack.Item>
                    <Label>{lables[2]}</Label>
                    <TextField name={fields[2]} value={values.confirmPassword} onChange={handleChange}></TextField>
                  </Stack.Item>
                  <Stack.Item
                    styles={{
                      root: {
                        marginTop: "8%",
                        display: "flex",
                        justifyContent: "space-between",
                      },
                    }}
                  >
                    {count > 0 && (
                      <PrimaryButton
                        styles={{
                          root: { backgroundColor: "#c0c0c0", borderRadius: 7 },
                        }}
                        onClick={() => {
                          if (count !== 0) setCount(count - 1);
                        }}
                      >
                        Back
                      </PrimaryButton>
                    )}
                    <PrimaryButton
                      styles={{
                        root: { backgroundColor: "#6b59d3", borderRadius: 7 },
                      }}
                      onClick={() => {
                        if (count < 2) setCount(count + 1);
                      }}
                    >
                      {count < 2 ? "Next" : "Submit"}
                    </PrimaryButton>
                  </Stack.Item>
                </Form>
              }
            </Formik>
          </Stack>
        </Stack>
      </Modal>
    </>
  );
};

export default RegForm;
