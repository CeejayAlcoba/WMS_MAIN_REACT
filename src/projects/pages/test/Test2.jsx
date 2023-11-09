import useIndexedDB from "../../hooks/useIndexedDB";

export default function Test2() {
    const {data,database,handleAdd,handleGet}= useIndexedDB('MyTestDatabase',"test2","++id, name, age");
//   const handleIndexedDB = () => {
//     const request = indexedDB.open("MyTestDatabase");
//     request.onerror = (event) => {
//       console.error("Why didn't you allow my web app to use IndexedDB?!");
//     };
//     request.onupgradeneeded = (event) => {
//         // Save the IDBDatabase interface
//         const db = event.target.result;
      
//         // Create an objectStore for this database
//         const objectStore = db.createObjectStore("name", { keyPath: "myKey" });
//         console.log('success')
//       };
//   };
  return (
    <>
      <button onClick={()=>console.log(database)}>T</button>
      <button onClick={()=>handleAdd({name:'hakdog',age:'20'})}>Create</button>
      {console.log(handleGet())}
    </>
  );
}
