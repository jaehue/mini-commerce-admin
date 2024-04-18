import { useEffect, useState } from "react";
import buildHasuraProvider from "ra-data-hasura";
import {
  Admin,
  Resource,
  ListGuesser,
  ShowGuesser,
  DataProvider,
} from "react-admin";
import { CartList, CartShow } from "./resource/cart";
import { ItemEdit } from "./resource/item";

export const App = () => {
  const [dataProvider, setDataProvider] = useState<DataProvider | undefined>();

  useEffect(() => {
    const buildDataProvider = async () => {
      const dataProvider = await buildHasuraProvider({
        clientOptions: {
          uri: import.meta.env.VITE_GRAPHQL_URL!,
          headers: {
            "x-hasura-admin-secret":
            import.meta.env.VITE_GRAPHQL_ADMIN_SECRET!,
          },
        },
      });
      setDataProvider(dataProvider);
    };
    buildDataProvider();
  }, []);

  if (!dataProvider) return <p>Loading...</p>;

  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="item"
        list={ListGuesser}
        edit={ItemEdit}
        show={ShowGuesser}
      />
      <Resource name="cart" list={CartList} show={CartShow} />
    </Admin>
  );
};
