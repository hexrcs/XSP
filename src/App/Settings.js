import React from "react";
import styled from "@emotion/styled";
import Button from "react-bootstrap/lib/Button";

export default function Settings() {
  return (
    <div>
      <Button
        variant="primary"
        size="sm"
        onClick={() => console.log("Use sample DB")}
      >
        Use Sample Database
      </Button>
    </div>
  );
}
