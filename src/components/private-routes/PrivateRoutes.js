import React from 'react'
import ConfigRoutes from '../../config/routes'

function PrivateRoutes(props){
  const role = props.role || 'guest'

  const allowedRoutes = ConfigRoutes[role].allowedRoutes
  const redirectRoutes = ConfigRoutes[role].redirectRoutes
  return(
    <Switch>
      {allowedRoutes.map(route => {
        <Route 
          path={route.url}
          ket={route.url}
          exact
          component={route.component}
        />
      })}
      <Redirect to={redirectRoutes}/>
    </Switch>
  )
}
export default PrivateRoutes;