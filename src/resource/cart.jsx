import {
  ArrayField,
  Datagrid,
  DateField,
  FunctionField,
  List,
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const CartList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="user_id" />
      <TextField source="name" />
      <FunctionField
        label="옵션"
        render={(record) =>
          record.options.map((o) => `${o.name}:${o.value}`).join(" / ")
        }
      />
      <NumberField source="item_price" />
      <NumberField source="quantity" />
      <NumberField source="total_amount" />
      <DateField source="created_at" showTime={true} />
    </Datagrid>
  </List>
);

export const CartShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="user_id" />
      <TextField source="name" />
      <ArrayField source="options">
        <Datagrid bulkActionButtons={false} style={{ width: "200px" }}>
          <TextField source="name" />
          <TextField source="value" />
        </Datagrid>
      </ArrayField>
      <NumberField source="item_price" />
      <NumberField source="quantity" />
      <NumberField source="total_amount" />
      <DateField source="created_at" showTime={true} />
      <ReferenceField
        source="item_id"
        reference="item"
        label="Item"
        link="show"
      />
    </SimpleShowLayout>
  </Show>
);
