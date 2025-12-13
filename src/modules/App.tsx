import '@xyflow/react/dist/style.css';
import "normalize.css";
import { Editor } from './Editor';
 
export default function App() { 
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Editor />
    </div>
  );
}