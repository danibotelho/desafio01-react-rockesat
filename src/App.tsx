import { TaskList } from './components/taskList/TaskList'
import { Header } from "./components/header/Header";
import './styles/global.scss'


export function App() {
  return (
    <>
      <Header />
      <TaskList />
    </>
  )
}