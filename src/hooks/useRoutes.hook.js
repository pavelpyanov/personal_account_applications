import {Switch, Route, Redirect} from 'react-router-dom'
import {KnowledgeBase} from '../pages/KnowledgeBase'
import {Requests} from '../pages/Requests'
import {Staff} from '../pages/Staff'
import {Clients} from '../pages/Clients'
import {Actives} from '../pages/Actives'
import {Setting} from '../pages/Setting'

export const useRoutes = () => {
  return(
    <Switch>
      <Route path='/knowledge' exact>
        <KnowledgeBase/>
      </Route>
      <Route path='/requests' exact>
        <Requests/>
      </Route>
      <Route path='/staff' exact>
        <Staff/>
      </Route>
      <Route path='/clients' exact>
        <Clients/>
      </Route>
      <Route path='/actives' exact>
        <Actives/>
      </Route>
      <Route path='/setting' exact>
        <Setting/>
      </Route>
      <Redirect to='/requests' />
    </Switch>
  )
}