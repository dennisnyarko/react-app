import React , { useEffect, useState} from "react";
import Button from './components/Button';
import Alert from './components/Alert';

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);


  return (
    <div>
      { alertVisible && <Alert>My alert</Alert>}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;
