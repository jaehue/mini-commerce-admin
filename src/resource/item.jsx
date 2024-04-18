import {
  Edit,
  SimpleForm,
  TextInput,
  TextField,
  required,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";

export const ItemEdit = () => (
  <Edit>
    <SimpleForm>
      <TextField source="id" />
      <TextInput source="name" validate={required()} />
      <TextInput source="desc" validate={required()} fullWidth />
      <TextInput source="image" fullWidth />
      <ArrayInput source="size_options">
        <SimpleFormIterator>
          <TextInput />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="color_options">
        <SimpleFormIterator>
          <TextInput />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);
