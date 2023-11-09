import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";

export default function useIndexedDB(databaseName, tableName, entities) {
  const database = new Dexie(databaseName);

  database.version(1).stores({
    [tableName]: entities,
  });

  const handleAdd = async (values) => {
    await database[tableName].add(values);
  };
  const handleGet =  async() => {
    await useLiveQuery(
      async () => {
        //
        // Query Dexie's API
        //
        const result = await database[tableName].toArray()
        console.log(result)
        // Return result
        return result;
      },
      // specify vars that affect query:
      []
    );
  };
  const friends = null;
    const data =null;
    //  useLiveQuery(
    //   async () => {
    //     //
    //     // Query Dexie's API
    //     //
    //     const friends = await database[tableName].toArray()

    //     // Return result
    //     return friends;
    //   },
    //   // specify vars that affect query:
    //   []
    // );
  return { data,database, handleGet, handleAdd };
}
