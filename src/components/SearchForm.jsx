import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { MdCancel } from "react-icons/md";

export default function SearchForm() {
  const [searchInput, setSearchInput] = useState("");

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      console.log("Enter key pressed");

      // 여기에 엔터를 눌렀을 때 실행할 코드를 작성합니다.
      setSearchInput("");
    }
  }
  function handleClear() {
    setSearchInput("");
  }

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <Form.Control
        className="m-auto w-75"
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handleKeyDown}
        value={searchInput}
        type="text"
        placeholder="Search"
        style={{
          width: "100%",
          padding: "12px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "24px",
          backgroundColor: "#efefef",
          color: "#333",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      />
      {searchInput.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "15%",
            transform: "translateY(-50%)",
          }}
        >
          <MdCancel
            style={{ color: "#aaa", cursor: "pointer" }}
            onClick={handleClear}
          />
        </div>
      )}
    </div>
  );
}
