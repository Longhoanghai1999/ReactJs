import React, { useContext } from "react";
import Profile from "./Profile";
import { UserContext } from "./Parent";

// export default function Child({ firstName, age, handleTang }) {
//   return (
//     <div>
//       <Profile firstName={firstName} age={age} />
//       <button onClick={handleTang}>Tăng age</button>
//     </div>
//   );
// }

export default function Child() {
  const { handleTang } = useContext(UserContext);
  return (
    <div>
      <Profile />
      <button onClick={handleTang}>Tăng age</button>
    </div>
  );
}
