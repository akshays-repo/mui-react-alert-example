import { useState } from "react";
import { AlertDialog } from "mui-react-alert";
import Button from "./Button";

function App() {
  return (
    <div className="App">
      <Button />

      {/* This will act as a container */}
      <AlertDialog />
    </div>
  );
}

export default App;
