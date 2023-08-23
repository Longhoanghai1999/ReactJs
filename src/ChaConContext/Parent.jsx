import { createContext, useState } from "react";
import Child from "./Child";

// Tạo conText để cháu chắt dùng được thông qua useConext
export const UserContext = createContext();
// Nếu không khai báo Provider thì useContext sẽ sử dụng default value như sau
// export const UserContext = createContext({
//   // default value
// });

export default function Parent() {
  const [firstName, setFirstName] = useState("Long");
  const [age, setAge] = useState(24);

  const handleTang = () => {
    setAge((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <div>
      <UserContext.Provider
        value={{
          firstName,
          age,
          handleTang: handleTang,
        }}
      >
        <Child />
      </UserContext.Provider>
    </div>
  );
}
