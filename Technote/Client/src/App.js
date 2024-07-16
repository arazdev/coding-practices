import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Public from './components/Public';
import Login from './features/auth/Login';
import DashLayout from './components/DashLayout';
import Welcome from './features/auth/Welcome';
import NotesList from './features/notes/NotesList';
import UsersList from './features/users/UsersList';
import EditUser from './features/users/EditUser';
import NewUserForm from './features/users/NewUserForm';
import EditNote from './features/notes/EditNote';
import NewNote from './features/notes/NewNote';
import Prefetch from './features/auth/PreFetch';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout></Layout>}></Route>
      <Route index element={<Public></Public>}></Route>
      <Route path='login' element={<Login></Login>}></Route>

      <Route element={<Prefetch></Prefetch>}>

        <Route path='dash' element={<DashLayout></DashLayout>}>
          <Route index element={<Welcome></Welcome>}></Route>

          <Route path='users'>
            <Route index element={<UsersList></UsersList>}></Route>
            <Route path=':id' element={<EditUser></EditUser>}></Route>
            <Route path='new' element={<NewUserForm></NewUserForm>}></Route>
          </Route>

          <Route path='notes'>
            <Route index element={<NotesList></NotesList>}></Route>
            <Route path=':id' element={<EditNote></EditNote>}></Route>
            <Route path='new' element={<NewNote></NewNote>}></Route>
          </Route>

        </Route>
      </Route>
    </Routes>
  );
}

export default App;