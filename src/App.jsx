// import { Profiler } from "react";
import Form from "./Form";

const App = () => {
  // const handleRender = (
  //   id, // 傳給 Profiler 的 id，此範例是 <Form /> component
  //   phase, // "mount"（第一次渲染）或 "update"（重新渲染 re-render） 或 "unmount" (元件卸載)
  //   actualDuration, // 元件渲染所需的時間，優化時可特別注意這個
  //   baseDuration, // 不使用優化 (memoization) 的情况下元件渲染的時間
  //   startTime, // 本次更新中 React 開始渲染的時間
  //   commitTime, // 本次更新中 React commit 的時間
  //   interactions, // 本次更新的交互集合
  // ) => {
  //   // 輸出性能資訊或處理性能資料
  //   console.log(`Profiler ID: ${id}`);
  //   console.log(`Render phase: ${phase} (mount || update || unmount)`);
  //   console.log(`Actual duration: ${actualDuration.toFixed(2)} (毫秒)`);
  //   console.log(`Base duration: ${baseDuration.toFixed(2)} (毫秒)`);
  //   console.log(`Start time: ${startTime.toFixed(2)} (毫秒)`);
  //   console.log(`Commit time: ${commitTime.toFixed(2)} (毫秒)`);
  //   console.log(`Interactions: ${interactions}`);
  // };
  // return (
  //   <Profiler id="Form" onRender={handleRender}>
  //     <Form />
  //   </Profiler>
  // );
  return <Form />;
};

export default App;
