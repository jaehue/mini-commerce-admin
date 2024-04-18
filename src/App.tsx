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
          uri: "https://golden-sheepdog-98.hasura.app/v1/graphql",
          headers: {
            "x-hasura-admin-secret":
              "L4FFPcHeeLSwtz3qUR2v3edIcEUKLVhviT3cQo7okN7Qox9bH6wE4j0f91eFL1HP",
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
