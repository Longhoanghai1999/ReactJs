import React, { useEffect, useState } from "react";

export default function Tang() {
  // Hàm khởi tạo để lấy giá trị cho vào useState
  const initClassName = () => {
    return "Tin12A2";
  };

  const [firstName, setFirstName] = useState("Long");
  const [className] = useState(initClassName);
  const [age, setAge] = useState(20);
  const [address, setAddress] = useState({
    duong: "Cầu diễn",
    sonha: 32,
    tinh: "Hà Nội",
  });

  const handleChangeAge = () => {
    setAge((prevAge) => {
      return prevAge + 1;
    });
  };

  const hanleChangeAddress = () => {
    setAddress((prevAdd) => {
      return {
        ...prevAdd,
        duong: "Cầu giấy",
        tinh: "Thanh Hóa",
      };
    });
  };

  // Giống componentDidUpdate, function luôn chạy lại khi component re-render
  // Có thể truy cập vào các DOM thật do nó chạy sau lần render đầu tiên
  useEffect(() => {
    let liList = document.querySelectorAll("li");
    console.log(liList);
  });

  // Thằng này chạy 1 lần duy nhất sau khi component rerender
  // Nó thường được dùng khi chúng ta gọi API
  useEffect(() => {
    console.log("abc");
  }, []);

  // Truyền tham số để làm giá trị phụ thuộc cho useEffect cần hết sức chú ý, tránh trường hợp
  // Vòng lặp vô tận do re render quá nhiều lần
  //   const name = "an"
  //   useEffect(() => {
  //     console.log("abc");
  //   }, [name]);

  return (
    <div>
      Hiển thị thôn tin
      <p>First Name: {firstName}</p>
      <p>Age: {age}</p>
      <p>Địa chỉ:</p>
      <ul>
        <li>{address.duong}</li>
        <li>{address.sonha}</li>
        <li>{address.tinh}</li>
      </ul>
      <p>Lớp: {className}</p>
      <button onClick={handleChangeAge}>Click</button>
      <button onClick={hanleChangeAddress}>Change Địa chỉ</button>
    </div>
  );
}
