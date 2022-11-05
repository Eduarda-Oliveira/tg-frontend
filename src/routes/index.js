import React, {useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {AuthProvider} from '../contexts/auth';
import AuthRoutes from '../routes/auth.routes';
import AppRoutes from '../routes/app.routes';

const Routes = () => {
  const {logado, isLoading} = useContext(AuthProvider);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }

  return logado ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;